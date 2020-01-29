export const Types = {
  TEST: "TEST",
  SET: "SET"
}


export const actions = {
  testAction: () => ({
    type: Types.TEST
  }),
  setAction: (message) => ({
    type: Types.SET,
    message
  })

}
