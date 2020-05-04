import QualifiersVoter from "./qualifiersVoter";
import GroupStageVoter from "./groupStageVoter";
import BracketVoter from "./bracketVoter";

const voters = {
  qualifiers: (user) => new QualifiersVoter(user),
  groupStage: (user) => new GroupStageVoter(user),
  eights: (user) => new BracketVoter(user, "eights"),
  fourths: (user) => new BracketVoter(user, "fourths"),
  semi: (user) => new BracketVoter(user, "semi"),
  final: (user) => new BracketVoter(user, "final"),
  thirdPlace: (user) => new BracketVoter(user, "thirdPlace")
};

export default (phase, user) =>  voters[phase](user);