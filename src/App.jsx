import { useEffect, useState } from "react";
import { getProducts } from "./services/products";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError("Error cargando productos");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const categories = ["all", ...new Set(products.map(p => p.category))];

  const filteredProducts = products
    .filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter(p =>
      category === "all" ? true : p.category === category
    )
    .sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      return 0;
    });

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
  <div className={darkMode ? "app dark" : "app"}>
    <div className="container">

      <header>
        <h1>Catálogo de productos</h1>
        <p>Total de productos: {filteredProducts.length}</p>

        <input
          type="text"
          placeholder="Buscar producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Ordenar por precio</option>
          <option value="asc">Precio ascendente</option>
          <option value="desc">Precio descendente</option>
        </select>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Modo claro" : "Modo oscuro"}
        </button>
      </header>

      <main className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>

    </div>
  </div>
);
}

export default App;
