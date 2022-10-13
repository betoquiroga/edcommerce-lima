const Banner = () => {
	return (
		<section className="banner relative pt-20 pb-4 px-8">
			<div className="max-w-256 mx-auto grid grid-cols-3 items-center px-8">
				<div className="col-span-2 text-white">
					<h1 className="text-3xl lg:text-5xl font-extrabold mb-4">
						<span className="block mb-1">Bienvenido a</span>
						<span className="text-yellow-200 text-4xl lg:text-6xl">
							EDcommerce
						</span>
					</h1>
					<p className="text-lg">Donde comprar es sinónimo de gastar plata</p>
				</div>
				<div className="max-w-xs">
					<img className src="/e-commerce.png" alt="Agregar al carrito" />
				</div>
			</div>
		</section>
	);
};

export default Banner;
