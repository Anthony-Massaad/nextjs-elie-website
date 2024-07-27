import { pathNames, relativePathDirectories } from "@/globals/constants";

export interface HomeContentStructure {
  title: string;
  bodyDescription: string;
  buttonText: string;
  vidSrc?: string;
  imgSrc?: string;
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
                My name is Elie, and I am a product designer. I love using both qualitative and quantitative data to 
                create story-driven designs that transform complex problems into simple, 
                intuitive, and beautiful solutions. My goal is to create designs that stand out and make users' 
                lives easier.
            `,
    buttonText: `Let's Connect!`,
    imgSrc: `/assets/images/aboutPfp.png`,
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
    Designing an end to end app for Pro Golfers to use an electroencephalogram device to measure and enhance mental focus and relaxation during training sessions. their training performance.
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
      Enhancing and elevating the overall experience of YouTube Music to meet its potential by adding new features.            `,
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
