const products = [
  {
    id: 1,
    name: "Aceite Esencial Relajante",
    price: 8500,
    description:
      "Mezcla de lavanda, eucalipto y romero para masajes o aromaterapia.",
    category: "aromaterapia",
    image:
      "https://images.unsplash.com/photo-1600180758890-6d4b0b5c3e8f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Crema de Masaje Corporal Neutra",
    price: 6200,
    description:
      "Base vegetal hipoalergénica, ideal para masajes terapéuticos o deportivos.",
    category: "cosmetica",
    image:
      "https://images.unsplash.com/photo-1616394584738-3b8e1dc1f30e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Piedras Calientes Basalto (Set x6)",
    price: 12900,
    description:
      "Rocas volcánicas pulidas para terapia de calor. Incluye bolsa de lino.",
    category: "equipamiento",
    image:
      "https://images.unsplash.com/photo-1606813902916-d1b3e8e91c07?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Vela de Soya Aromática “Equilibrio Zen”",
    price: 5800,
    description:
      "Cera natural con aceites esenciales. Aroma a lavanda y sándalo.",
    category: "aromaterapia",
    image:
      "https://images.unsplash.com/photo-1612197527762-60c64a9a8f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Gift Card SerZen",
    price: 10000,
    description:
      "Tarjeta regalo digital para sesiones o productos. Válida por 6 meses.",
    category: "giftcards",
    image:
      "https://images.unsplash.com/photo-1611244420687-06c6d5f4f1b7?auto=format&fit=crop&w=600&q=80",
  },
];

export default products;


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