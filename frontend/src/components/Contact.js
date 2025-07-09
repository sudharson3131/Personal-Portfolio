import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_9elcvph',    // Replace with your actual EmailJS Service ID
      'template_serkcpm',   // Replace with your EmailJS Template ID
      formData,
      '0VguQweSZWWo37r1l'     // Replace with your EmailJS Public Key
    )
    .then(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
    });
  };

  return (
    <section className="bg-base-200 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <p className="mt-6 text-center text-green-600 font-semibold">
            Thanks for reaching out! I will get back to you soon.
          </p>
        )}
      </div>
    </section>
  );
}
