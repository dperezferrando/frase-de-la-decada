export const Types = {
  FETCH_RESULTS_2020: "FETCH_RESULTS_2020",
}


export const actions = {
  fetchResults: (options) => ({
    type: Types.FETCH_RESULTS_2020,
    options
  })
}
