import { createBrowserRouter } from "react-router-dom"
import Home from "./components/Pages/Home"
import ProductsForm from "./components/Pages/Admin/Products/ProductsForm"
import Error404 from "./components/Pages/Error404"
import Login from "./components/Pages/User/Login"
import ProductsGrid from "./components/Pages/Products/ProductsGrid"
import Register from "./components/Pages/User/Register"
import Images from "./components/Pages/Admin/Images"
import MainAdmin from "./components/Pages/Admin/AdminMain"
import App from "./components/Pages/App"
import ProductPage from "./components/Pages/Products/ProductPage"
import Profile from "./components/Pages/User/Profile"
import ProductsTable from "./components/Pages/Admin/Products/ProductsTable"
import AdminHome from "./components/Pages/Admin/AdminHome"
import Sales from "./components/Pages/Admin/Sales"
import Cart from "./components/Pages/User/Cart"
import Payment from "./components/Pages/User/Payment"

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error404 />,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/productos",
        element: <ProductsGrid />,
      },
      {
        path: "/productos/:productID",
        element: <ProductPage />,
      },
      {
        path: "/perfil",
        element: <Profile />,
      },
      {
        path: "/carrito",
        element: <Cart />,
      },
      {
        path: "/pago-exitoso",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <MainAdmin />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
      {
        path: "/admin/productos",
        element: <ProductsTable />,
      },
      {
        path: "/admin/productos/crear",
        element: <ProductsForm />,
      },
      {
        path: "/admin/productos/editar/:productID",
        element: <ProductsForm />,
      },
      {
        path: "/admin/imagenes/crear",
        element: <Images />,
      },
      {
        path: "/admin/ventas",
        element: <Sales />,
      },
    ],
  },
])

export default router
