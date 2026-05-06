import HeroImg from '../assets/hero.png';
export default function Hero() {
  return (
    <div className="relative h-[90vh] flex items-center justify-center text-white">

      {/* BACKGROUND IMAGE */}
      <img
        src={HeroImg}
        alt="fashion"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative text-center z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          ELEVATE YOUR STYLE
        </h1>

        <p className="mt-4 text-gray-300">
          Premium Men's Fashion Collection
        </p>

        <button className="mt-6 bg-gold text-black px-6 py-3 rounded hover:scale-105 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
}