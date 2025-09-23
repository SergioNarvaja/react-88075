const products = [
  { id: "1", name: "Aceite Relax", category: "relax", price: 2000, description: "Aceite esencial relajante" },
  { id: "2", name: "Piedras Calientes", category: "equipamiento", price: 8000, description: "Set de piedras volcánicas" },
  { id: "3", name: "Camilla Plegable", category: "equipamiento", price: 25000, description: "Camilla profesional portátil" },
  { id: "4", name: "Velas Aromáticas", category: "relax", price: 1500, description: "Pack de velas con aromas naturales" },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 1000)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.find(p => p.id === id)), 1000)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.filter(p => p.category === categoryId)), 1000)
  })
}