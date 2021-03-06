// @flow
import presetStage1 from "./preset-stage-1";
import { proposalFunctionBind } from "./generated/plugins";

export default (_: any, opts: Object = {}) => {
  const {
    loose = false,
    useBuiltIns = false,
    decoratorsLegacy = false,
    decoratorsBeforeExport,
    pipelineProposal = "minimal",
    moduleAttributesVersion = "may-2020",
  } = opts;

  return {
    presets: [
      [
        presetStage1,
        {
          loose,
          useBuiltIns,
          decoratorsLegacy,
          decoratorsBeforeExport,
          pipelineProposal,
          moduleAttributesVersion,
        },
      ],
    ],
    plugins: [proposalFunctionBind],
  };
};
