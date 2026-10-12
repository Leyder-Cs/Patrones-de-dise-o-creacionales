use productosdb

db.products.insertMany([
  { name: "Portátil", price: 2500000, description: "Equipo de ejemplo para programación" },
  { name: "Mouse", price: 45000, description: "Mouse USB" },
  { name: "Teclado", price: 85000, description: "Teclado para el laboratorio" }
])