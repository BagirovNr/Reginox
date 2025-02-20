import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Moyki from "./components/products/Moyki";
import Smestiteli from "./components/products/Smestiteli";
import Aksessuari from "./components/products/Aksessuari";
import Pliti from "./components/products/Pliti";
import Umivalniki from "./components/products/Umivalniki";
import Manhattan from "./components/products/Manhattan";
import Products from "./components/products/Products";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>

    <Routes>
    <Route path="Moyki" element={<Moyki/>} />
    <Route path="Smestiteli" element={<Smestiteli/>} />
    <Route path="Aksessuari" element={<Aksessuari/>} />
    <Route path="Pliti" element={<Pliti/>} />
    <Route path="Umivalniki" element={<Umivalniki/>} />
    <Route path="Manhattan" element={<Manhattan/>} />
    <Route path="Products" element={<Products/>} />
    
</Routes>
  </BrowserRouter>
);  