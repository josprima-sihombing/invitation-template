import type { PluginAPI } from "tailwindcss/types/config";

export default ({ matchUtilities, theme }: PluginAPI) => {
  matchUtilities({
    "text-border": (value) => {
      const values = value.split("-");
      const color = values[0];
      const width = values[1] || "1px";

      return {
        textShadow: `
          -${width} ${width} 0 ${color},
          ${width} ${width} 0 ${color},
          ${width} -${width} 0 ${color},
          -${width} -${width} 0 ${color};`,
      };
    },
  });
};
