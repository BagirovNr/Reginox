import { ArrowLeftRight, Menu, Search, ShoppingBasket } from 'lucide-react'
import heroImage from '../../assets/img/hero.svg'
import InfoHeader from './infoHeader/InfoHeader'
import logo from '../../assets/img/logo.svg'
import Hcategories from './hCategories/Hcategories'
import litleHeaderImg from '../../assets/img/litleHeaderImg.svg'
import Dropdown from '../miniComponents/select/Select'

function Header() {
	return (
		<header className='flex flex-col  '>
			<div
				className='bg-cover bg-no-repeat bg-top  h-[720px] bg-fixed px-28  flex flex-col bg-gray1'
				style={{ backgroundImage: `url(${heroImage})` }}
			>
				<InfoHeader />

				<div className='flex justify-between items-center'>
					<div>
						<p className='flex cursor-pointer text-secondary font-medium text-xl leading-5 gap-2 items-center '>
							<Menu color='white' size={28} />
							Меню
						</p>
					</div>
					<div>
						<img src={logo} alt='error' />
					</div>
					<div className='flex items-center gap-8'>
						<ArrowLeftRight color='white' size={28} cursor={'pointer'} />
						<Search color='white' size={28} cursor={'pointer'} />
						<ShoppingBasket color='white' size={28} cursor={'pointer'} />
					</div>
				</div>

				<Hcategories />
				<div className='mt-10  w-[600px] flex flex-col gap-10 '>
					<h1 className='font-extrabold text-6xl leading-20 text-secondary'>
						Мойки, смесители и аксессуары
					</h1>
					<p className='text-secondary text-3xl'>
						от ведущего производителя сантехники для кухни Reginox
					</p>
				</div>
				<div className='w-full flex justify-end '>
					<div className='w-[312px] '>
						<div className='bg-danger flex-1 flex items-center text-secondary text-base font-normal'>
							<p className='ml-1 relative left-20'>Стальные мойки Reg-color</p>
							<img src={litleHeaderImg} alt='' />
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-col gap-20 px-24 h-72 pt-10 bg-gray1'>
				<h2 className='font-bold text-7xl text-center text-secondary  '>
					THE CROWN FOR YOUR KITCHEN
				</h2>
				<div className='flex justify-between flex-wrap gap-4 relative'>
					<Dropdown
						number='+65 (0) 67 88 53 63'
						mail='info@reginox.com.sg'
						name='Reginox, Singapore'
						browser='reginox.sg'
						adress='1 Loyang Lane #03-03 Singapore 508913'
					/>
					<Dropdown
						number='+994 (12) 497 36 52'
						mail='info@azercompany.az'
						name='Azertexnolayn, Azerbaijan'
						browser='azertexnolayn.az'
						adress='Bakı, Qaradağ rayonu, Salyan şosesi 32-ci km'
					/>
					<Dropdown
						number='+1 (415) 789-4561'
						mail='support@usainnovate.com'
						name='USA Innovate, USA'
						browser='usainnovate.com'
						adress='Silicon Valley, 123 Tech Street, CA 94025'
					/>
					<Dropdown
						number='+44 (0) 20 7946 0958'
						mail='hello@brittech.uk'
						name='BritTech, UK'
						browser='brittech.uk'
						adress='London, 25 Oxford Street, W1D 2DN'
					/>
				</div>
			</div>
		</header>
	)
}

export default Header
