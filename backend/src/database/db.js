const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const path = require("path");

const dbPath = path.join(__dirname, "users.db");

let db = null;

const initializeDatabase = async () => {
  try {
    if (db) {
      return db;
    } else {
      db = await open({
        filename: dbPath,
        driver: sqlite3.Database,
      });
      await db.exec(`PRAGMA foreign_keys = ON;`);

      await db.exec(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL UNIQUE,  
                email TEXT NOT NULL UNIQUE,
                password_hash TEXT NOT NULL,
                first_name TEXT NOT NULL,
                last_name TEXT NOT NULL,    
                is_active INTEGER DEFAULT 1,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP
            );
        `);
      return db;
    }
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;    
  }
};

const getDatabase = () => {
  if (!db) {
    throw new Error("Database not initialized. Call initializeDatabase()");
  } 
    return db;
};

module.exports = {
  initializeDatabase,
    getDatabase,
};
