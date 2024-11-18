interface SingleProjectProps {
  image: string;
  name: string;
  description: string;
}

const SingleProject: React.FC<SingleProjectProps> = ({
  image,
  name,
  description,
}) => {
  return (
    <div className="flex items-center mt-8 ml-6">
      <div className="w-20 h-20 relative">
        <img
          src={image}
          alt="project-image"
          className="object-cover w-full h-full rounded-md"
        />
      </div>

      <div className="project-description cursor-pointer ml-4">
        <div className="name text-white font-bold text-lg">{name}</div>
        <div className="text-[#998f8f]">{description}</div>
      </div>
    </div>
  );
};

export default SingleProject;
