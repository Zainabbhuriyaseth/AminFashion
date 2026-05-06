export default function CategoryCard({ title, image }) {
  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-lg border border-transparent group-hover:border-gold transition">
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

      {/* Title */}
      <h2 className="absolute bottom-5 left-5 text-white text-xl font-semibold tracking-wide">
        {title}
      </h2>
    </div>
  );
}