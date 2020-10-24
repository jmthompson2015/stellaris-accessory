import Technology from "../../artifact/Technology.js";

const TechnologyUtilities = {};

const AREA_TO_COLOR = {
  physics: "hsl(195, 100%, 45%)",
  society: "green",
  engineering: "hsl(45, 100%, 40%)",
};

TechnologyUtilities.areaColor = (area) => AREA_TO_COLOR[area];

TechnologyUtilities.technology = (key) => Technology[key];

TechnologyUtilities.technologies = (keys) =>
  R.map((key) => Technology[key], keys);

export default TechnologyUtilities;
