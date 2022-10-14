import axios from "axios"
import { Link } from "react-router-dom"
import { API_URL } from "../../../../../env"
import { headers } from "../../../../helpers/Auth"
import useFetch from "../../../../hooks/useFetch"
import Loader from "../../../Elements/Loader"

const ProductsTable = () => {
  const [products, isLoading, error] = useFetch("/public/products")

  const deleteProduct = (p) => {
    if (window.confirm("Estás seguro de eliminar")) {
      axios
        .delete(`${API_URL}/admin/products/${p.id}`, { headers })
        .then((data) => {
          console.log(data)
        })
    }
  }

  if (isLoading) return <Loader />

  if (error) return <div>{error?.message}</div>

  return (
    <div className="pt-16 max-w-256 m-auto">
      <section className="pt-10">
        <h1 className="text-4xl mb-6">Productos</h1>
        <div className="pt-1 mb-12 pb-1">
          <Link className="bg-gradient button" to="/admin/productos/crear">
            Agregar producto
          </Link>
        </div>
        <table className="overflow-x-scroll">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Editar</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.product_name}</td>
                <td>{p.price}</td>
                <td>
                  <Link to={`/admin/productos/editar/${p.id}`}>Editar</Link>
                </td>
                <td>
                  <a
                    className="text-red-600 hover:cursor-pointer"
                    onClick={() => deleteProduct(p)}
                  >
                    Eliminar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default ProductsTable
