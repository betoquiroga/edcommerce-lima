import { TbTruckDelivery } from 'react-icons/tb';

const ProductInformation = ({ description, deliveryAvailable }) => {
	return (
		<>
			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">Descripción del producto</h2>
				<p className="text-gray-500">
					{description} fdkl jasdk jklsdfj sfj sjfkld jklasdfjsdjfl jklasfj
					lasdjfl jfl jklasjf lasdfj kldfjl sdjflksaj lkasjf lsadfjl sjflsd
					jlasdjf lsafjl sjklsdjf lsdjfl jasdlfj slkdfj lsadjl jlasdjf lkasdfj
					ksdfjlkds jfklasdj kldasjfkl jasdfkl jskfjlsdfjkls jfklsdjf lsdjf sjfl
					jasfkl jaslkfj klasfj lkasfjklasdjlasdjdf
				</p>
			</div>
			{deliveryAvailable && (
				<div className="mb-6">
					<p className="text-lg font-semibold mb-2">
						Disponibilidad y tiempos de entrega
					</p>
					<div className="flex items-center gap-2 text-gray-500">
						<TbTruckDelivery className="text-xl" />
						<p>Disponible para despacho a domicilio</p>
					</div>
				</div>
			)}
		</>
	);
};

export default ProductInformation;
