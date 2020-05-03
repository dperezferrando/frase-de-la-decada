import _ from "lodash";

export const Types = {
  FETCH_MATCHES: "FETCH_MATCHES",
  SET_MATCHES: "SET_MATCHES",
  VOTE_BRACKETSTAGE: "VOTE_BRACKETSTAGE"
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
  },
  vote: (phase, match, frases) => ({
    type: Types.VOTE_BRACKETSTAGE,
    phase,
    match,
    frases
  })
};
