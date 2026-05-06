import CategoryCard from "./CategoryCard";

export default function Categories() {

  const categories = [
    {
      title: "Shirts",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
    },
    {
      title: "T-Shirts",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
      title: "Jackets",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985"
    },
    {
      title: "Jeans",
      image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb"
    }
  ];

  return (
    <section className="px-6 md:px-16 py-16 bg-gray-100 dark:bg-black">

      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Shop by <span className="text-gold">Category</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <CategoryCard
            key={index}
            title={cat.title}
            image={cat.image}
          />
        ))}
      </div>

    </section>
  );
}