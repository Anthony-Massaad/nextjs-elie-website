import { pathNames, relativePathDirectories } from "@/globals/constants";

export interface HomeContentStructure {
  title: string;
  bodyDescription: string;
  buttonText: string;
  vidSrc: string;
  colorTheme: string;
  titleColor: string;
  bodyTextcolor: string;
  initialsFill: string;
  smileyColor: string;
  backgroundColor?: string;
  imageBorderColor?: string;
  sectionNextColor?: string;
  headerBackgroundColor?: string;
  gradient?: {
    backgroundColor?: string;
    buttonColor?: string;
    sectionNextColor?: string;
    headerBackgroundColor?: string;
    blurBackground?: string;
  };
  shadows?: {
    buttonColor?: string;
  };
  href: string;
}

const homeContent: HomeContentStructure[] = [
  {
    title: `Hello!`,
    bodyDescription: `
                My name is Elie. I am a product designer Designer that love solving complex problems into simple, 
                intuitive, and beautiful designs that stands out and make users lives easier. 
            `,
    buttonText: `Let's Connect!`,
    vidSrc: `/assets/images/sampleImage.png`,
    colorTheme: `#DC0038`,
    titleColor: `#ffffff`,
    bodyTextcolor: `#ffffff`,
    initialsFill: `#ffffff`,
    backgroundColor: `#0E0E0E`,
    headerBackgroundColor: `#363636`,
    smileyColor: `#363636`,
    href: `${pathNames.aboutMe}`,
    gradient: {
      blurBackground: `45deg,
      rgba(220, 0, 56, 0.1) 0%,
      rgba(14, 14, 14, 0.1) 100%`,
    },
  },
  {
    title: `Pursuit`,
    bodyDescription: `
    Designing an end to end app for Pro Golfers to use an electroencephalogram device to measure their training performance.
            `,
    buttonText: `View Case Study`,
    vidSrc: `/assets/pursuit-front-cover.mp4`,
    colorTheme: `#2995EF`,
    titleColor: `#F7F6F6`,
    bodyTextcolor: `#F7F6F6`,
    initialsFill: `#F7F6F6`,
    backgroundColor: `#1B1E22`,
    smileyColor: `#01BEBE`,
    gradient: {
      headerBackgroundColor: `144deg, #76D0FF 15.29%, #1586EA 84.81%`,
      buttonColor: `144deg, #76D0FF 15.29%, #1586EA 84.81%`,
      sectionNextColor: `144deg, #76D0FF 15.29%, #1586EA 84.81%`,
      blurBackground: `45deg,
      rgba(41, 149, 239, 0.1) 0%,
      rgba(27, 30, 34, 0.1) 100%`,
    },
    shadows: {
      buttonColor: `0 0 4px 0px #76D0FF`,
    },
    href: `${relativePathDirectories.caseStudy}${pathNames.pursuit}`,
  },
  {
    title: `Glamour Nails`,
    bodyDescription: `
    Designing a beautiful responsive website for a local business that does not have a digital presence, including a booking system.
            `,
    buttonText: `View Case Study`,
    vidSrc: `/assets/glamour-nails-front-cover.mp4`,
    colorTheme: `#FA427A`,
    titleColor: `#300319`,
    bodyTextcolor: `#300319`,
    initialsFill: `#300319`,
    smileyColor: `#C7519D`,
    imageBorderColor: `#FA427A`,
    sectionNextColor: `#7DAFE8`,
    headerBackgroundColor: `#FB3773`,
    gradient: {
      backgroundColor: `180deg, #fccfe500 0%, #fccfe5f0 100%`,
      blurBackground: `45deg,
      rgba(226, 0, 70, 0.1) 0%,
      rgba(252, 207, 229, 0.1) 100%`,
    },
    href: `${relativePathDirectories.caseStudy}${pathNames.glamourNails}`,
  },
  {
    title: `Youtube Music`,
    bodyDescription: `
    Adding a new feature for to make it easier for users to collaborate with their friends.
            `,
    buttonText: `View Case Study`,
    vidSrc: `/assets/youtube-music-front-cover.mp4`,
    colorTheme: `#DC0038`,
    titleColor: `#ffffff`,
    bodyTextcolor: `#ffffff`,
    initialsFill: `#ffffff`,
    backgroundColor: `#0E0E0E`,
    headerBackgroundColor: `#1A1A1A`,
    smileyColor: `#363636`,
    href: `${relativePathDirectories.caseStudy}${pathNames.youtubeMusic}`,
    gradient: {
      blurBackground: `45deg,
      rgba(220, 0, 56, 0.1) 0%,
      rgba(14, 14, 14, 0.1) 100%`,
    },
  },
];

export default homeContent;
