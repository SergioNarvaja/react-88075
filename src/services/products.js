import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { localProducts } from "../data/products.js";

export const getProducts = async (categoryId) => {
  const productsRef = collection(db, "products");
  const q = categoryId ? query(productsRef, where("category", "==", categoryId)) : productsRef;
  const snapshot = await getDocs(q);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const getProductsByCategory = async (categoryId) => {
  return getProducts(categoryId);
};

export const getProductById = async (id) => {
  const ref = doc(db, "products", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
};

export const getProductsSafe = async (categoryId) => {
  try {
    const products = await getProducts(categoryId);
    return products.length ? products : localProducts;
  } catch (err) {
    console.warn("⚠️ Usando productos locales por error en Firebase", err);
    return localProducts;
  }
};