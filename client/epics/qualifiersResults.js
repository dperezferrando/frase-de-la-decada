import { Types, actions } from "../actions/qualifiersResults";
import { noop } from "../actions/commons";
import Promise from "bluebird";
import { map, flatMap, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import serverApi from "../services/apis/serverApi";

export default {
  fetchResultsEpic: (action$, store) =>
    action$.pipe(
      ofType(Types.FETCH_RESULTS),
      flatMap(() => serverApi.qualified()),
      map(actions.setResults)
    )
};