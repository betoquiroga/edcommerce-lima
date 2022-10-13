import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import SummaryItem from "../../Atoms/SummaryItem"
import OrderSummary from "../../Molecules/OrderSummary"

function Cart() {
  const [order, setOrder] = useState()
  const { state } = useContext(CartContext)

  let value = 0
  state.cart.forEach((c) => (value += c.price))

  return (
    <>
      <div className="pt-16 max-w-256 m-auto">
        <div className="grid grid-cols-3 gap-8 mb-16">
          <section className="col-span-2 pt-10">
            <h1 className="text-3xl font-semibold mb-6">Carrito de compras</h1>
            {state?.cart?.length > 0 ? (
              <div>
                <div className="grid mb-2 border-t border-gray-300/60">
                  {state.cart.map((prod) => (
                    <SummaryItem key={prod.id} product={prod} />
                  ))}
                </div>
              </div>
            ) : (
              <>
                <p className="mb-2">Tu carrito está vacío</p>
                <Link to="/productos" className="button bg-gradient">
                  Ver productos
                </Link>
              </>
            )}
          </section>
          <div className="pt-10">
            <OrderSummary order={order} setOrder={setOrder} total={value} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
