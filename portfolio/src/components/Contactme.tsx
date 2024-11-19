const Contactme = () => {
  return (
    <div className="mt-12">
      <div className="topic font-bold text-5xl">
        <div className="text-white mx-auto text-center ">LET'S WORK</div>
        <div className="text-[#353334] mx-auto text-center">TOGETHER</div>
      </div>
      <div className="mt-10 flex items-center justify-center bg-black">
        <form className="w-full p-6 rounded-lg shadow-md">
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[#998f8f] text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-[#353334] text-white rounded-md outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-[#998f8f] text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Your@email.com"
                className="w-full px-4 py-2 bg-[#353334] text-white rounded-md outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Topic */}
          <div className="mb-4">
            <label className="block text-[#998f8f] text-sm mb-2">Topic</label>
            <select className="w-full px-4 py-2 bg-[#353334] text-white rounded-md outline-none focus:ring-2 focus:ring-orange-500">
              <option value="" disabled>
                Select...
              </option>
              <option value="budget3">💼Want to hire you</option>
              <option value="budget2">💻Freelancing work</option>
              <option value="budget1">🧋Random guff-gaff</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-[#998f8f] text-sm mb-2">Message</label>
            <textarea
              placeholder="Message"
              className="w-full h-32 px-4 py-2 bg-[#353334] text-white rounded-md outline-none resize-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactme;
