export const token = () => localStorage.getItem("tokenEDcommerce")

export const setToken = (token) => {
  localStorage.setItem("tokenEDcommerce", token)
}

export const removeToken = () => {
  localStorage.removeItem("tokenEDcommerce")
}

export const headers = {
  Authorization: `Bearer ${token()}`,
}
