"use client";
import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="w-full py-20 flex flex-col items-center bg-transparent">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Contact</h2>
      <div className="w-full max-w-xl glass card-hover p-8 animate-fade-in">
        {submitted ? (
          <div className="text-center text-green-600 dark:text-green-400 font-semibold">
            Thank you for reaching out! I will get back to you soon.
          </div>
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#23232b] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#23232b] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#23232b] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
            <button
              type="submit"
              className="mt-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold shadow-lg btn-animated focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              Send Message
            </button>
          </form>
        )}
        <div className="mt-8 text-center text-gray-700 dark:text-gray-300">
          Or email me directly: <a href="mailto:matteuskasteng@gmail.com" className="text-blue-600 dark:text-pink-400 underline">matteuskasteng@gmail.com</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 