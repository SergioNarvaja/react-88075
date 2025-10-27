import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { localProducts } from "./data/products.js";

const firebaseConfig = {
apiKey: "AIzaSyB8lZOLLKv04rYmdUZjoYcQ2OESsxSMpBA",
  authDomain: "serzen-react-carro.firebaseapp.com",
  projectId: "serzen-react-carro",
  storageBucket: "serzen-react-carro.firebasestorage.app",
  messagingSenderId: "861218157611",
  appId: "1:861218157611:web:d1d6f96926bfde8ce2e66e",
  measurementId: "G-TS5WLS1NVP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seedProducts() {
  try {
    const colRef = collection(db, "products");
    for (const p of localProducts) {
      await addDoc(colRef, {
        name: p.name,
        description: p.description,
        price: p.price,
        stock: p.stock,
        id: p.id,
        category: p.category,
        img: p.img 
        });
      console.log(`✅ Producto agregado: ${p.name}`);
    }

    console.log("🔥 Todos los productos se cargaron correctamente");
  } catch (error) {
    console.error("❌ Error al cargar productos:", error);
  }
}

seedProducts();