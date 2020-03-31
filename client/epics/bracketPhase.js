import { Types, actions } from "../actions/bracketPhase";
import { noop } from "../actions/commons";
import Promise from "bluebird";
import { map, flatMap, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import serverApi from "../services/apis/serverApi";

export default {
  fetchMatches: (action$, store) =>
    action$.pipe(
      ofType(Types.FETCH_MATCHES),
      flatMap(({ phase }) => serverApi.matches(phase).then(matches => ({ matches, phase }))),
      map(({ phase, matches }) => actions.setMatches(phase, matches))
    )
};