export const Types = {
  FETCH_VOTES: "FETCH_VOTES_BRACKETSTAGE",
  SET_VOTES: "SET_VOTES_BRACKETSTAGE",
}


export const actions = {
  fetchVotes: (phase) => ({
    type: Types.FETCH_VOTES,
    phase
  }),
  setVotes: (votes) => ({
    type: Types.SET_VOTES,
    votes
  })

}
