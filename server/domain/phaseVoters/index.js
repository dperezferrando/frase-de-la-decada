import QualifiersVoter from "./qualifiersVoter";
import GroupStageVoter from "./groupStageVoter";

const voters = {
  qualifiers: (user) => new QualifiersVoter(user),
  groupStage: (user) => new GroupStageVoter(user)
};

export default (phase, user) =>  voters[phase](user);