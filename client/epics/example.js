import { Types, actions } from "../actions/example";
import Promise from "bluebird";
import { map, flatMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

export default {
  exampleEpic: (action$, store) =>
    action$.pipe(
      ofType(Types.TEST),
      flatMap(() => Promise.resolve("ASYNC MESSAGE").delay(2000)),
      map(actions.setAction)
    )
};