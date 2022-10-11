import axios from "axios"
import { API_URL } from "../../../../env"

const Images = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    axios
      .post(`${API_URL}/admin/images`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenEDcommerce")}`,
        },
      })
      .then((r) => {
        console.log(r)
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="pt-16 max-w-256 m-auto">
      <section className="pt-10">
        <h1 className="text-4xl mb-6">Subir imágenes</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
            <input type="file" name="files" multiple className="mb-6" />
            <button className="bg-gradient">Subir</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Images
