const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6 text-center drop-shadow-lg">
        Full-Stack Web Developer 🚀
      </h1>
      <p className="text-xl mb-12 text-center italic drop-shadow-md">
        Building Dynamic & Scalable Web Applications
      </p>

      {/* New CTA Box */}
      <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 max-w-md mx-4">
        <h2 className="text-2xl font-semibold mb-4">Discover My Journey</h2>
        <p className="text-gray-300 mb-6">
          Explore the timeline of some long-term projects and see how they
          evolved over time.
        </p>
        <a
          href="https://www.servetisikli.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          View Project Timeline →
        </a>
      </div>

      <div className="text-center mt-12">
        <p className="text-sm text-gray-400">Updating...</p>
      </div>
    </div>
  );
};

export default Home;
