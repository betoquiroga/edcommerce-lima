import ProductDetailItem from '../Atoms/ProductDetailItem';

const detailsMock = [
	{
		type: 'Marca',
		value: 'Mercedes Benz',
	},
	{
		type: 'Modelo',
		value: 'C 200',
	},
	{
		type: 'Condicion del producto',
		value: 'Nuevo',
	},
	{
		type: 'Año',
		value: '2019',
	},
	{
		type: 'Color',
		value: 'Azul',
	},
];

const ProductDetails = () => {
	return (
		<div>
			<h2 className="text-xl font-semibold mb-2">Detalles del producto</h2>
			<div className="rounded-lg bg-slate-100 grid grid-cols-3 gap-5 p-5">
				{detailsMock.map((detail) => (
					<ProductDetailItem
						type={detail.type}
						value={detail.value}
						key={detail.type}
					/>
				))}
			</div>
		</div>
	);
};

export default ProductDetails;
