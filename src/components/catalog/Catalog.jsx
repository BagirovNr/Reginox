import moyka from "../../assets/img/moyka.svg"
import smestiteli from "../../assets/img/smestiteli.svg"
import aksessuari from "../../assets/img/aksessuari.svg"
import { useState } from "react";
function Catalog() {

  const [show,setShow] = useState(false)

  function ShowParams() {
      setShow(!show)
  }
  
  
  return (

    <section className="px-28 mt-20 flex flex-col gap-20 items-center">
      <h2 className="font-bold text-5xl leading-14 text-center self-start">каталог</h2>

      <div className="grid grid-cols-3 gap-10 justify-center ">
        <div className="cursor-pointer bg-danger" onClick={ShowParams}>
            <img className={` ${show?"-translate-y-9":""}`} src={moyka} alt="Error" />
          {show&& <h2 className="text-secondary text-center -translate-y-6">перейти в каталог</h2>}
        </div>
          <img src={smestiteli} alt="Error" />
          <img src={aksessuari} alt="Error" />
          <img src="" alt="Error" />
          <img src="" alt="Error" />
          <img src="" alt="Error" />
          <img src="" alt="Error" />
          <img src="" alt="Error" />
          <img src="" alt="Error" />
      </div>
    </section>
  );
}

export default Catalog;
