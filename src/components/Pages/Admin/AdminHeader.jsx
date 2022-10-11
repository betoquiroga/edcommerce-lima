import { Link } from "react-router-dom"

function AdminHeader() {
  return (
    <div className="fixed bg-gradient w-full">
      <div className="w-full lg:max-w-256 m-auto flex items-center">
        <div className="logo flex">
          <Link to="/admin">
            <img
              src="https://ed.team/images/logo/logo-monocolor.svg"
              alt="Logo EDteam White"
            />
          </Link>
        </div>
        <nav className="w-full">
          <ul className="flex justify-end text-gray-100">
            <li className="flex items-center">
              <Link className="menu-item" to="/admin">
                Panel
              </Link>
            </li>
            <li className="flex items-center">
              <Link className="menu-item" to="/admin/ventas">
                Ventas
              </Link>
            </li>
            <li className="flex items-center">
              <Link className="menu-item" to="/admin/productos">
                Productos
              </Link>
            </li>
            <li className="flex items-center">
              <Link className="menu-item" to="/admin/imagenes/crear">
                Imágenes
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className="menu-item text-orange-200 hover:text-orange-300"
                to="/"
              >
                Volver a EDcommerce
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default AdminHeader
