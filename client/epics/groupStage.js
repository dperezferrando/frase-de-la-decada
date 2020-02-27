import { Types, actions } from "../actions/groupStage";
import { noop } from "../actions/commons";
import Promise from "bluebird";
import { map, flatMap, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import serverApi from "../services/apis/serverApi";

export default {
  fetchQualifiedEpic: (action$, store) =>
    action$.pipe(
      ofType(Types.FETCH_QUALIFIED),
      flatMap(() => serverApi.qualified()),
      map(actions.setQualified)
    ),voteEpic: (action$, store) =>
    action$.pipe(
      ofType(Types.VOTE_GROUPSTAGE),
      flatMap(({ phase, frases, group }) => serverApi.vote(phase, frases, group)
        .then(() => window.location = "/groupstage")
        .catch(it => alert(it))),
      mapTo(noop())
    ),fetchVotesEpic: (action$, store) =>
    action$.pipe(
      ofType(Types.FETCH_VOTES),
      flatMap(({ phase }) => serverApi.votes(phase)),
      map(actions.setVotes)
    )
};