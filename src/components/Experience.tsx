const Experience = () => {
  return (
    <div className="mt-6 px-4 sm:px-8 lg:px-20 overflow-x-hidden">
      <div className="topic mt-12 font-bold text-5xl text-center">
        <div className="text-white">MY OWN</div>
        <div className="text-[#353334]">EXPERIENCE</div>
      </div>

      <div className="mt-8 companies w-full max-w-[900px] mx-auto">
        <div className="company1 bg-[#111] rounded-lg p-5 sm:p-6 md:p-8 shadow-md">
          <div className="name text-white text-xl sm:text-2xl font-bold">
            Dezvu Technologies
          </div>
          <div className="description text-[#998f8f] mt-3 text-sm sm:text-base leading-relaxed">
            Intern, contributing to development of scalable and efficient web
            applications. Collaborated with teams to design user-friendly
            interfaces and implement backend solutions.
          </div>
          <div className="time text-[#998f8f] mt-3 text-sm">3 months</div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
