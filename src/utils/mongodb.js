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
    try {
      client = new MongoClient(uri, options);
      await client.connect();
      console.log("Connected to MongoDB successfully"); // Log success
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error); // Log failure
      throw error; // Optionally, re-throw the error to handle it further up the call stack
    }
  }
  return { db: client.db("ourshare") }; // Replace "your_database_name" with your actual database name
}
