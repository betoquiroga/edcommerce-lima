import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import useFetch from "../../../hooks/useFetch"
import Loader from "../../Elements/Loader"

const ProductsGrid = () => {
  const { state, dispatch } = useContext(CartContext)
  const [products, isLoading, error] = useFetch("/public/products")

  if (isLoading) return <Loader />

  if (error) return <div>{error?.message}</div>

  return (
    <div className="pt-16 max-w-256 m-auto">
      <section className="pt-10">
        <h1 className="text-4xl mb-6">Explora nuestros productos</h1>
        <div className="grid grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id}>
              <h2>{p.product_name}</h2>
              <Link to={`/productos/${p.id}`}>
                <img src={p.images[0]} alt={p.product_name} />
              </Link>
              {!state.cart.find((prod) => prod.id === p.id) ? (
                <button
                  className="bg-gradient"
                  onClick={() => {
                    dispatch({ type: "ADD_TO_CART", payload: p })
                  }}
                >
                  AGREGAR AL CARRITO
                </button>
              ) : (
                <button
                  className="bg-gradient"
                  onClick={() => {
                    dispatch({ type: "REMOVE_FROM_CART", payload: p })
                  }}
                >
                  QUITAR DEL CARRITO
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductsGrid
