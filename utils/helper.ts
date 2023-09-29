import { ClassStates } from "@/globals/interfaces";
import { values } from "lodash";

export const joinClassStates = (classStates: ClassStates): string => {
  return values(classStates).filter(Boolean).join(" ");
};
