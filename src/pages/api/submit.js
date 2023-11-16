// pages/api/submit.js
import { connectToDatabase } from "../../utils/mongodb";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const formData = req.body;
  formData.signUpTime = new Date();

  try {
    // Connect to MongoDB
    const { db } = await connectToDatabase();

    // Insert the form data into the database
    await db.collection("formData").insertOne(formData);

    // Configure Nodemailer
    let transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465, // or 587 if using TLS
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USERNAME, // Zoho email
        pass: process.env.EMAIL_PASSWORD, // Zoho password or app-specific password
      },
    });

    // Email options
    let mailOptions = {
      from: `"OurShare - Dean" <${process.env.EMAIL_USERNAME}>`,
      to: formData.email, // User's email from the form data
      subject: "Join OurShare - Unlock your equity!",
      html: `
      <html>
      <head>
        <style>
          .email-container {
            max-width: 600px;
            margin: 0 auto auto 0;
            font-family: 'Arial', sans-serif;
            color: #000000;
          }
          .banner-image {
            width: 100%;
            max-width: 600px;
            height: auto;
          }
          .email-content {
            margin-top: 20px;
            font-size: 16px; /* Larger font size */
            line-height: 1.6; /* Improved line spacing for readability */
            color: #000000;
          }
          .email-content p {
            margin-bottom: 20px; /* Spacing between paragraphs */
          }
          .email-sign-form{
            font-weight: bold;
          }
          .email-signature {
            margin-top: 30px;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
        <img src="https://www.ourshare.ai/images/OurShareBanners.png" alt="Banner" style="width:100%; max-width:600px;">
          <div class="email-content">
            <p>Hi!</p>
            <p>Thanks for being interested in OurShare, the first equity platform that allows employees to have a better chance of unlocking value for yourself and others. The reality is that most startups equity ends up becoming worthless since 95% of startups fail. Which is why the venture capital model only works when they invest in many startups to hopefully own a piece of the next Airbnb, Uber, or Google. With Ourshare, you can now invest your shares and own a piece of every startup too so you can have the best chances of financial freedom. With that said, I am super excited to let you know that we are almost ready to launch OurShare Fund 1.<br><br> 

            <div class="email-sign-form">To be able to participate you will need to fill out this form to evaluate your ownership of shares:<br></div>
            <a href="https://forms.gle/ZzTYDzsfPi8A7NHm7"><strong><u>Fund Sign Up Form</u></strong></a><br><br>
            Our team will then review and see what shares of yours are eligible to be contributed into Fund 1. The more shares you contribute the larger % ownership you will have. We already have over 50+ fast-growing startups interested from different stages, industries, and geographies. Join us and get ready to collect the upside of all of them through OurShare!<br><br>
            
            If you have any questions, don’t hesitate to reach out. I am excited to go on this incredible journey with you! </p>
            <!-- Your email content -->
            <div class="email-signature">
              <p>Thanks,<br>Dean Glas<br>Co-Founder | OurShare</p>
            </div>
          </div>
        </div>
      </body>
      </html>
  `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    // Respond with a success message
    return res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error saving form data:", error);
    console.log("Form data received:", formData);
    console.error("Error saving form data:", error.message);

    if (error.message.includes("some specific error text")) {
      return res.status(400).json({ message: "A specific error message" });
    }
    console.error("Error saving form data:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
