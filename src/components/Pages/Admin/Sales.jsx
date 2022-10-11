import { headers } from "../../../helpers/Auth"
import useFetch from "../../../hooks/useFetch"
import Loader from "../../Elements/Loader"

const Sales = () => {
  const [sales, isLoading, error] = useFetch("/admin/invoices", { headers })

  if (isLoading) return <Loader />

  if (error) return <div>{error?.message}</div>

  return (
    <div className="pt-16 max-w-256 m-auto">
      <section className="pt-10">
        <h1 className="text-4xl mb-6">Ventas</h1>
        <table>
          <thead>
            <tr>
              <th>ID de la compra</th>
              <th>ID del usuario</th>
              <th>ID de la orden</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((p) => (
              <tr key={p.invoice.id}>
                <td>{p.invoice.id}</td>
                <td>{p.user_id}</td>
                <td>{p.purchase_order_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Sales
