import { combineEpics } from 'redux-observable';
import _ from "lodash";
import { catchError } from 'rxjs/operators';
import exampleEpic from "./example";
import profileEpic from "./profile";
import qualifiersEpic from "./qualifiers";

export default (action$, store$, dependencies) =>
  combineEpics(
    ...(_.values(exampleEpic)),
    ...(_.values(profileEpic)),
    ...(_.values(qualifiersEpic))
  )(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );