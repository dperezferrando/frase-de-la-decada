export const Types = {
  FETCH_MOST_VOTED: "FETCH_MOST_VOTED",
  SET_MOST_VOTED: "SET_MOST_VOTED",
}


export const actions = {
  fetchMostVoted: () => ({
    type: Types.FETCH_MOST_VOTED
  }),
  setMostVoted: (mostVoted) => ({
    type: Types.SET_MOST_VOTED,
    mostVoted
  })
}
