interface StylingNames {
  colorTheme: string;
  titleColor: string;
  bodyTextColor: string;
  initialsColor: string;
  backgroundColor: string;
  smileyColor: string;
  backgroundGradientColor: string;
  buttonGradientColor: string;
  buttonBoxShadow: string;
  imageBorderColor: string;
  sectionNextColor: string;
  sectionNextGradientBorderColor: string;
}

interface PathNames {
  glamourNails: string;
  pursuit: string;
  youtubeMusic: string;
  aboutMe: string;
}

interface RelativePathDirectories {
  caseStudy: string;
}

export const colorStylingNames: StylingNames = {
  colorTheme: "--color-theme",
  titleColor: "--title-color",
  bodyTextColor: "--body-text-color",
  initialsColor: "--initials-color",
  backgroundColor: "--background-color",
  smileyColor: "--smiley-color",
  backgroundGradientColor: "--background-gradient-color",
  buttonGradientColor: "--button-gradient-color",
  buttonBoxShadow: "--button-box-shadow",
  imageBorderColor: "--image-border-color",
  sectionNextGradientBorderColor: "--section-next-gradient-border-color",
  sectionNextColor: "--section-next-color",
};

export const pathNames: PathNames = {
  glamourNails: "glamourNails",
  pursuit: "pursuit",
  youtubeMusic: "youtubeMusic",
  aboutMe: "about",
};

export const relativePathDirectories: RelativePathDirectories = {
  caseStudy: "caseStudy/",
};
