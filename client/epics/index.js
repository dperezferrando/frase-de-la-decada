import { combineEpics } from 'redux-observable';
import _ from "lodash";
import { catchError } from 'rxjs/operators';
import exampleEpic from "./example";
import profileEpic from "./profile";
import qualifiersEpic from "./qualifiers";
import qualifiersResultsEpic from "./qualifiersResults";
import groupStageEpic from "./groupStage";
import bracketPhaseEpic from "./bracketPhase";
import bracketStageEpic from "./bracketStage";

export default (action$, store$, dependencies) =>
  combineEpics(
    ...(_.values(exampleEpic)),
    ...(_.values(profileEpic)),
    ...(_.values(qualifiersEpic)),
    ...(_.values(qualifiersResultsEpic)),
    ...(_.values(groupStageEpic)),
    ...(_.values(bracketPhaseEpic)),
    ...(_.values(bracketStageEpic))
  )(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );