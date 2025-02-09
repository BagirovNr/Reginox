
function InfoHeader() {
  return (
    <div className="text-secondary flex justify-between items-center  py-5 ">
        <div className="flex items-center gap-20">
       <div>
       <select className="border-0 bg-none text-secondary cursor-pointer" name="" id="">
            <option className="bg-none text-secondary  bg-auto bg-primary"  value="Азербайджан">Азербайджан</option>
            <option className="bg-none text-secondary  bg-auto bg-primary" value="Россия">Россия</option>
            <option className="bg-none text-secondary  bg-auto bg-primary" value="Америка">Америка</option>
        </select>
       </div>
       <div>
        <p>Обратный звонок</p>
       </div>
        </div>
        <div className="flex items-center gap-20"> 
            <div>
                <p>Пн-Вс 10-19</p>
            </div>
            <div>
                <p>
                    +(994)55 668 06 19
                </p>
            </div>
        </div>

    </div>
)
}

export default InfoHeader