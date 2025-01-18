import { Facebook, Linkedin, GithubIcon, Mail } from "lucide-react";
import insta from "../assets/insta.png";
import { Helmet } from "react-helmet"; // Import Helmet

const Home = () => {
  return (
    <div className="home lg:pt-12 lg:sticky lg:top-5">
      {/* Add Helmet to include meta tags for SEO */}
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Sanket Karki -A passionate Fullstack Developer from Pokhara, Nepal, creating impactful tech solutions for real-world problems."
        />
        <title>Sanket Karki - Full-Stack Developer</title>

        {/* Schema Markup (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sanket Karki",
              "url": "https://your-portfolio.com",
              "image": "https://your-portfolio.com/your-image.jpg",
              "jobTitle": "Full-Stack Developer",
              "sameAs": [
                "https://www.linkedin.com/in/sanket-karki-942617184/",
                "https://github.com/Sanket2060",
                "https://www.facebook.com/people/Carkey-Sanket/pfbid0wQgiKo9S5VH7HzR5dAxRh1ymQGtLx5Zvqjb1p646Kpp9tJKiRHLq6rngVUmiPRu5l/",
                "mailto:sanketkarki2060@gmail.com"
              ],
              "description": "A passionate Fullstack Developer from Pokhara, Nepal, creating impactful tech solutions for real-world problems."
            }
          `}
        </script>

        {/* Open Graph Metadata */}
        <meta
          property="og:title"
          content="Sanket Karki - Full-Stack Developer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio.com" />
        <meta
          property="og:image"
          content="https://your-portfolio.com/your-image.jpg"
        />
        <meta
          property="og:description"
          content="A passionate Fullstack Developer from Pokhara, Nepal, creating impactful tech solutions for real-world problems."
        />
        <meta property="og:site_name" content="Sanket Karki Portfolio" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sanket Karki - Full-Stack Developer"
        />
        <meta
          name="twitter:description"
          content="A passionate Fullstack Developer from Pokhara, Nepal, creating impactful tech solutions for real-world problems."
        />
        <meta
          name="twitter:image"
          content="https://your-portfolio.com/your-image.jpg"
        />
        <meta name="twitter:url" content="https://your-portfolio.com" />
      </Helmet>

      <div className="card lg:sticky lg:top-5 h-auto">
        <div className="box flex flex-col bg-white w-[90%] h-[450px] lg:h-[550px] lg:w-96 rounded-2xl mx-auto">
          <div className="image mx-auto w-64 h-52 lg:h-72 rounded-xl mt-8 flex justify-center items-center">
            <img
              className="w-full h-full rounded-2xl object-cover"
              src={insta}
              alt="Sanket Karki - Full-Stack Developer"
              loading="lazy"
            />
          </div>
          <div className="name text-center mt-5 text-3xl font-semibold">
            SANKET KARKI
          </div>
          <div className="description mt-4 text-center text-[#8b6b6e] px-10 sm:px-36 md:px-56 lg:px-14">
            A passionate Fullstack Developer from Nepal, creating tech solutions
            for real-world problems.
          </div>
          <div className="socials flex mt-5 justify-around mx-10 sm:px-36 md:px-56 lg:px-12 ">
            <a
              href="https://www.linkedin.com/in/sanket-karki-942617184/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin color="#f46c38" />
            </a>
            <a
              href="https://github.com/Sanket2060"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon color="#f46c38" />
            </a>
            <a
              href="https://www.facebook.com/people/Carkey-Sanket/pfbid0wQgiKo9S5VH7HzR5dAxRh1ymQGtLx5Zvqjb1p646Kpp9tJKiRHLq6rngVUmiPRu5l/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook color="#f46c38" />
            </a>
            <a
              href="mailto:sanketkarki2060@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail color="#f46c38" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
