import { createContext, useReducer } from "react"
import { CartReducer } from "./CartReducer"

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, {
    cart: [],
  })

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
