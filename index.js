//Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

// 🔥 Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $600?
// c) Los nombres de todos las pizzas.
// d) Los precios de las pizzas.
// e) El nombre de cada pizza con su respectivo precio.

// Cada respuesta debe ser, como siempre, usuario friendly. 
// Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
// Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

// Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸

let pizzas = [
    {
      "id": 1,
      "nombre": "calabresa",
      "ingredientes": ["mozzarella", "calabresa"],
      "precio": 700
    },
    {
      "id": 2,
      "nombre": "jamon y morron",
      "ingredientes": ["mozzarella", "jamon", "morron"],
      "precio": 780
    },
    {
      "id": 3,
      "nombre": "fugazzeta",
      "ingredientes": ["mozzarella", "cebolla"],
      "precio": 650
    },
    {
      "id": 4,
      "nombre": "napolitana",
      "ingredientes": ["mozzarella", "tomate en rodajas"],
      "precio": 450
    },
    {
      "id": 5,
      "nombre": "con huevo",
      "ingredientes": ["mozzarella", "huevo"],
      "precio": 750
    },
    {
      "id": 6,
      "nombre": "mixta",
      "ingredientes": ["mozzarella", "jamon", "morron", "tomate en rodajas", "huevo"],
      "precio": 1500
    },
  ]
  
  // ID pizza impares
  const pizzaIdImpar = pizzas.map(pizza => pizza.id)
  .filter((n) => n % 2 != 0)
  
  console.log(`Id pizzas impares: ${pizzaIdImpar}`) 
  
  // Pizzas menos de $600
  const pizzaMenor = pizzas.map(pizza => pizza.precio).find((precio) => precio < 600);
  
  console.log( `Todas las pizzas menos de $600: $${pizzaMenor}` )
  
  // Nombres de todas las pizzas
  pizzas.forEach(pizzaNombre => console.log("El nombre de la pizza es " + pizzaNombre.nombre));
  
  // Precio de todas las pizzas
  pizzas.forEach(pizza => console.log("El precio de la pizza es $" + pizza.precio));
  
  // Precio de pizzas con sus nombres
  pizzas.forEach(pizzaNombrePrecio => console.log("Nombre de pizza: " + pizzaNombrePrecio.nombre + " Precio: $" + pizzaNombrePrecio.precio))