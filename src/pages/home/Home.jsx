const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Servet Isikli
          </h1>
          <p className="text-2xl font-semibold text-gray-300">
            Full-Stack Web Developer 🚀
          </p>
          <p className="text-xl text-gray-400 max-w-2xl">
            Building Dynamic & Scalable Web Applications
          </p>
        </div>

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
    </div>
  );
};

export default Home;
