import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function openDb() {
  return open({
    filename: "./data/db.sqlite3",
    driver: sqlite3.Database,
  });
}
