import { Types, actions } from "../actions/bracketPhase";
import { noop } from "../actions/commons";
import Promise from "bluebird";
import { map, flatMap, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import serverApi from "../services/apis/serverApi";

export default {
  voteEpic: (action$, store) =>
    action$.pipe(
      ofType(Types.VOTE_BRACKETSTAGE),
      flatMap(({ phase, frases, match }) => serverApi.vote(phase, frases, { match })
        .then(() => window.location = "/bracketstage")
        .catch(it => alert(it))),
      mapTo(noop())
    )
};