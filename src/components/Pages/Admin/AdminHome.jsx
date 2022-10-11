import { Link } from "react-router-dom"
import { BiDollarCircle, BiBox, BiImage } from "react-icons/bi"

function AdminHome() {
  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
      <div className="container m-auto py-12 px-6 h-full text-gray-800">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="md:p-12 md:mx-6">
                <div className="text-center">
                  <h1 className="text-3xl font-semibold mt-1 mb-8 pb-1">
                    Panel de administración
                  </h1>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <Link to="/admin/ventas">
                    <div className="flex items-center p-4 hover:bg-slate-100">
                      <div className="mr-4">
                        <BiDollarCircle className="text-4xl text-sky-500" />
                      </div>
                      <div>
                        <h2 className="text-l">Ventas</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="/admin/productos">
                    <div className="flex items-center p-4 hover:bg-slate-100">
                      <div className="mr-4">
                        <BiBox className="text-4xl text-sky-500" />
                      </div>
                      <div>
                        <h2 className="text-l">Productos</h2>
                      </div>
                    </div>
                  </Link>
                  <Link to="/admin/imagenes/crear">
                    <div className="flex items-center p-4 hover:bg-slate-100">
                      <div className="mr-4">
                        <BiImage className="text-4xl text-sky-500" />
                      </div>
                      <div>
                        <h2 className="text-l">Imágenes</h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminHome
