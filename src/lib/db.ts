import mysql from 'mysql2/promise';

const {
  DB_HOST = 'localhost',
  DB_USER = 'root',
  DB_PASSWORD,
  DB_NAME = 'breach_monitoring',
  DB_PORT = '3306',
} = process.env;

const createPool = () => {
  try {
    const pool = mysql.createPool({
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

    console.log('✅ MySQL pool created with host:', DB_HOST);
    return pool;
  } catch (error) {
    console.error('❌ Failed to create connection pool:', error);
    return null;
  }
};

const pool = createPool();

export async function connectDB() {
  try {
    if (!DB_PASSWORD) {
      throw new Error('Database password not configured in environment variables');
    }

    if (pool) {
      const connection = await pool.getConnection();
      return connection;
    }

    const connection = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      port: parseInt(DB_PORT, 10)
    });

    await connection.ping();
    return connection;

  } catch (error) {
    console.error('❌ Database connection failed:', error);

    if (process.env.NODE_ENV === 'development') {
      return {
        execute: async () => [[], []],
        query: async () => [[], []],
        end: async () => {},
        ping: async () => {}
      };
    }

    throw error;
  }
}

export async function testConnection() {
  try {
    const connection = await connectDB();
    await connection.ping();
    await connection.end();
    return true;
  } catch (error) {
    console.error('❌ Database connection test failed:', error);
    return false;
  }
}

export default pool;
