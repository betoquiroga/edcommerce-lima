import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import { useNavigate } from "react-router-dom"

const PaypalPayment = ({ value, order }) => {
  const nav = useNavigate()

  return (
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
  )
}

export default PaypalPayment
