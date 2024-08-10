const defaultColors = {
  one: "#FFFFFF",
  two: "#F0C47D",
  three: "#0A3B54",
  four: "#0B2033",
  five: "#509ADC",
};

const greenColors = {
  one: "#FFFFFF",
  two: "#FF0000",
  three: "green",
  four: "blue",
  five: "purple",
};

export type Config = {
  colors: typeof defaultColors;
};

const blueConfig: Config = {
  colors: defaultColors,
};

const greenConfig: Config = {
  colors: greenColors,
};

export const configs = {
  green: greenConfig,
  "arsa-arsy": blueConfig,
};
