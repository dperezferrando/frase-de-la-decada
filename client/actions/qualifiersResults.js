export const Types = {
  FETCH_RESULTS: "FETCH_RESULTS_QUALIFIERS",
  SET_RESULTS: "SET_RESULTS_QUALIFIERS",
}


export const actions = {
  fetchResults: () => ({
    type: Types.FETCH_RESULTS
  }),
  setResults: (results) => ({
    type: Types.SET_RESULTS,
    results
  })
};