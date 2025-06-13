import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure your SMTP settings here
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.example.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "user@example.com",
    pass: process.env.SMTP_PASS || "password",
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    await transporter.sendMail({
      from: `Website Contact <${process.env.SMTP_USER || "user@example.com"}>`,
      to: process.env.CONTACT_TO || "matteuskasteng@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message.replace(/\n/g, "<br/>")}</p>`,
    });
    return NextResponse.json({ success: true });
  } catch (_err) {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
} 