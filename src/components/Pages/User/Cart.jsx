import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import axios from "axios"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { API_URL } from "../../../../env"
import { CartContext } from "../../../context/CartContext"
import { token } from "../../../helpers/Auth"

function Cart() {
  const nav = useNavigate()
  const { state, dispatch } = useContext(CartContext)

  let value = 0
  state.cart.forEach((c) => (value += c.price))

  const [order, setOrder] = useState()
  const handleOrder = () => {
    const products = state.cart.map((p) => {
      return {
        product_id: p.id,
        amount: 1,
        unit_price: p.price,
      }
    })
    const data = {
      products,
    }
    axios
      .post(`${API_URL}/private/purchase-orders`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenEDcommerce")}`,
        },
      })
      .then((r) => {
        setOrder(r.data.data)
      })
  }

  return (
    <div className="pt-16 max-w-256 m-auto">
      <section className="pt-10">
        <h1 className="text-4xl mb-6">Carrito de compras</h1>
        {state?.cart?.length > 0 ? (
          <div>
            <div className="grid divide-y-2 mb-2 border-b-2 border-gray-700">
              {state.cart.map((prod) => (
                <div key={prod.id} className="py-4 flex items-top">
                  <div className="w-20 mr-4">
                    <img src={prod.images[0]} alt="" />
                  </div>
                  <div>
                    <h2 className="text-xl">{prod.product_name}</h2>
                    <p>$ {prod.price}</p>
                    <button
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        })
                      }}
                      className="bg-gray-200 text-gray-600"
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-2xl mb-4 font-bold">
              <span>TOTAL: </span> <span>$ {value}</span>
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

        {token() && !order && state.cart.length > 0 && (
          <button className="bg-gradient text-xl" onClick={handleOrder}>
            Pagar (PayPal)
          </button>
        )}
        {!token() && state.cart.length > 0 && (
          <>
            <p className="mb-2">
              Para poder pagar debes iniciar sesión primero
            </p>
            <Link to="/login" className="button bg-gradient">
              Iniciar sesión
            </Link>
          </>
        )}
        {order && (
          <PayPalScriptProvider
            options={{
              "client-id":
                "AdomWD1SSXuqFpXcUfgMxYcQShoCUoINeBCnis7jNEfJJpbFfIW555tY9b6eX7pDlyiQB40WEk5AWGyp",
            }}
          >
            <PayPalButtons
              createOrder={(_, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value,
                      },
                      custom_id: order.id,
                    },
                  ],
                })
              }}
              onApprove={(_, actions) => {
                return actions.order.capture().then((details) => {
                  if (details.status === "COMPLETED") {
                    nav("/pago-exitoso")
                  } else {
                    alert("La compra no se procesó")
                  }
                })
              }}
            />
          </PayPalScriptProvider>
        )}
      </section>
    </div>
  )
}

export default Cart
