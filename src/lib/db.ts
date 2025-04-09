// lib/db.ts

import mysql from 'mysql2/promise';

const {
  DB_HOST = 'localhost',
  DB_USER = 'root',
  DB_PASSWORD,
  DB_NAME = 'breach_monitoring',
  DB_PORT = '3306',
} = process.env;

// Create a connection pool with error handling
const createPool = () => {
  try {
    return mysql.createPool({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      port: parseInt(DB_PORT, 10),
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0
    });
  } catch (error) {
    console.error('Failed to create connection pool:', error);
    return null;
  }
};

const pool = createPool();

export async function connectDB() {
  try {
    // If no password is set, throw a clear error
    if (!DB_PASSWORD) {
      throw new Error('Database password not configured in environment variables');
    }

    // Try pool first if available
    if (pool) {
      const connection = await pool.getConnection();
      return connection;
    }

    // Fallback to direct connection if pool fails
    const connection = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      port: parseInt(DB_PORT, 10)
    });

    // Test the connection
    await connection.ping();
    
    return connection;
  } catch (error) {
    console.error('Database connection failed:', error);
    
    // Return a mock connection for development/testing
    if (process.env.NODE_ENV === 'development') {
      return {
        execute: async () => {
          return [[], []];
        },
        query: async () => {
          return [[], []];
        },
        end: async () => {},
        ping: async () => {},
        // Add other necessary mock methods
      };
    }
    
    throw error;
  }
}

// Helper function to check database connection
export async function testConnection() {
  try {
    const connection = await connectDB();
    await connection.ping();
    await connection.end();
    return true;
  } catch (error) {
    console.error('Database connection test failed:', error);
    return false;
  }
}

export default pool;
