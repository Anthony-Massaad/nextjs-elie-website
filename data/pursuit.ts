import {
  BrandDetailsInterface,
  InformationInterface,
  RowCellInterface,
  SideBySideImgVidInterface,
} from "@/globals/interfaces";

export const informations: InformationInterface[] = [
  {
    title: "Role",
    infos: ["UX Researcher", "UX Designer", "Prototyping", "User Testing"],
  },
  {
    title: "Client",
    infos: ["Pursuit"],
  },
  {
    title: "Duration",
    infos: ["January 2023 - March 2023"],
  },
];

export const sideBySideExample: SideBySideImgVidInterface[] = [
  {
    src: "/assets/pursuit/pursuit-video-1.mp4",
  },
  {
    src: "/assets/pursuit/pursuit-video-2.mp4",
  },
  {
    src: "/assets/pursuit/pursuit-video-3.mp4",
  },
  {
    src: "/assets/pursuit/pursuit-video-4.mp4",
  },
];

export const businessRequirementsImages: SideBySideImgVidInterface[][] = [
  [
    {
      text: `1. A simple onboarding experience`,
      src: "/assets/pursuit/pursuit-video-1.mp4",
    },
    {
      text: `2. A simple way for coaches to add players they coach`,
      src: "/assets/pursuit/pursuit-video-2.mp4",
    },
  ],
  [
    {
      text: `3. Start a practice match with 3 training types`,
      src: "/assets/pursuit/pursuit-video-3.mp4",
    },
    {
      text: `4. A visually appealing and simple dashboard that users can understand`,
      src: "/assets/pursuit/pursuit-video-4.mp4",
    },
  ],
  [
    {
      text: `5. Start a practice match with 3 training types`,
      src: "/assets/pursuit/pursuit-video-9.mp4",
    },
  ],
];

export const userNeedsImages: SideBySideImgVidInterface[][] = [
  [
    {
      text: `1. Creating a simple scoring system for users to quickly identify their focus and relaxation levels`,
      src: "/assets/pursuit/pursuit-video-10.mp4",
    },
    {
      text: `2. Both coaches and players want statistics through last shot, current round, and entire hole`,
      src: "/assets/pursuit/pursuit-video-11.mp4",
    },
  ],
  [
    {
      text: `3. Adding a quick way for coaches to see their Player’s last training session`,
      src: "/assets/pursuit/pursuit-video-12.mp4",
    },
    {
      text: `4. Creating an easy to use filter hierarchy to zero in on specific training sessions such as. club type`,
      src: "/assets/pursuit/pursuit-video-13.mp4",
    },
  ],
  [
    {
      text: `5. Quick way for Coaches to flip through their players`,
      src: "/assets/pursuit/pursuit-video-14.mp4",
    },
  ],
];

export const userNeeds: RowCellInterface[] = [
  {
    problem:
      "Quick and easy way to identify how Relaxed and Focused a player is",
    description: `Currently, the sports industry doesn’t have a metric 
    based approach to identify how focused or relaxed a player is.`,
  },
  {
    problem: "Training sessions for all types",
    description: `Users want to be able to track their 
    score for Golf course, driving range, and simulator type training.`,
  },
  {
    problem: "Live and historical training through",
    description: `Users want to be able to see live, last shot, 
    current and previous rounds, and entire hole data.`,
  },
  {
    problem: "Easy way to flip through players",
    description: `Coach’s have numerous players that they are training at the same time, 
    it’s important for them to be able to flip through players, quickly and easily.`,
  },
];

export const brandDetailsLayer: BrandDetailsInterface[] = [
  {
    typography: {
      title: "Typography",
      body: ["SF PRO"],
    },
    colors: [
      {
        color: "#1C1F23",
      },
      {
        color: "#50B3F7",
      },
      {
        color: "#D9CF6C",
      },
      {
        color: "#02BEA0",
      },
      {
        color: "#BB5D52",
      },
      {
        color: "#DADFE7",
      },
    ],
  },
];

export const pursuitLearned: RowCellInterface[] = [
  {
    problem: "Need to consider both business and user needs",
    description: `Both the business and users have needs for the product to be successful. 
    As designers, we sometimes try to advocate only for the users, but without the business, there is no product.`,
  },
  {
    problem: "Try to simplify data visualisation",
    description: `The are not data experts and can be overwhelmed with complex data. 
    It’s important to be able to visualise the data in a simple, easily digestible manner.`,
  },
  {
    problem: "User Flows are interative",
    description: `You can have the user flows nailed down but once you start designing, the flows can make more sense in a different way. 
    It’s important to stay flexible and iterate designs.`,
  },
];

export const userFlows: string[] = [
  "/assets/pursuit/userFlow1.png",
  "/assets/pursuit/userFlow2.png",
  "/assets/pursuit/userFlow3.png",
  "/assets/pursuit/userFlow4.png",
  "/assets/pursuit/userFlow5.png",
  "/assets/pursuit/userFlow6.png",
];
