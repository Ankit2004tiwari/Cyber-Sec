'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { FaBlog, FaFileAlt, FaChartBar, FaVideo } from 'react-icons/fa';

const resources = [
  {
    title: 'Blogs',
    icon: <FaBlog className="text-white text-3xl" />,
    description: 'Explore expert-written blogs on modern cybersecurity topics.',
    bg: 'from-blue-400 via-blue-300 to-blue-200',
  },
  {
    title: 'Whitepapers',
    icon: <FaFileAlt className="text-white text-3xl" />,
    description: 'Access deep-dive research and strategic whitepapers.',
    bg: 'from-pink-400 via-pink-300 to-pink-200',
  },
  {
    title: 'Case Studies',
    icon: <FaChartBar className="text-white text-3xl" />,
    description: 'Learn from real-world cybersecurity case studies.',
    bg: 'from-purple-400 via-purple-300 to-purple-200',
  },
  {
    title: 'Webinars',
    icon: <FaVideo className="text-white text-3xl" />,
    description: 'Watch our engaging and informative webinars on demand.',
    bg: 'from-cyan-400 via-cyan-300 to-cyan-200',
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-pink-100 to-purple-100 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4"
        >
          Explore Our Resources 📚
        </motion.h1>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Dive into curated content designed to boost your cybersecurity knowledge.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className={`rounded-2xl shadow-xl border-0 hover:scale-[1.02] transition-transform duration-300 bg-gradient-to-br ${resource.bg}`}>
                <CardContent className="p-6 flex flex-col items-center text-center text-white">
                  <div className="mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-sm">{resource.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
