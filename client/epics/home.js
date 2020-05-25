import { Types, actions } from "../actions/home";
import { noop } from "../actions/commons";
import Promise from "bluebird";
import { map, flatMap, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import serverApi from "../services/apis/serverApi";

export default {
  fetchNewsEpic: (action$, store) =>
    action$.pipe(
      ofType(Types.FETCH_NEWS),
      flatMap(() => serverApi.news()),
      map(news => actions.setNews(news))
    )
};