"use client";
import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

/**
 * ContactForm - Contact form with validation and animated button.
 * Fields: name, email, message. Validates required and email format.
 */
const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const validate = () => {
    const errs: { [k: string]: string } = {};
    if (!form.name) errs.name = "Name is required.";
    if (!form.email) errs.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Invalid email.";
    if (!form.message) errs.message = "Message is required.";
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setApiError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setApiError(data.error || "Failed to send message.");
      }
    } catch (_err) {
      setApiError("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl glass card-hover p-8 animate-fade-in">
      {submitted ? (
        <div className="text-center text-green-600 dark:text-green-400 font-semibold">
          Thank you for reaching out! I will get back to you soon.
        </div>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className={`px-4 py-3 rounded-lg border ${errors.name ? "border-red-400" : "border-gray-300 dark:border-gray-700"} bg-white dark:bg-[#23232b] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition`}
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
          />
          {errors.name && <span id="name-error" className="text-red-500 text-sm">{errors.name}</span>}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className={`px-4 py-3 rounded-lg border ${errors.email ? "border-red-400" : "border-gray-300 dark:border-gray-700"} bg-white dark:bg-[#23232b] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition`}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && <span id="email-error" className="text-red-500 text-sm">{errors.email}</span>}
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className={`px-4 py-3 rounded-lg border ${errors.message ? "border-red-400" : "border-gray-300 dark:border-gray-700"} bg-white dark:bg-[#23232b] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition`}
            aria-invalid={!!errors.message}
            aria-describedby="message-error"
          />
          {errors.message && <span id="message-error" className="text-red-500 text-sm">{errors.message}</span>}
          {apiError && <span className="text-red-500 text-sm">{apiError}</span>}
          <button
            type="submit"
            className="mt-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold shadow-lg btn-animated focus:outline-none focus:ring-2 focus:ring-pink-400 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? <LoadingSpinner size={20} /> : "Send Message"}
          </button>
        </form>
      )}
      <div className="mt-8 text-center text-gray-700 dark:text-gray-300">
        Or email me directly: <a href="mailto:matteuskasteng@gmail.com" className="text-blue-600 dark:text-pink-400 underline">matteuskasteng@gmail.com</a>
      </div>
    </div>
  );
};

export default ContactForm; 