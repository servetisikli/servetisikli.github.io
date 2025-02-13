const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6 text-center drop-shadow-lg">
        Full-Stack Web Developer 🚀
      </h1>
      <p className="text-xl mb-12 text-center italic drop-shadow-md">
        Building Dynamic & Scalable Web Applications
      </p>

      {/* CTA Section */}
      <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6">
        <a
          href="https://www.servetisikli.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Visit My Portfolio
        </a>
        <a
          href="https://github.com/servetisikli"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 border border-white/20"
        >
          GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default Home;
