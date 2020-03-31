export const Types = {
  FETCH_QUALIFIED: "FETCH_QUALIFIED",
  SET_QUALIFIED: "SET_QUALIFIED",
  VOTE_GROUPSTAGE: "VOTE_GROUPSTAGE",
  FETCH_VOTES: "FETCH_VOTES_GROUPSTAGE",
  SET_VOTES: "SET_VOTES_GROUPSTAGE",
}


export const actions = {
  fetchQualified: () => ({
    type: Types.FETCH_QUALIFIED
  }),
  setQualified: (qualified) => ({
    type: Types.SET_QUALIFIED,
    qualified
  }),
  vote: (phase, group, frases) => ({
    type: Types.VOTE_GROUPSTAGE,
    phase,
    group,
    frases
  }),
  fetchVotes: (phase) => ({
    type: Types.FETCH_VOTES,
    phase
  }),
  setVotes: (votes) => ({
    type: Types.SET_VOTES,
    votes
  }),

}
