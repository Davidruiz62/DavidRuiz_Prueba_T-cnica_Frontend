function ProductCard({ product }) {
  return (
    <article style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      textAlign: 'center',
      backgroundColor: '#fff'
    }}>
      <img 
        src={product.image} 
        alt={product.title} 
        style={{ width: '150px', height: '150px', objectFit: 'contain' }} 
      />
      <h3>{product.title}</h3>
      <p style={{ fontStyle: 'italic', color: '#555' }}>{product.category}</p>
      <strong>${product.price}</strong>
    </article>
  )
}

export default ProductCard
