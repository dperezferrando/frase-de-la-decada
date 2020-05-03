import _ from "lodash";

export const Types = {
  VOTE_BRACKETSTAGE: "VOTE_BRACKETSTAGE"
}

export const actions = {
  vote: (phase, match, frases) => ({
    type: Types.VOTE_BRACKETSTAGE,
    phase,
    match,
    frases
  })
};
