import { useContext } from "react"
import { UserContext } from "../../../context/userContext"
import { headers } from "../../../helpers/Auth"
import useFetch from "../../../hooks/useFetch"
import Loader from "../../Elements/Loader"

const Profile = () => {
  const { userData } = useContext(UserContext)
  const [sales, isLoading, error] = useFetch("/private/invoices", { headers })

  if (isLoading) return <Loader />

  if (error) return <div>{error?.message}</div>

  return (
    <div className="pt-16 max-w-256 m-auto">
      <section className="pt-10 mb-6">
        <h1 className="text-4xl mb-6">Tu perfil</h1>
        <p>
          <span className="font-bold">ID de usuario: </span>
          <span>{userData.user.id}</span>
        </p>
        <p>
          <span className="font-bold">Nombre completo: </span>
          <span>{userData.user.details.fullname}</span>
        </p>
        <p>
          <span className="font-bold">Correo electrónico: </span>
          <span>{userData.user.email}</span>
        </p>
        <p>
          <span className="font-bold">Fecha de registro: </span>
          <span>{userData.user.created_at}</span>
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-4">Historial de compras</h2>
        <table>
          <thead>
            <tr>
              <th>ID de la compra</th>
              <th>ID del usuario</th>
              <th>ID de la orden</th>
            </tr>
          </thead>
          <tbody>
            {sales &&
              sales.map((p) => (
                <tr key={p.invoice.id}>
                  <td>{p.invoice.id}</td>
                  <td>{p.user_id}</td>
                  <td>{p.purchase_order_id}</td>
                </tr>
              ))}
            {!sales && (
              <tr>
                <td colSpan={3}>No tienes compras actualmente</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Profile
