import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { globalState } from './store/globalStore';
import Navbar from './sections/Navbar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import CategoryProducts from './pages/CategoryProducts';
import Product from './pages/Product';
import About from './pages/About';
import Footer from './sections/Footer';

function App() {
  const { getCategories, getProducts } = globalState((state) => state);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  return (
    <main className="bg-bg_color relative font-roboto_font  min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<CategoryProducts />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
