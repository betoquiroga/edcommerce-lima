import { Link } from 'react-router-dom';
import { formatPrice } from '../../helpers/number';
import BuyButton from '../Atoms/BuyButton';
import ProductRating from '../Atoms/ProductRating';

const ProductCard = ({ product }) => {
	const { images, product_name, id, price, description } = product;

	return (
		<article class="w-full max-w-sm bg-white rounded-lg shadow-lg p-5">
			<div className="mb-5 rounded-lg overflow-hidden">
				<Link to={`/productos/${id}`}>
					<img
						className="align-middle h-40 w-full object-cover"
						src={images[0]}
						alt={product_name}
					/>
				</Link>
			</div>
			<div className="mb-6">
				<Link to={`/productos/${id}`}>
					<h3 class="text-xl font-semibold tracking-tight text-gray-900 mb-2">
						{product_name}
					</h3>
				</Link>
				<p className="text-gray-500">{description}</p>
			</div>
			<ProductRating rating={3} className="mb-3" />
			<div class="flex justify-between items-center">
				<span class="text-xl font-bold text-gray-900">
					{formatPrice(price)}
				</span>
				<BuyButton text="Agregar al carrito" />
			</div>
		</article>
	);
};

export default ProductCard;
