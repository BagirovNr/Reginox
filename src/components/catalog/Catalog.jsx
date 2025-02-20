import { Link } from 'react-router'
import moyka from '../../assets/img/katalog/moyka.svg'
import smestiteli from '../../assets/img/katalog/smestiteli.svg'
import aksessuari from '../../assets/img/katalog/aksessuari.svg'
import izmelciteli from '../../assets/img/katalog/izmelciteli.svg'
import umivalniki from '../../assets/img/katalog/umivalniki.svg'
import stoleshnici from '../../assets/img/katalog/stoleshnici.svg'
import manhattan from '../../assets/img/katalog/manhattan.svg'
import pliti from '../../assets/img/katalog/pliti.svg'
import other from '../../assets/img/katalog/other.svg'
import { List } from 'lucide-react'

function Catalog() {
	return (
		<section className='px-28 mt-28 flex flex-col gap-20 items-center'>
			<h2 className='font-bold text-5xl leading-14 text-center self-start'>
				каталог
			</h2>

			<div className='grid grid-cols-3 gap-10 justify-center'>
				<div className='relative group '>
					<img
						src={moyka}
						alt='Карина'
						className='w-full transition-transform duration-300 ease-in-out group-hover:-translate-y-9'
					/>
					<Link
						to={'/moyki'}
						className='absolute left-1/2 w-full flex justify-center items-center gap-1  transform -translate-x-1/2 opacity-0 transition-all duration-300  ease-in-out group-hover:-translate-y-9 group-hover:opacity-100 bg-danger bg-opacity-70 text-secondary p-5   text-center'
					>
						<List size={20} />
						<p>Перейти к каталогу</p>
					</Link>
				</div>
				<div className='relative group'>
					<img
						src={smestiteli}
						alt='Карина'
						className='w-full transition-transform duration-300 ease-in-out group-hover:-translate-y-9'
					/>
					<Link
						to={'/smestiteli'}
						className='absolute left-1/2 w-full flex justify-center items-center gap-1  transform -translate-x-1/2 opacity-0 transition-all duration-300  ease-in-out group-hover:-translate-y-9 group-hover:opacity-100 bg-danger bg-opacity-70 text-secondary p-5   text-center'
					>
						<List size={20} />
						<p>Перейти к каталогу</p>
					</Link>
				</div>
				<div className='relative group'>
					<img
						src={aksessuari}
						alt='Карина'
						className='w-full transition-transform duration-300 ease-in-out group-hover:-translate-y-9'
					/>
					<Link
						to={'/aksessuari'}
						className='absolute left-1/2 w-full flex justify-center items-center gap-1  transform -translate-x-1/2 opacity-0 transition-all duration-300  ease-in-out group-hover:-translate-y-9 group-hover:opacity-100 bg-danger bg-opacity-70 text-secondary p-5   text-center'
					>
						<List size={20} />
						<p>Перейти к каталогу</p>
					</Link>
				</div>

				<div className='relative group'>
					<img
						src={pliti}
						alt='Карина'
						className='w-full transition-transform duration-300 ease-in-out group-hover:-translate-y-9'
					/>
					<Link
						to={'/pliti'}
						className='absolute left-1/2 w-full flex justify-center items-center gap-1  transform -translate-x-1/2 opacity-0 transition-all duration-300  ease-in-out group-hover:-translate-y-9 group-hover:opacity-100 bg-danger bg-opacity-70 text-secondary p-5   text-center'
					>
						<List size={20} />
						<p>Перейти к каталогу</p>
					</Link>
				</div>
				<div className='relative group'>
					<img
						src={umivalniki}
						alt='Карина'
						className='w-full transition-transform duration-300 ease-in-out group-hover:-translate-y-9'
					/>
					<Link
						to={'/umivalniki'}
						className='absolute left-1/2 w-full flex justify-center items-center gap-1  transform -translate-x-1/2 opacity-0 transition-all duration-300  ease-in-out group-hover:-translate-y-9 group-hover:opacity-100 bg-danger bg-opacity-70 text-secondary p-5   text-center'
					>
						<List size={20} />
						<p>Перейти к каталогу</p>
					</Link>
				</div>
				<div className='relative group'>
					<img
						src={stoleshnici}
						alt='Карина'
						className='w-full transition-transform duration-300 ease-in-out group-hover:-translate-y-9'
					/>
					<Link
						to={'/stoleshnici'}
						className='absolute left-1/2 w-full flex justify-center items-center gap-1  transform -translate-x-1/2 opacity-0 transition-all duration-300  ease-in-out group-hover:-translate-y-10 group-hover:opacity-100 bg-danger bg-opacity-70 text-secondary p-6 text-center'
					>
						<List size={20} />
						<p>Перейти к каталогу</p>
					</Link>
				</div>
				<div className='relative group'>
					<img
						src={manhattan}
						alt='Карина'
						className='w-full transition-transform duration-300 ease-in-out group-hover:-translate-y-9'
					/>
					<Link
						to={'/manhattan'}
						className='absolute left-1/2 w-full flex justify-center items-center gap-1  transform -translate-x-1/2 opacity-0 transition-all duration-300  ease-in-out group-hover:-translate-y-9 group-hover:opacity-100 bg-danger bg-opacity-70 text-secondary p-5   text-center'
					>
						<List size={20} />
						<p>Перейти к каталогу</p>
					</Link>
				</div>
				<div className='relative group'>
					<img
						src={izmelciteli}
						alt='Карина'
						className='w-full transition-transform duration-300 ease-in-out group-hover:-translate-y-9'
					/>
					<Link
						to={'/izmelciteli'}
						className='absolute left-1/2 w-full flex justify-center items-center gap-1  transform -translate-x-1/2 opacity-0 transition-all duration-300  ease-in-out group-hover:-translate-y-9 group-hover:opacity-100 bg-danger bg-opacity-70 text-secondary p-5   text-center'
					>
						<List size={20} />
						<p>Перейти к каталогу</p>
					</Link>
				</div>
				<div className='relative group'>
					<img
						src={other}
						alt='Карина'
						className='w-full transition-transform duration-300 ease-in-out group-hover:-translate-y-9'
					/>
					<Link
						to={'/other'}
						className='absolute left-1/2 w-full flex justify-center items-center gap-1  transform -translate-x-1/2 opacity-0 transition-all duration-300  ease-in-out group-hover:-translate-y-9 group-hover:opacity-100 bg-danger bg-opacity-70 text-secondary p-5   text-center'
					>
						<List size={20} />
						<p>Перейти к каталогу</p>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Catalog
