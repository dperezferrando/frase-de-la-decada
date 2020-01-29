import { Types, actions } from "../actions/qualifiers";
import { noop } from "../actions/commons";
import Promise from "bluebird";
import { map, flatMap, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import serverApi from "../services/apis/serverApi";

export default {
  fetchFrasesEpic: (action$, store) =>
    action$.pipe(
      ofType(Types.FETCH_FRASES),
      flatMap(({ options }) => serverApi.frases(options)),
      map(actions.setFrases)
    ),fetchFrasesAnioEpic: (action$, store) =>
    action$.pipe(
      ofType(Types.FETCH_FRASES_ANIO),
      flatMap(() => serverApi.frases({ fraseDelAnio: true })),
      map(actions.setFrasesAnio)
    )
};