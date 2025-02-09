import { Link } from "react-router";

const menuItems = [
    { id: 1, name: "Мойки" ,routes:"Moyki" },
    { id: 2, name: "Смесители",routes:"Smestiteli" },
    { id: 3, name: "Аксессуары",routes:"Aksessuari" },
    { id: 4, name: "Плиты",routes:"Pliti" },
    { id: 5, name: "Духовки",routes:"Duxovki" },
  ];
  
  export default function Hcategories() {
    return (
      <header className="">
        <nav className="flex space-x-4">
          {menuItems.map((item) => (
            <Link to={item.routes} key={item.id}  className="">
              {item.name}
            </Link>
          ))}
        </nav>
      </header>
    );
  }
  