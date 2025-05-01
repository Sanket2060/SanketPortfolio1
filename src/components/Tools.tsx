import SingleProject from "./SingleProject";

const Tools = () => {
  return (
    <div className="mt-12 lg:px-20">
      <div className="topic font-bold text-5xl">
        <div className="text-white mx-auto text-center ">DAILY</div>
        <div className="text-[#353334] mx-auto text-center">UTILITIES</div>
      </div>
      <div className="tools xl:w-[900px]">
        <SingleProject
          name="REACT JS"
          description="FRONTEND TECH"
          image="https://c7.alamy.com/comp/2M75RRF/react-web-framework-rotated-logo-white-background-2M75RRF.jpg"
        />
        <SingleProject
          name="EXPRESS JS"
          description="BACKEND TECH"
          image="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*DAIoObWqwP2P-EMJjBEdqQ.png"
        />
        <SingleProject
          name="MONGODB"
          description="DATABASE"
          image="https://c7.alamy.com/comp/2M7RGJ2/mongodb-logo-white-background-2M7RGJ2.jpg"
        />
        <SingleProject
          name="MYSQL"
          description="DATABASE"
          image="https://c7.alamy.com/comp/2M94X2G/mysql-logo-white-background-2M94X2G.jpg"
        />
      </div>
    </div>
  );
};

export default Tools;
