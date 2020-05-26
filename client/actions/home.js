export const Types = {
  FETCH_NEWS: "FETCH_NEWS",
  SET_NEWS: "SET_NEWS",
}


export const actions = {
  fetchNews: () => {
    return {
      type: Types.FETCH_NEWS
    };
  },
  setNews: (news) => {
    return {
      type: Types.SET_NEWS,
      news
    };
  }

}
