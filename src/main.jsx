import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import { UserProvider } from "./context/userContext"
import "./index.css"
import router from "./Router"

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </CartProvider>
)
