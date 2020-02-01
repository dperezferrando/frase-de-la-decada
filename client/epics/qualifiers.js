import _ from "lodash";
import { Types, actions } from "../actions/qualifiers";
import { noop } from "../actions/commons";
import Promise from "bluebird";
import { map, flatMap, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import serverApi from "../services/apis/serverApi";

const _isSelected =  (id, selected) => {
  return _(selected)
    .map("_id")
    .includes(id);
}

const filterSelected = ({ limit, offset, results }, selected) => {
  return {
    results: _.reject(results, ({ _id }) => _isSelected(_id, selected)),
    limit,
    offset
  };

}

export default {
  fetchFrasesEpic: (action$, store) =>
    action$.pipe(
      ofType(Types.FETCH_FRASES),
      flatMap(({ options }) => serverApi.frases({ ...options, fraseDelAnio: false })
        .then(frases => filterSelected(frases, store.value.qualifiers.selected))),
      map(actions.setFrases)
    ),fetchFrasesAnioEpic: (action$, store) =>
    action$.pipe(
      ofType(Types.FETCH_FRASES_ANIO),
      flatMap(() => serverApi.frases({ fraseDelAnio: true })),
      map(actions.setFrasesAnio)
    ),fetchAuthorsEpic: (action$, store) =>
    action$.pipe(
      ofType(Types.FETCH_AUTHORS),
      flatMap(() => serverApi.authors()),
      map(actions.setAuthors)
    ),setFiltersEpic: (action$, store) =>
    action$.pipe(
      ofType(Types.SET_FILTERS),
      map(({ history, filters }) => { history.push({ pathname: '/qualifiers', query: filters });
       return filters;
     }),
      map(actions.fetchFrases)
    )

};