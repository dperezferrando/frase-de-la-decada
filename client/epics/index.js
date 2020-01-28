import { combineEpics } from 'redux-observable';
import _ from "lodash";
import { catchError } from 'rxjs/operators';
import exampleEpic from "./example";
import profileEpic from "./profile";

export default (action$, store$, dependencies) =>
  combineEpics(
    ...(_.values(exampleEpic)),
    ...(_.values(profileEpic))
  )(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );