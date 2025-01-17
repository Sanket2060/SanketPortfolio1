import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contactme = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace these with your EmailJS details
    const serviceID = "service_i4vd3cd";
    const templateID = "template_s6ake5i";
    const publicKey = "eBUgxCgmuQU0DTzRM";

    emailjs.send(serviceID, templateID, formData, publicKey).then(
      () => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", topic: "", message: "" });
      },
      () => {
        setStatus("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <div className="mt-12 lg:px-20">
      <div className="topic font-bold text-5xl">
        <div className="text-white mx-auto text-center ">LET'S WORK</div>
        <div className="text-[#353334] mx-auto text-center">TOGETHER</div>
      </div>
      <div className="mt-10 flex items-center justify-center bg-black">
        <form
          className="w-full p-6 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[#998f8f] text-sm mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#353334] text-white rounded-md outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div>
              <label className="block text-[#998f8f] text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#353334] text-white rounded-md outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
          </div>

          {/* Topic */}
          <div className="mb-4">
            <label className="block text-[#998f8f] text-sm mb-2">Topic</label>
            <select
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#353334] text-white rounded-md outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="" disabled>
                Select...
              </option>
              <option value="Want to hire you">💼Want to hire you</option>
              <option value="Freelancing work">💻Freelancing work</option>
              <option value="Random guff-gaff">🧋Random guff-gaff</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-[#998f8f] text-sm mb-2">Message</label>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-32 px-4 py-2 bg-[#353334] text-white rounded-md outline-none resize-none focus:ring-2 focus:ring-orange-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition"
          >
            Submit
          </button>

          {/* Status Message */}
          {status && <p className="text-center mt-4 text-white">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contactme;
