import ProductCard from "./ProductCard";

export default function FeaturedProducts() {

  const products = [
    {
      id: 1,
      name: "Premium Black Shirt",
      price: 1999,
      image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7"
    },
    {
      id: 2,
      name: "Luxury White T-Shirt",
      price: 1499,
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
    },
    {
      id: 3,
      name: "Designer Jacket",
      price: 3999,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
    },
    {
      id: 4,
      name: "Slim Fit Jeans",
      price: 2499,
      image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09"
    }
  ];

  return (
    <section className="px-6 md:px-16 py-16 bg-white dark:bg-black text-black dark:text-white">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Featured <span className="text-gold">Products</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

    </section>
  );
}