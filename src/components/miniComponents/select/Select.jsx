import { useState } from "react";
import PropTypes from "prop-types";
import { Globe, Mail, Phone } from "lucide-react";

export default function Dropdown({ number, mail, name, browser, adress }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-lg w-60 ease-in duration-200  transition-discrete ${isOpen ? "bg-secondary duration-300 ease-in" : null}`}>
      <div className="flex justify-center">
      <button
  className={`relative text-center font-semibold cursor-pointer 
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 
             hover:after:w-full ${isOpen?" hover:border-none":""}`}
  onClick={() => setIsOpen(!isOpen)}
>
  {name}
</button>

      </div>

      {isOpen && (
        <div className="duration-500">
          <p  className="mt-2">{adress}</p>
          <p className="mt-2 flex gap-1 items-center"><Phone size={18} />{number}</p>
          <p className="mt-2 flex gap-1 items-center"><Mail size={18} />{mail}</p>
          <p className="mt-2 flex gap-1 items-center"><Globe size={18} />{browser}</p>
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  number: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  browser: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
};
