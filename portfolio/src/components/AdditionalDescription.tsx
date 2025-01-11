const AdditionalDescription = () => {
  return (
    <>
      <div className="further-description">
        <div className="post mt-6 font-bold text-5xl">
          <div className="text-white mx-auto text-center ">SOFTWARE</div>
          <div className="text-[#353334] mx-auto text-center">ENGINEER</div>
        </div>
        <div className="description text-[#998f8f] text-center mt-4 leading-normal smallmobile:px-8 md:px-40">
          Passionate about building impactful solutions. Specialize in crafting
          seamless and efficient applications.
        </div>
      </div>
      <div className="experience mt-20 sm:flex sm:justify-center">
        <div className="row-one flex justify-center">
          <div className="first flex flex-col pr-6  sm:pr-8">
            <div className="text-white font-semibold text-5xl">+1</div>
            <div className="text-[#998f8f] text-base">
              <div className="text-left">YEARS OF </div>
              <div className="text-left">EXPERIENCE</div>
            </div>
          </div>
          <div className="second flex flex-col sm:pr-8">
            <div className="text-white font-semibold text-5xl">+10</div>
            <div className="text-[#998f8f] text-base">
              <div className="">PROJECTS</div>
              <div>COMPLETED</div>
            </div>
          </div>
        </div>
        <div className="third row-two flex text-center flex-col mt-8 sm:mt-0">
          <div className="text-white font-semibold text-5xl">+1</div>
          <div className="text-[#998f8f] text-base">
            <div className="">WORLDWIDE</div>
            <div> CLIENTS</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdditionalDescription;
