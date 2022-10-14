import { useContext } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import useFetch from "../../../hooks/useFetch"
import Badge from "../../Atoms/Badge"
import BuyButton from "../../Atoms/BuyButton"
import ProductRating from "../../Atoms/ProductRating"
import PriceDetails from "../../Molecules/PriceDetails"
import ProductDetails from "../../Molecules/ProductDetails"
import ProductInformation from "../../Molecules/ProductInformation"
import RelatedProducts from "../../Molecules/RelatedProducts"
import ShareProduct from "../../Molecules/ShareProduct"

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

  const { rating, sold, isNew, hasDelivery } = product.features.stats

  return (
    <div className="pt-16 max-w-256 m-auto">
      <section className="py-10">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="rounded-lg overflow-hidden mb-5">
              <img
                className="align-middle"
                src={product.images[0]}
                alt={product.product_name}
              />
            </div>
            <ProductDetails details={product.features.details} isNew={isNew} />
          </div>
          <div>
            <span className="block text-gray-500 text-sm mb-2">
              {isNew ? "Nuevo" : "Usado"} | {sold} vendidos
            </span>
            <h1 className="text-xl lg:text-2xl font-semibold leading-7 lg:leading-6 text-gray-800 mb-4">
              {product.product_name}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <ProductRating rating={rating} />
              {sold > 300 && <Badge text="Lo mas vendido" />}
              {isNew && <Badge text="Nuevo" color="bg-purple-500" />}
            </div>
            <PriceDetails price={product.price} />
            <div className="grid grid-cols-2 gap-4 mb-4">
              <BuyButton text="Comprar ahora" />
              {!state.cart.find((p) => p.id === product.id) ? (
                <BuyButton
                  text="Agregar al carrito"
                  onClick={() => {
                    dispatch({ type: "ADD_TO_CART", payload: product })
                  }}
                  isGhost
                />
              ) : (
                <BuyButton
                  text="Quitar del carrito"
                  onClick={() => {
                    dispatch({ type: "REMOVE_FROM_CART", payload: product })
                  }}
                  isGhost
                />
              )}
            </div>
            <ProductInformation
              description={product.description}
              deliveryAvailable={hasDelivery}
            />
            <ShareProduct id={product.id} />
          </div>
        </div>
      </section>
      <RelatedProducts />
    </div>
  )
}

export default ProductPage
