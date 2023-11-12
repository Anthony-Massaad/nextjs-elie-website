export interface ClassStates {
  [key: string]: string;
}

export interface ColorStructure {
  gradient?: boolean;
  color: string;
}

export interface TypographyStructure {
  title: string;
  body: string[];
}

export interface TextAnimations {
  textUp: boolean;
  textDown: boolean;
  textRight: boolean;
  textLeft: boolean;
}

export interface BrandDetailsInterface {
  typography: TypographyStructure;
  colors: ColorStructure[];
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

export interface BeforeAfterInterface {
  problem: {
    text: string;
    imgSrc: string;
  };
  solution: {
    text: string;
    imgSrc: string;
  };
}

export interface SideBySideImgInterface {
  text?: string;
  imgSrc: string;
}
