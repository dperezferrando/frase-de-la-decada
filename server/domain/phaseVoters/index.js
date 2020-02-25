import QualifiersVoter from "./qualifiersVoter";
import GroupStageVoter from "./groupStageVoter";

const voters = {
  "qualifiers": new QualifiersVoter(),
  "groupStage": new GroupStageVoter()
};

export default (phase) => console.log("GGG", phase) || voters[phase];