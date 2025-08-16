import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

const emailPassword = process.env.EMAIL_PASSWORD;

const router = express.Router();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "adeboyerejoice2374@gmail.com",
    pass: emailPassword,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const { firstName, email, phone, message } = req.body;

  const mail = {
    from: name,
    to: "adeboyerejoice2374@gmail.com",
    subject: "Connect Form Submission from " + firstName,
    html: `<p>Name: ${name}</p>
              <p>Email: ${email}</p>
              <p>Phone: ${phone}</p>
              <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({
        status: "ERROR",
        message: "An error occurred while sending the email.",
      });
    } else {
      res.json({ status: "SUCCESS", message: "Message sent successfully!" });
    }
  });
});
