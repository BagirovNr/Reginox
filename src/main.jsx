import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Moyki from "./components/products/moyki/Moyki";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>

    <Routes>
    <Route path="Moyki" element={<Moyki/>} />
</Routes>
  </BrowserRouter>
);  