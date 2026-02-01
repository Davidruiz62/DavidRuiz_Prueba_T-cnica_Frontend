
# Catálogo de Productos

Aplicación web desarrollada con **React + Vite** que muestra un catálogo de productos de una tienda online gracias a una API.

La aplicación permite buscar productos por nombre, filtrar por categoría, ordenar por precio de forma ascendente y descendente, cambiar de modo claro a modo oscuro y viceversa e incluye un diseño responsive.

---

## Instrucciones de instalación

Crear el proyecto y las carpetas necesarias en el cmd y 

## Cómo ejecutar el proyecto
Es necesario poner en el cmd esta linea dentro de la carpeta del proyecto: npm run dev
y en el navegador la url que aparece en la terminal.

## Decisiones técnicas

- **React + Vite**  
  He eligió React con Vite porque es con la tecnologia que más comodo me siento dentro de las opciones que daba el ejercicio.

- **Uso de Hooks (useState y useEffect)**  
  Para gestionar el estado de la aplicación, los filtros y la carga de datos de forma sencilla y clara.

- **Uso de API externa**  
  Se utiliza una API pública de pruebas para simular un catálogo real de productos.

- **Manejo de errores y estados de carga**     
  Se muestran mensajes de loading y de errores para mejorar la experiencia de usuario.

- **Filtrado y ordenación en el cliente**     
  La búsqueda, el filtro por categoría y la ordenación por precio se realizan en el cliente para obtener una respuesta inmediata.

- **Modo claro / oscuro**     
  Se añade un modo claro y oscuro para mejorar la experiencia de usuario.

 ## Explicación de la estructura del proyecto

- **ProductCard.jsx**   
  Recibe un objeto producto y se encarga de mostrar su información (imagen, nombre, descripcion y precio).

- **products.js**    
  Se encarga de obtener los productos desde una API externa, manejando posibles errores durante la petición.

- **App.jsx**    
  Componente principal de la aplicación donde se gestiona el estado global, se cargan los productos desde la API y se aplican los filtros y el renderizado del catálogo.

- **App.css / index.css**  
  Contienen los estilos de la aplicación.

  ## Mejoras futuras

Si dispusiera de más tiempo, podría implementar las siguientes mejoras:

- Scroll infinito para mejorar el rendimiento con grandes cantidades de productos.
- Implementar un carrusel de imágenes en las tarjetas de producto para mejorar la visualización de los productos.
- Implementar un sistema de inicio de sesión para personalizar la experiencia del usuario.
- Permitir añadir productos a un carrito de compra una vez iniciada la sesión del usuario.





