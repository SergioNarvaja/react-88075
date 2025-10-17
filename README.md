
# ProyectoFinal+Narvaja - SerZen Store

Entrega final preparada para el curso. Incluye:
- React + Vite SPA
- React Router (rutas: /, /category/:id, /item/:id, /cart, /checkout)
- Cart context para manejar carrito
- Firestore integrado (config en `src/firebase/config.js`)
- Seed script para subir productos: `npm run seed`

## Instalación local

```bash
npm install
npm run dev
```

## Poblar Firestore (opcional)
```bash
npm run seed
```

## Notas
- Este paquete incluye tu firebase config para pruebas locales.
- Revisa Firebase Console > Firestore para ver las colecciones `products` y `orders`.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
