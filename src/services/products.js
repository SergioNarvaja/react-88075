import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import localProducts from "../data/products";

export const getProducts = async (categoryId) => {
  const productsRef = collection(db, "products");
  const q = categoryId
    ? query(productsRef, where("category", "==", categoryId))
    : productsRef;
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getProductsByCategory = async (categoryId) => {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("category", "==", categoryId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getProductById = async (id) => {
  const productRef = doc(db, "products", id);
  const snapshot = await getDoc(productRef);
  if (!snapshot.exists()) throw new Error("Producto no encontrado");
  return { id: snapshot.id, ...snapshot.data() };
};
