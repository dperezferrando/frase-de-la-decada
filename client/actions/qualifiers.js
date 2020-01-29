export const Types = {
  FETCH_FRASES: "FETCH_FRASES",
  FETCH_FRASES_ANIO: "FETCH_FRASES_ANIO",
  SET_FRASES: "SET_FRASES",
  SET_FRASES_ANIO: "SET_FRASES_ANIO",
}


export const actions = {
  fetchFrases: (options) => ({
    type: Types.FETCH_FRASES,
    options
  }),
  setFrases: (frases) => ({
    type: Types.SET_FRASES,
    frases
  }),fetchFrasesAnio: () => ({
    type: Types.FETCH_FRASES_ANIO
  }),
  setFrasesAnio: (frases) => ({
    type: Types.SET_FRASES_ANIO,
    frases
  })

}
