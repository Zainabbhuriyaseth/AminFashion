import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition duration-300">
      <Navbar />
      <Hero />
      <Categories />
    </div>
  );
}