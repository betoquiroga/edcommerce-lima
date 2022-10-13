import useFetch from '../../../hooks/useFetch';
import Loader from '../../Elements/Loader';
import ProductCard from '../../Molecules/ProductCard';
import Banner from '../../Organisms/Banner';

const ProductsGrid = () => {
	const [products, isLoading, error] = useFetch('/public/products');

	if (isLoading) return <Loader />;

	if (error) return <div>{error?.message}</div>;

	return (
		<>
			<Banner />
			<section className="py-10 max-w-256 m-auto">
				<h1 className="text-3xl mb-6">Explora nuestros productos</h1>
				<div className="grid grid-cols-4 gap-6">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</section>
		</>
	);
};

export default ProductsGrid;
