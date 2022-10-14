import useFetch from "../../hooks/useFetch"
import ProductCard from "../Molecules/ProductCard"
import Loader from "./Loader"

const MainProducts = () => {
  const [products, isLoading, error] = useFetch("/public/products")

  if (isLoading) return <Loader />

  if (error) return <div>{error?.message}</div>

  return (
    <div className="max-w-256 m-auto">
      <section className="py-10">
        <div className="grid grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default MainProducts
