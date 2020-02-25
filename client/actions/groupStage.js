export const Types = {
  FETCH_QUALIFIED: "FETCH_QUALIFIED",
  SET_QUALIFIED: "SET_QUALIFIED",
  VOTE_GROUPSTAGE: "VOTE_GROUPSTAGE"
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
  })

}
