import _ from "lodash";
import { Types, actions } from "../actions/resultados";
import { noop } from "../actions/commons";
import Promise from "bluebird";
import { map, flatMap, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import serverApi from "../services/apis/serverApi";

export default {
  fetchMostVotedEpic: (action$, store) =>
    action$.pipe(
      ofType(Types.FETCH_MOST_VOTED),
      flatMap(() => serverApi.mostVoted()),
      map(actions.setMostVoted)
    )

};