import { useEffect, useState } from 'react'
import { getProducts } from './services/products'
import ProductCard from './components/ProductCard'

function App() {
  // Lógica principal de la aplicación
  const [products, setProducts] = useState([])       
  const [loading, setLoading] = useState(true)       
  const [error, setError] = useState(null)           
  const [search, setSearch] = useState('')           
  const [sort, setSort] = useState('asc')            
  const [category, setCategory] = useState('all')    
  const [darkMode, setDarkMode] = useState(false)    

  // Carga inicial de productos desde la API, guarda los productos, los errores y el loading
  useEffect(() => {
    getProducts()
      .then(data => setProducts(data))       
      .catch(err => setError(err.message))   
      .finally(() => setLoading(false))      
  }, [])

  // Mensajes informativos
  if (loading) return <p style={{ padding: '2rem' }}>Cargando productos...</p>
  if (error) return <p style={{ padding: '2rem', color: 'red' }}>{error}</p>

  // Obtiene las categorías únicas de los productos
  const categories = ['all', ...new Set(products.map(p => p.category))]

  // Filtrado y ordenación de productos
  const filteredProducts = products
    .filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter(product => category === 'all' || product.category === category)
    .sort((a, b) => (sort === 'asc' ? a.price - b.price : b.price - a.price))

  return (
    <div
      style={{
        padding: '2rem',
        backgroundColor: darkMode ? '#121212' : '#f7f7f7',
        color: darkMode ? '#f7f7f7' : '#121212',
        minHeight: '100vh',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Botón para alternar modo claro y oscuro */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          padding: '0.5rem 1rem',
          marginBottom: '1rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
          cursor: 'pointer',
          backgroundColor: darkMode ? '#333' : '#fff',
          color: darkMode ? '#f7f7f7' : '#121212'
        }}
      >
        {darkMode ? 'Claro' : 'Oscuro'}
      </button>

      <h1>Catálogo de productos</h1>
      <p>Total de productos: {products.length}</p>

      {/* Controles de búsqueda, filtro y ordenación */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '1rem',
          gap: '1rem',
          flexWrap: 'wrap'
        }}
      >
        {/* Buscador por nombre */}
        <input
          type="text"
          placeholder="Buscar producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Filtro por categoría */}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat === 'all' ? 'Todas las categorías' : cat}
            </option>
          ))}
        </select>

        {/* Ordenación por precio */}
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="asc">Precio: menor a mayor</option>
          <option value="desc">Precio: mayor a menor</option>
        </select>
      </div>

      {/* Listado de productos en formato grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem',
          marginTop: '2rem'
        }}
      >
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default App
