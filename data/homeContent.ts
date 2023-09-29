import { pathNames, relativePathDirectories } from "@/globals/constants";

interface HomeContentStructure {
  title: string;
  bodyDescription: string;
  buttonText: string;
  imageSrc: string;
  colorTheme: string;
  titleColor: string;
  bodyTextcolor: string;
  initialsFill: string;
  smileyColor: string;
  backgroundColor?: string;
  imageBorderColor?: string;
  sectionNextColor?: string;
  gradient?: {
    backgroundColor?: string;
    buttonColor?: string;
    sectionNextColor?: string;
  };
  shadows?: {
    buttonColor?: string;
  };
  href: string;
}

const homeContent: HomeContentStructure[] = [
  {
    title: `UX/Product Designer`,
    bodyDescription: `
                Hi! I am Elie Massaad! I am a Designer that love solving complex 
                problems into simple, intuitive, and beautiful designs that make 
                people’s lives easier.
            `,
    buttonText: `Let's Connect!`,
    imageSrc: `/assets/images/sampleImage.png`,
    colorTheme: `#DC0038`,
    titleColor: `#ffffff`,
    bodyTextcolor: `#ffffff`,
    initialsFill: `#ffffff`,
    backgroundColor: `#0E0E0E`,
    smileyColor: `#363636`,
    href: `${pathNames.aboutMe}`,
  },
  {
    title: `Pursuit`,
    bodyDescription: `
    Designing an end to end app for Pro Golfers to use an electroencephalogram device to measure their training performance.
            `,
    buttonText: `View Case Study`,
    imageSrc: `../assets/images/sampleImage.png`,
    colorTheme: `#2995EF`,
    titleColor: `#F7F6F6`,
    bodyTextcolor: `#F7F6F6`,
    initialsFill: `#F7F6F6`,
    backgroundColor: `#1B1E22`,
    smileyColor: `#01BEBE`,
    gradient: {
      buttonColor: `144deg, #76D0FF 15.29%, #1586EA 84.81%`,
      sectionNextColor: `144deg, #76D0FF 15.29%, #1586EA 84.81%`,
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
    imageSrc: `../assets/images/sampleImage.png`,
    colorTheme: `#FA427A`,
    titleColor: `#300319`,
    bodyTextcolor: `#300319`,
    initialsFill: `#300319`,
    smileyColor: `#C7519D`,
    imageBorderColor: `#FA427A`,
    sectionNextColor: `#7DAFE8`,
    gradient: {
      backgroundColor: `180deg, #fccfe500 0%, #fccfe5f0 100%`,
    },
    href: `${relativePathDirectories.caseStudy}${pathNames.glamourNails}`,
  },
  {
    title: `Youtube Music`,
    bodyDescription: `
    Adding a new feature for to make it easier for users to collaborate with their friends.
            `,
    buttonText: `View Case Study`,
    imageSrc: `../assets/images/sampleImage.png`,
    colorTheme: `#DC0038`,
    titleColor: `#ffffff`,
    bodyTextcolor: `#ffffff`,
    initialsFill: `#ffffff`,
    backgroundColor: `#0E0E0E`,
    smileyColor: `#363636`,
    href: `${relativePathDirectories.caseStudy}${pathNames.youtubeMusic}`,
  },
];

export default homeContent;
