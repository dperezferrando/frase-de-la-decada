import _ from "lodash";

export const Types = {
  FETCH_MATCHES: "FETCH_MATCHES",
  SET_MATCHES: "SET_MATCHES",
  VOTE_BRACKETSTAGE: "VOTE_BRACKETSTAGE",
  FETCH_VOTES: "FETCH_VOTES_BRACKETSTAGE",
  SET_VOTES: "SET_VOTES_BRACKETSTAGE",
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
  }),
  fetchVotes: (phase) => ({
    type: Types.FETCH_VOTES,
    phase
  }),
  setVotes: (votes) => ({
    type: Types.SET_VOTES,
    votes
  })
};
