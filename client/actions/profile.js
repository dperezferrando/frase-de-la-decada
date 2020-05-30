export const Types = {
  FETCH_USER: "FETCH_USER",
  SET_USER: "SET_USER"
}


export const actions = {
  fetchUser: () => ({
    type: Types.FETCH_USER
  }),
  setUser: (user) => ({
    type: Types.SET_USER,
    user
  })

}
