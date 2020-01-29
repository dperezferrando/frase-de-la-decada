import { Types, actions } from "../actions/profile";
import { noop } from "../actions/commons";
import Promise from "bluebird";
import { map, flatMap, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import serverApi from "../services/apis/serverApi";

export default {
  fetchUserEpic: (action$, store) =>
    action$.pipe(
      ofType(Types.FETCH_USER),
      flatMap(() => serverApi.user()),
      map(actions.setUser)
    ),
  logoutEpic: (action$, store) =>
    action$.pipe(
      ofType(Types.LOGOUT),
      flatMap(() => serverApi.logout().then(() => window.location = "/")),
      mapTo(noop())
    )
};