import _ from "lodash";

export const Types = {
  FETCH_MATCHES: "FETCH_MATCHES",
  SET_MATCHES: "SET_MATCHES"
}

export const actions = {

  fetchMatches: (phase) => {
    return {
      type: Types.FETCH_MATCHES,
      phase
    };
  },
  setMatches: (phase, matches) => {
    return {
      type: Types.SET_MATCHES,
      phase,
      matches
    };
  }
};
