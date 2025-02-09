import { ArrowLeftRight, Menu,  Search, ShoppingBasket } from "lucide-react";
import heroImage from "../../assets/img/hero.svg";
import InfoHeader from "./infoHeader/InfoHeader";
import logo from "../../assets/img/logo.svg";
import Hcategories from "./hCategories/Hcategories";

function Header() {
  return (
    <header
      className="bg-cover bg-no-repeat bg-top  h-[720px] bg-fixed px-28 gap-8 flex flex-col "  
      style={{ backgroundImage: `url(${heroImage})` }}
    >
        <InfoHeader/>

    <div className="flex justify-between items-center py-5 ">
            <div>
                <p className="flex cursor-pointer text-secondary font-medium text-xl leading-5 gap-2 items-center "><Menu color="white" size={28}/>Меню</p>
            </div>
        <div>
            <img src={logo} alt="error" />
        </div>
        <div className="flex items-center gap-8">
        <ArrowLeftRight color="white" size={28} cursor={"pointer"}/>
        <Search  color="white" size={28} cursor={"pointer"}/>
        <ShoppingBasket color="white"size={28} cursor={"pointer"} />
        </div>
    </div>

    <Hcategories/>

    </header>
  );
}

export default Header;
