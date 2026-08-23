const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;

let client;
let db;

const connectToDB = async () => {
  try {
    if (!client) {
      client = new MongoClient(MONGO_URI);
      await client.connect();
      console.log("Successfully connected to MongoDB");

      db = client.db(DB_NAME);
      console.log(`database: ${DB_NAME}`);
    }

    return db;

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectToDB;
