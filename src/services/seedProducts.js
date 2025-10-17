import { db } from '../firebase/config.js';
import { collection, addDoc } from 'firebase/firestore';

const products = [
  { name: "Aceite Esencial Relajante", price: 8500, stock: 10, category: "aromaterapia", description: "Mezcla de lavanda..." },
  { name: "Crema de Masaje Corporal Neutra", price: 6200, stock: 8, category: "cosmetica", description: "Base vegetal..." },
  { name: "Piedras Calientes Basalto (Set x6)", price: 12900, stock: 5, category: "equipamiento", description: "Rocas volcánicas..." }
];

const seed = async () => {
  for(const p of products){
    await addDoc(collection(db, "products"), p);
    console.log("Added", p.name);
  }
  console.log("Done");
  process.exit(0);
};

seed().catch(e=>{console.error(e); process.exit(1)});
