import amsterdamDark25 from '../../assets/img/popular/amsterdamDark25.svg'
function Popular() {
	return (
		<section className='px-28 mt-20 flex flex-col gap-20 '>
			<h2 className='font-bold text-5xl leading-14 text-center self-start'>
				Популярные товары
			</h2>

			<div className='grid grid-cols-3 shadow bg-greyy h-72'>
				<div className=''>
					<div>
						<img src={amsterdamDark25} alt='' />
					</div>
					<div className='absolute'>
						<h3>Amsterdam 25 Dark chocolate</h3>
						<p>9 950 руб</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Popular
