const API_URL = "https://fakestoreapi.com/products";

export async function getProducts() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("API error");
    }

    return await response.json();
  } catch (error) {
    console.warn("API no disponible, usando JSON local");

    const localResponse = await fetch("/products.json");
    return await localResponse.json();
  }
}