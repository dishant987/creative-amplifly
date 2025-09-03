import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",   // <--- MUST include this!
  port: 587,                // or 465
  secure: false,  
  auth: {
    user: "onceseen01@gmail.com",
    pass: "vbabfcsuecvbvfiu",
  },
    logger: true,
  debug: true,
});

export default transporter;
