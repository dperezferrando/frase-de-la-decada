export const Types = {
  FETCH_FRASES:"FETCH_FRASES",
  SET_FRASES: "SET_FRASES"
}


export const actions = {
  fetchFrases: (options) => ({
    type: Types.FETCH_FRASES,
    options
  }),
  setFrases: (frases) => ({
    type: Types.SET_FRASES,
    frases
  })

}
