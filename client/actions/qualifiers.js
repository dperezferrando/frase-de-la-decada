export const Types = {
  FETCH_FRASES: "FETCH_FRASES",
  FETCH_FRASES_ANIO: "FETCH_FRASES_ANIO",
  SET_FRASES: "SET_FRASES",
  SET_FRASES_ANIO: "SET_FRASES_ANIO",
  FETCH_AUTHORS: "FETCH_AUTORS",
  SET_AUTHORS: "SET_AUTHORS",
  SET_FILTERS: "SET_FILTERS",
  SET_SELECTED: "SET_SELECTED",
  VOTE_QUALIFIERS: "VOTE_QUALIFIERS",
  FETCH_VOTES_QUALIFIERS: "FETCH_VOTES_QUALIFIERS",
  SET_VOTES_QUALIFIERS: "SET_VOTES_QUALIFIERS"
}


export const actions = {
  fetchFrases: (options) => ({
    type: Types.FETCH_FRASES,
    options
  }),
  setFrases: (frases) => ({
    type: Types.SET_FRASES,
    frases
  }),fetchFrasesAnio: () => ({
    type: Types.FETCH_FRASES_ANIO
  }),
  setFrasesAnio: (frases) => ({
    type: Types.SET_FRASES_ANIO,
    frases
  }),fetchAuthors: () => ({
    type: Types.FETCH_AUTHORS
  }),
  setAuthors: (authors) => ({
    type: Types.SET_AUTHORS,
    authors
  }),
  setFilters: (history, filters) => ({
    type: Types.SET_FILTERS,
    history,
    filters
  }),
  setSelected: (selected) => ({
    type: Types.SET_SELECTED,
    selected
  }),
  vote: (phase, frases) => ({
    type: Types.VOTE_QUALIFIERS,
    phase,
    frases
  }),
  fetchVotes: (phase) => ({
    type: Types.FETCH_VOTES_QUALIFIERS,
    phase
  }),
  setVotes: (votes) => ({
    type: Types.SET_VOTES_QUALIFIERS,
    votes
  })

}
