import {
  BeforeAfterInterface,
  InformationInterface,
  RowCellInterface,
  SideBySideImgInterface,
} from "@/globals/interfaces";

export const informations: InformationInterface[] = [
  {
    title: "Role",
    infos: ["UX Researcher", "UX Designer", "Prototyping", "User Testing"],
  },
  {
    title: "Duration",
    infos: ["January 2023 - March 2023"],
  },
];

export const userNeeds: RowCellInterface[] = [
  {
    problem: "Users want better collaboration and stronger community",
    description: `Currently, there is no way to add other users as friends on Youtube Music. 
    This weakens collaboration and youtube’s ability to create a stronger community.`,
  },
  {
    problem: "Unstructured Library",
    description: `Users are frustrated with the current library structure. 
    It organise everything together instead of having a proper hierarchy. 
    Also, there is no way to pin your favourite music.`,
  },
  {
    problem: "No internal search functions",
    description: `Youtube Music only has a global search function, 
    which means there is no way to search in playlists or albums.`,
  },
  {
    problem: "Lyrics Improvement",
    description: `Lyrics are either missing or hard to read. Users want live lyrrics like the competitors.`,
  },
];

export const beforeAfter: BeforeAfterInterface[] = [
  {
    problem: {
      text: `Having the search action at the top right corner makes it hard for users to use app with one hand.`,
      imgSrc: `/assets/youtubeMusic/problem1.png`,
    },
    solution: {
      text: `Solution: Search is one of the most used actions on the app; therefore having it in the navigation is more beneficial for users.`,
      imgSrc: `/assets/youtubeMusic/solution1.png`,
    },
  },
  {
    problem: {
      text: `Users want a simple way to find and add other users. Also, currently when you search for something, search recommendations are not categorised.`,
      imgSrc: `/assets/youtubeMusic/problem2.png`,
    },
    solution: {
      text: `Using consistent industry design pattern to add quick filter options in the search menu to make it easy for users to filter by category.`,
      imgSrc: `/assets/youtubeMusic/solution2.png`,
    },
  },
  {
    problem: {
      text: `Users are unable to add friends, limiting collaboration and community growth.`,
      imgSrc: `/assets/youtubeMusic/problem3.png`,
    },
    solution: {
      text: `There is now an add friend option, which opens new collaboration features as well as AI generated playlists between friends.`,
      imgSrc: `/assets/youtubeMusic/solution3.png`,
    },
  },
  {
    problem: {
      text: `The current library is unorganised,  lacks structure, hierarchy and customisation. Users can’t pin their favourite music and they are concerned with mixing music and podcasts.`,
      imgSrc: `/assets/youtubeMusic/problem4.png`,
    },
    solution: {
      text: `Designing proper structure with each category having it’s own folder. Users can also pin their favourite music and Podcast is segregated from Music Library.`,
      imgSrc: `/assets/youtubeMusic/solution4.png`,
    },
  },
  {
    problem: {
      text: `Users have to send the playlist link to their fiends to add them as collaborates them. This is tedious as a link has to be sent to each user and sometimes it does not work properly.`,
      imgSrc: `/assets/youtubeMusic/problem5.png`,
    },
    solution: {
      text: `I have added a collaborations action to the playlist creation menu making it easy for users to add their their friends as collaborators quickly.`,
      imgSrc: `/assets/youtubeMusic/solution5.png`,
    },
  },
  {
    problem: {
      text: `The current playlist screen was missing key features that users want such as, an internal search function, a quick filter to rearrange the playlist, and  having the shuffle action on the screen.`,
      imgSrc: `/assets/youtubeMusic/problem6.png`,
    },
    solution: {
      text: `The playlist screen was slightly redesigned to add all of the missing features without taking away from the orginal look and feel.`,
      imgSrc: `/assets/youtubeMusic/solution6.png`,
    },
  },
];

export const musicMobileAppEx: SideBySideImgInterface[] = [
  {
    imgSrc: "/assets/youtubeMusic/musicApp.png",
  },
  {
    imgSrc: "/assets/youtubeMusic/musicApp.png",
  },
  {
    imgSrc: "/assets/youtubeMusic/musicApp.png",
  },
];

export const featuresExample: SideBySideImgInterface[] = [
  {
    text: "1. Adding a new friend",
    imgSrc: "/assets/youtubeMusic/musicApp.png",
  },
  {
    text: "2. Finding your friends",
    imgSrc: "/assets/youtubeMusic/musicApp.png",
  },
  {
    text: "3. adding collaborators",
    imgSrc: "/assets/youtubeMusic/musicApp.png",
  },
];

export const learned: RowCellInterface[] = [
  {
    problem: "Using consistent design patterns is important",
    description: `Sometimes as Designers, we have this need to try and reinvent the wheel and design something 
    different, but sometimes, we must use consistent design patterns across 
    products and make it easier for users.`,
  },
  {
    problem: "Getting users to interview is not always that hard",
    description: `I was shocked with the amount of reddit users that were happy to get interviewed and provide feedback. 
    Many of these users have experimented and used most streaming apps, so their feedback is valuable.`,
  },
  {
    problem: "The Minimal Viable Product must have basic features",
    description: `Youtube Music was released with missing basic features  that are still not included to this day. 
    This frustrated many users, which resulted in them going to the competitors. .`,
  },
];
