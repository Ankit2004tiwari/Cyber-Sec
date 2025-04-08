"use client";

import { SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactPaginate from "react-paginate";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Card, CardContent } from "@/components/ui/card";

// Import Lucide icons safely with fallback
import * as LucideIcons from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);

const NoSSRCSVLink = dynamic(
  () => import("react-csv").then((mod) => mod.CSVLink),
  {
    ssr: false,
  }
);

const breachIcons = {
  Malware: <LucideIcons.Bug className="text-red-400" size={24} />,
  Phishing: <LucideIcons.AlertTriangle className="text-yellow-400" size={24} />,
  "Unauthorized Access": (
    <LucideIcons.Shield className="text-blue-400" size={24} />
  ),
  "Network Intrusion": (
    <LucideIcons.WifiOff className="text-pink-400" size={24} />
  ),
};

const severityColor = {
  High: "bg-red-600 text-white",
  Medium: "bg-yellow-300 text-black",
  Low: "bg-green-500 text-white",
};

interface Breach {
  id: number;
  type: string;
  severity: string;
  description: string;
  mitigation: string;
  timestamp: string;
  aiInsights?: {
    rootCause?: string;
    impact?: string;
    recommendation?: string;
  };
}

const analyzeBreachWithAI = async (description: string) => {
  try {
    const res = await fetch("/api/analyze-breach", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description }),
    });

    if (!res.ok) throw new Error("Failed to analyze breach");

    const data = await res.json();
    return data; // { rootCause, impact, recommendation }
  } catch (error) {
    console.error("AI analysis error:", error);
    return null;
  }
};

export default function BreachMonitoringPage() {
  const [showInsightsModal, setShowInsightsModal] = useState(false);
  const [selectedInsights, setSelectedInsights] = useState<{
    rootCause: string;
    impact: string;
    recommendation: string;
  } | null>(null);

  const [breachData, setBreachData] = useState<Breach[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [severityFilter, setSeverityFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);

  const breachesPerPage = 5;

  useEffect(() => {
    const fetchBreachData = async () => {
      try {
        const response = await fetch("/api/analyze-breach", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            description: "Malware detected on internal server node-17.",
          }),
        });
        const data = await response.json();
  
        const formattedData = [
          {
            id: 1,
            type: "Malware",
            severity: "High",
            description: "Malware detected on internal server node-17.",
            mitigation: "Isolate the server and run deep antivirus scans.",
            timestamp: "2025-04-08 14:23",
            aiInsights: data, // 👈 Here
          },
          {
            id: 2,
            type: "Phishing",
            severity: "Medium",
            description: "Phishing email targeting employees.",
            mitigation: "Educate employees and block malicious domains.",
            timestamp: "2025-04-09 10:15",
          }
        ];
  
        setBreachData(formattedData);
      } catch (error: any) {
        console.error("Error fetching breach data:", error.message || error);
      }
    };
  
    fetchBreachData();
  }, []);
  
  useEffect(() => {
    const critical = breachData.find((b) => b.severity === "High");
    if (critical) {
      toast.error("High severity breach detected: " + critical.description);
    }
  }, [breachData]);

  const filtered = breachData.filter(
    (b) =>
      (severityFilter === "All" || b.severity === severityFilter) &&
      (searchTerm === "" ||
        b.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const currentBreaches = filtered.slice(
    currentPage * breachesPerPage,
    (currentPage + 1) * breachesPerPage
  );

  const chartCounts = ["Malware", "Phishing", "Unauthorized Access", "Network Intrusion"].map(type =>
    filtered.filter((b) => b.type === type).length
  );
  
  const chartData = {
    labels: ["Malware", "Phishing", "Unauthorized Access", "Network Intrusion"],
    datasets: [
      {
        data: chartCounts,
        backgroundColor: ["#e11d48", "#eab308", "#3b82f6", "#f97316"],
      },
    ],
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#090E24] via-[#0F172A] to-[#1E293B] p-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 animate-pulse bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-800/30 via-indigo-700/10 to-transparent"></div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-400 mb-10 drop-shadow-lg"
      >
        🚨 AI-Powered Breach Monitoring
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex flex-wrap justify-center gap-6 bg-[#101B35]/70 p-6 rounded-xl backdrop-blur-xl border border-purple-900 shadow-2xl"
      >
        <button
          className="mt-2 text-blue-500 underline hover:text-blue-400"
          onClick={async () => {
            const insights = await analyzeBreachWithAI(
              "Provide a valid breach description here"
            );
            if (insights) {
              setSelectedInsights(insights); // This should already be in your state
              setShowInsightsModal(true); // You likely have a modal toggle for this
            }
          }}
        >
          Analyze with AI
        </button>

        <input
          type="text"
          placeholder="🔍 Search breaches..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3 p-3 rounded-lg bg-black/20 backdrop-blur border border-purple-700 placeholder-white text-white focus:ring-2 focus:ring-purple-500"
        />
        <select
          value={severityFilter}
          onChange={(e) => setSeverityFilter(e.target.value)}
          className="p-3 rounded-lg bg-black/20 backdrop-blur border border-purple-700 text-white focus:ring-2 focus:ring-purple-500"
        >
          <option value="All">All Severities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <NoSSRCSVLink
          data={filtered}
          headers={[
            { label: "Type", key: "type" },
            { label: "Severity", key: "severity" },
            { label: "Description", key: "description" },
            { label: "Mitigation", key: "mitigation" },
            { label: "Timestamp", key: "timestamp" },
          ]}
          filename="breach_report.csv"
          className="p-3 bg-gradient-to-r from-teal-500 to-lime-500 rounded-lg font-bold text-black shadow-md hover:shadow-lg transition"
        >
          📥 Export CSV
        </NoSSRCSVLink>
      </motion.div>

      <div className="max-w-md mx-auto my-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="bg-black/50 p-6 rounded-xl border border-purple-800 shadow-2xl backdrop-blur-xl"
        >
          <Doughnut data={chartData} />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {currentBreaches.map((breach, idx) => (
          <motion.div
            key={breach.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="bg-[#1D2339]/80 backdrop-blur-lg border border-purple-700 shadow-xl rounded-2xl">
              <CardContent className="p-6 text-white space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-800/30 p-2 rounded-full">
                    {breachIcons[breach.type as keyof typeof breachIcons]}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-cyan-300">
                      {breach.type}
                    </h2>
                    <span
                      className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${
                        severityColor[
                          breach.severity as keyof typeof severityColor
                        ]
                      }`}
                    >
                      {breach.severity}
                    </span>
                  </div>
                </div>

                <div className="text-sm">
                  <p className="font-bold text-pink-300">📄 Description:</p>
                  <p className="text-white/90">{breach.description}</p>
                </div>

                <div className="text-sm">
                  <p className="font-bold text-yellow-300">🛠️ Mitigation:</p>
                  <p className="text-white/90">{breach.mitigation}</p>
                </div>

                <div className="bg-black/40 rounded-lg p-4 border border-purple-800 shadow-inner space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-indigo-400">
                    <LucideIcons.BrainCircuit size={18} /> AI Insight
                  </div>
                  <p>
                    <span className="text-purple-400 font-semibold">
                      🔍 Root:
                    </span>{" "}
                    {breach.aiInsights?.rootCause || "🔍 Not analyzed yet"}
                  </p>
                  <p>
                    <span className="text-rose-400 font-semibold">
                      💥 Impact:
                    </span>{" "}
                    {breach.aiInsights?.impact || "N/A"}
                  </p>
                  <p>
                    <span className="text-green-400 font-semibold">
                      🛡️ Advice:
                    </span>{" "}
                    {breach.aiInsights?.recommendation || "N/A"}
                  </p>
                </div>

                <div className="text-xs text-right text-white/60 pt-2">
                  📅 {breach.timestamp}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <ReactPaginate
        pageCount={Math.ceil(filtered.length / breachesPerPage)}
        onPageChange={(event: { selected: SetStateAction<number> }) =>
          setCurrentPage(event.selected)
        }
        containerClassName="flex justify-center mt-10 gap-4 text-white relative z-10"
        activeClassName="font-bold underline text-cyan-400"
        previousLabel="⬅️"
        nextLabel="➡️"
      />

      <ToastContainer />
      {showInsightsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white dark:bg-[#121212] text-black dark:text-white p-6 rounded-2xl shadow-2xl w-full max-w-xl relative transition-all duration-300">
            <button
              onClick={() => setShowInsightsModal(false)}
              className="absolute top-3 right-4 text-red-500 hover:text-red-700 text-xl font-bold"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-4">
              🔍 AI Breach Insights
            </h2>

            {!selectedInsights ? (
              <div className="text-center py-8 animate-pulse text-blue-500">
                Analyzing with AI...
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <span className="font-bold text-purple-500">Root Cause:</span>{" "}
                  {selectedInsights.rootCause}
                </div>
                <div>
                  <span className="font-bold text-red-500">Impact:</span>{" "}
                  {selectedInsights.impact}
                </div>
                <div>
                  <span className="font-bold text-green-500">
                    Recommendation:
                  </span>{" "}
                  {selectedInsights.recommendation}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
    </div>
  );
}
