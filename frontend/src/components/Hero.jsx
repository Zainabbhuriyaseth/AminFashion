export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-white dark:bg-black text-black dark:text-white">

      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-wide">
          Elevate Your <br />
          <span className="text-gold">Style</span> with Amin Fashion
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Discover premium men's wear crafted for elegance, comfort, and confidence.
        </p>

        <button className="bg-gold text-black px-6 py-3 rounded font-semibold hover:opacity-90 transition">
          Shop Now
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1617137968427-85924c800a22"
          alt="Fashion Model"
          className="w-[300px] md:w-[450px] rounded-lg shadow-lg hover:scale-105 transition duration-300"
        />
      </div>

    </section>
  );
}