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
import NotFound from "./components/notFound/NotFound";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="moyki" element={<Moyki />} />
      <Route path="smestiteli" element={<Smestiteli />} />
      <Route path="aksessuari" element={<Aksessuari />} />
      <Route path="pliti" element={<Pliti />} />
      <Route path="umivalniki" element={<Umivalniki />} />
      <Route path="manhattan" element={<Manhattan />} />
      <Route path="products" element={<Products />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
