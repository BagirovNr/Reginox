import { Link } from "react-router";

const menuItems = [
    { id: 1, name: "Мойки" ,routes:"Moyki" },
    { id: 2, name: "Смесители",routes:"Smestiteli" },
    { id: 3, name: "Аксессуары",routes:"Aksessuari" },
    { id: 4, name: "Плиты",routes:"Pliti" },
    {id:5,name:"Umivalniki",routes:"Umivalniki"},
    {id:6,name:"Manhattan",routes:"Manhattan"},


  ];
  
  export default function Hcategories() {
    return (
      <div className="mt-14">
        <nav className="flex  text-secondary font-medium text-xl leading-7 justify-between">
          {menuItems.map((item) => (
            <Link to={item.routes} key={item.id}  className="">
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    );
  }
  