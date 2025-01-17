import { Facebook, Linkedin, GithubIcon, Mail } from "lucide-react";
import insta from "../assets/insta.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home lg:pt-12 lg:sticky lg:top-5 ">
      <div className="card lg:sticky lg:top-5">
        <div className="box flex flex-col  bg-white w-[90%] h-[450px] lg:h-[550px] lg:w-96 rounded-2xl mx-auto">
          <div className="image mx-auto w-64 h-52 lg:h-72 rounded-xl mt-8 flex justify-center items-center">
            <img
              className="w-full h-full rounded-2xl object-cover"
              src={insta}
              alt="my-profile-pic"
            />
          </div>
          <div className="name text-center mt-5 text-3xl font-semibold">
            SANKET KARKI
          </div>
          <div className="description mt-4 text-center text-[#8b6b6e] px-10 sm:px-36 md:px-56 lg:px-14">
            A Passionate Developer who has created impactful tech solutions to
            solve real-world problems.
          </div>
          <div className="socials flex mt-5  justify-around mx-10 sm:px-36 md:px-56 lg:px-12">
            <Link to="https://www.linkedin.com/in/sanket-karki-942617184/">
              <span className="">
                <Linkedin color="#f46c38" />
              </span>
            </Link>
            <Link to="https://github.com/Sanket2060">
              <span className="">
                <GithubIcon color="#f46c38" />
              </span>
            </Link>
            <Link to="https://www.facebook.com/people/Carkey-Sanket/pfbid0wQgiKo9S5VH7HzR5dAxRh1ymQGtLx5Zvqjb1p646Kpp9tJKiRHLq6rngVUmiPRu5l/">
              <span className="">
                <Facebook color="#f46c38" />
              </span>
            </Link>
            <Link to="sanketkarki2060@gmail.com">
              <span className="">
                <Mail color="#f46c38" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
