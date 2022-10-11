import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../../env"

const useFetch = (endpoint, headers = {}) => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`${API_URL}${endpoint}`, headers)
      .then((data) => {
        setData(data.data.data)
      })
      .catch((e) => {
        setError(e)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return [data, isLoading, error]
}

export default useFetch
