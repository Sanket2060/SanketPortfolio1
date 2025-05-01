const Blog = () => {
  return (
    <div className="mt-12 lg:px-20">
      <div className="topic font-bold text-5xl">
        <div className="text-white mx-auto text-center">MY</div>
        <div className="text-[#353334] mx-auto text-center">BLOG</div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <div className="text-white text-2xl font-semibold mb-4">Coming Soon</div>
        <div className="text-[#998f8f] text-center max-w-md px-4">
          I'm currently working on some exciting content. Stay tuned for updates about my experiences, 
          insights, and thoughts on technology and development.
        </div>
      </div>
    </div>
  );
};

export default Blog;