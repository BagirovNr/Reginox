import amsterdamDark25 from '../../assets/img/popular/amsterdamDark25.svg'
import YADKIN from '../../assets/img/popular/YADKIN.svg'
import Diplomat from '../../assets/img/popular/Diplomat.svg'
import WAFELBLAD from '../../assets/img/popular/WAFELBLAD.svg'
import Amsterdam34CaffeSilvery from '../../assets/img/popular/Amsterdam34CaffeSilvery.svg'
import R18370OSPlux from '../../assets/img/popular/R18370OSPlux.svg'

const products = [
	{
		id: 1,
		name: 'Amsterdam 25 Dark chocolate',
		price: '9 950 руб',
		image: amsterdamDark25,
	},
	{ id: 2, name: 'YADKIN Premium', price: '8 500 руб', image: YADKIN },
	{ id: 3, name: 'Diplomat Classic', price: '10 200 руб', image: Diplomat },
	{ id: 4, name: 'WAFELBLAD Original', price: '7 800 руб', image: WAFELBLAD },
	{
		id: 5,
		name: 'Amsterdam 34 Caffe Silvery',
		price: '11 000 руб',
		image: Amsterdam34CaffeSilvery,
	},
	{ id: 6, name: 'R18370 OSP Lux', price: '12 300 руб', image: R18370OSPlux },
]

function Popular() {
	return (
		<section className='px-28 mt-20 flex flex-col gap-20'>
			<h2 className='font-bold text-5xl leading-[1.4] text-center self-start'>
				Популярные товары
			</h2>

			<div className='grid grid-cols-3 gap-5 shadow-xl bg-gray-100 p-5'>
				{products.map(product => (
					<div
						key={product.id}
						className='w-80 mx-5 my-5 flex flex-col hover:-translate-y-5 transition ease-in-out duration-500 group'
					>
						<div className='bg-white h-80 flex flex-col items-center justify-between p-4 shadow-lg rounded-lg'>
							<img
								src={product.image}
								alt={product.name}
								className='h-40 w-auto object-contain'
							/>
							<h3 className='text-lg font-semibold'>{product.name}</h3>
							<p className='text-xl font-bold text-gray-700'>{product.price}</p>
						</div>
						<div className='bg-red-500 hover:bg-red-600 duration-500 opacity-0 text-white w-full h-14 flex items-center justify-center cursor-pointer transition group-hover:opacity-100 rounded-lg'>
							В корзину
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Popular
