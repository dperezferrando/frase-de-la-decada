export const Types = {
  FETCH_MOST_VOTED: "FETCH_MOST_VOTED",
  SET_MOST_VOTED: "SET_MOST_VOTED",
  FETCH_STATS: "FETCH_STATS",
  SET_STATS: "SET_STATS",
  FETCH_DESTACADAS: "FETCH_DESTACADAS",
  SET_DESTACADAS: "SET_DESTACADAS",
}


export const actions = {
  fetchMostVoted: () => ({
    type: Types.FETCH_MOST_VOTED
  }),
  setMostVoted: (mostVoted) => ({
    type: Types.SET_MOST_VOTED,
    mostVoted
  }),
  fetchStats: () => ({
    type: Types.FETCH_STATS,
  }),
  setStats: (stats) => ({
    type: Types.SET_STATS,
    stats
  }),
  fetchDestacadas: () => ({
    type: Types.FETCH_DESTACADAS,
  }),
  setDestacadas: (destacadas) => ({
    type: Types.SET_DESTACADAS,
    destacadas
  })
}
