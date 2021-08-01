export const login = () => {
  sessionStorage.setItem('isAuthenticated', true)
}

export const logout = () => {
  sessionStorage.clear()
}

export const isAuthenticated = () => !!sessionStorage.getItem('isAuthenticated')
