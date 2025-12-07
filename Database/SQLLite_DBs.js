export const accountDB = async (db) => {
  await db.execAsync(`CREATE TABLE IF NOT EXISTS accounts (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          total_amount INTEGER NOT NULL,
          used_amount INTEGER,
          remaining_amount INTEGER
          );
          PRAGMA journal_mode=WAL;`
  );
};