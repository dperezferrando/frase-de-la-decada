export const Types = {
  FETCH_USER: "FETCH_USER",
  SET_USER: "SET_USER",
  LOGOUT: "LOGOUT"
}


export const actions = {
  fetchUser: () => ({
    type: Types.FETCH_USER
  }),
  setUser: (user) => ({
    type: Types.SET_USER,
    user
  }),
  logout: () => ({
    type: Types.LOGOUT
  })

}
