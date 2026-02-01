// URL de la API externa desde la que se obtienen los productos
const API_URL = 'https://fakestoreapi.com/products'

// Se obtienen los productos desde la API con una funcion asíncrona
export async function getProducts() {
  // Realiza la petición HTTP
  const response = await fetch(API_URL)

  // Si la respuesta no es correcta, se lanza un error
  if (!response.ok) {
    throw new Error('Error al cargar productos')
  }

  // Devuelve los datos en formato JSON
  return response.json()
}
