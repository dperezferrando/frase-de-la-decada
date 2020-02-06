import QualifiersValidators from "./qualifiersValidator";

const validators = {
  "qualifiers": new QualifiersValidators()
};

export default (phase) => validators[phase];