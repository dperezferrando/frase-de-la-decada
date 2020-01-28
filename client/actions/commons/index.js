import _ from "lodash";

export const Types = {
  NOOP: "NOOP",
}


export const noop = () => {
  return {
    type: Types.NOOP
  };
}
