import { Types, actions } from "../actions/bracketStage";
import { noop } from "../actions/commons";
import Promise from "bluebird";
import { map, flatMap, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import serverApi from "../services/apis/serverApi";

export default {

  fetchVotesEpic: (action$, store) =>
      action$.pipe(
        ofType(Types.FETCH_VOTES),
        flatMap(({ phase }) => serverApi.votes(phase)),
        map(actions.setVotes)
      )
};