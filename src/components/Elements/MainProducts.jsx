import { Link } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import Loader from "./Loader"

const MainProducts = () => {
  const [products, isLoading, error] = useFetch("/public/products")

  if (isLoading) return <Loader />

  if (error) return <div>{error?.message}</div>

  return (
    <div className="pt-16 max-w-256 m-auto">
      <section className="pt-10">
        <h1 className="text-4xl">Bienvenido a EDcommerce</h1>
        <p className="mb-6">Donde comprar es sinónimo de gastar plata</p>
        <div className="grid grid-cols-6 gap-4">
          {products.map((p) => (
            <div key={p.id}>
              <h2>{p.product_name}</h2>
              <Link to={`/productos/${p.id}`}>
                <img src={p.images[0]} alt={p.product_name} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default MainProducts
