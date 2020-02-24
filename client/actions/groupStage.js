export const Types = {
  FETCH_QUALIFIED: "FETCH_QUALIFIED",
  SET_QUALIFIED: "SET_QUALIFIED"
}


export const actions = {
  fetchQualified: () => ({
    type: Types.FETCH_QUALIFIED
  }),
  setQualified: (qualified) => ({
    type: Types.SET_QUALIFIED,
    qualified
  })

}
