import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { API_URL } from "../../env"
import { headers, token } from "../helpers/Auth"

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState()
  useEffect(() => {
    if (token()) {
      axios.get(`${API_URL}/private/users`, { headers }).then((data) => {
        setUserData({ user: data.data.data, token })
      })
    }
  }, [])
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
