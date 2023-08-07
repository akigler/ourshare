// utils/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let clientPromise;

export async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri, options);
    await client.connect();
  }
  return { db: client.db("ourshare") }; // Replace "your_database_name" with your actual database name
}
