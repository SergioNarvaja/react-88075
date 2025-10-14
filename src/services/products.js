import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export const getProducts = async () => {
  const snapshot = await getDocs(collection(db, "products"));
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const getProductsByCategory = async (category) => {
  const q = query(collection(db, "products"), where("category", "==", category));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const getProductById = async (id) => {
  const snapshot = await getDoc(doc(db, "products", id));
  if (!snapshot.exists()) throw new Error("Producto no encontrado");
  return { id: snapshot.id, ...snapshot.data() };
};