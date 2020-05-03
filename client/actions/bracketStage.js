export const Types = {
  FETCH_MATCHES: "FETCH_MATCHES",
  SET_MATCHES: "SET_MATCHES",
  FETCH_VOTES: "FETCH_VOTES_BRACKETSTAGE",
  SET_VOTES: "SET_VOTES_BRACKETSTAGE",
}


export const actions = {
  fetchMatches: () => {
    return {
      type: Types.FETCH_MATCHES
    };
  },
  setMatches: (matches) => {
    return {
      type: Types.SET_MATCHES,
      matches
    };
  },
  fetchVotes: (phase) => ({
    type: Types.FETCH_VOTES,
    phase
  }),
  setVotes: (votes) => ({
    type: Types.SET_VOTES,
    votes
  })

}
