import { useContext } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import useFetch from "../../../hooks/useFetch"

function ProductPage() {
  const { state, dispatch } = useContext(CartContext)
  const params = useParams()
  const [product, isLoading, error] = useFetch(
    `/public/products/${params.productID}`
  )

  if (isLoading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )

  if (error) return <div>{error?.message}</div>

  return (
    <div className="pt-16 max-w-256 m-auto">
      <section className="pt-10">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <img src={product.images[0]} alt={product.product_name} />
          </div>
          <div>
            <h1 className="text-2xl">{product.product_name}</h1>
            <p className="text-gray-500">{product.description}</p>
            <span className="font-bold text-lg">$ {product.price}</span>
            <div>
              {!state.cart.find((p) => p.id === product.id) ? (
                <button
                  className="bg-gradient"
                  onClick={() => {
                    dispatch({ type: "ADD_TO_CART", payload: product })
                  }}
                >
                  AGREGAR AL CARRITO
                </button>
              ) : (
                <button
                  className="text-gray-700 bg-gray-200"
                  onClick={() => {
                    dispatch({ type: "REMOVE_FROM_CART", payload: product })
                  }}
                >
                  QUITAR DEL CARRITO
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductPage
