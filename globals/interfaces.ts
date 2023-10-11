export interface ClassStates {
  [key: string]: string;
}

export interface TextAnimations {
  textUp: boolean;
  textDown: boolean;
  textRight: boolean;
  textLeft: boolean;
}

export interface StatsInterface {
  value: string;
  description: string;
}

export interface InformationInterface {
  title: string;
  infos: string[];
}

export interface RowCellInterface {
  problem: string;
  description: string;
}
