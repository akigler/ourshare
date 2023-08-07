// pages/api/submit.js
import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const formData = req.body;

  try {
    // Connect to MongoDB
    const { db } = await connectToDatabase();

    // Insert the form data into the database
    await db.collection("formData").insertOne(formData);

    // Respond with a success message
    return res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error saving form data:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
