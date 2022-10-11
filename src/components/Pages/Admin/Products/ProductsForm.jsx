import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { API_URL } from "../../../../../env"
import Loader from "../../../Elements/Loader"

const ProductsForm = () => {
  const nav = useNavigate()
  const params = useParams()

  const [product, setProduct] = useState()
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (params?.productID) {
      setIsLoading(true)
      axios
        .get(`${API_URL}/public/products/${params.productID}`)
        .then((data) => {
          setProduct(data.data.data)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [])

  const [error, setError] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      product_name: e.target.productName.value,
      price: Number(e.target.price.value),
      images: [e.target.image1.value],
      description: e.target.description.value,
      features: {
        color: e.target.color.value,
      },
    }

    if (!params.productID) {
      axios
        .post(`${API_URL}/admin/products`, body, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenEDcommerce")}`,
          },
        })
        .then(() => {
          nav("/admin/productos")
        })
        .catch((err) => setError(err))
    } else {
      axios
        .put(`${API_URL}/admin/products/${params.productID}`, body, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenEDcommerce")}`,
          },
        })
        .then(() => {
          nav("/admin/productos")
        })
        .catch((err) => setError(err))
    }
  }

  if (isLoading) return <Loader />

  return (
    <div className="pt-16 max-w-256 m-auto">
      <section className="pt-10">
        <h1 className="text-4xl mb-6">
          {`${params.productID ? "Editar" : "Crear"}`} producto
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="productName">Nombre del producto</label>
              <input
                type="text"
                name="productName"
                defaultValue={product && product.product_name}
                required
              />
            </div>
            <div>
              <label htmlFor="price">Precio</label>
              <input
                type="number"
                name="price"
                required
                defaultValue={product && product.price}
              />
            </div>
            <div>
              <label htmlFor="image1">Imagen 1</label>
              <input
                type="text"
                name="image1"
                required
                defaultValue={product && product.images[0]}
              />
            </div>
            <div>
              <label htmlFor="color">Color</label>
              <input
                type="text"
                name="color"
                required
                defaultValue={product && product.features.color}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                name="description"
                required
                defaultValue={product && product.description}
              />
            </div>
          </div>
          <button type="submit" className="bg-gradient">
            Guardar
          </button>
          <p>{error && JSON.stringify(error)}</p>
        </form>
      </section>
    </div>
  )
}

export default ProductsForm
