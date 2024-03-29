import {
  BrandDetailsInterface,
  InformationInterface,
  RowCellInterface,
  StatsInterface,
} from "@/globals/interfaces";

export const brandDetailsLayer: BrandDetailsInterface[] = [
  {
    typography: {
      title: "Typography",
      body: ["Headers: Playfair Display", "Body Text: Silka"],
    },
    colors: [
      {
        color: "#FCCFE5",
      },
      {
        color: "#FA427A",
      },
      {
        color: "#BF407E",
      },
      {
        color: "#A32965",
      },
      {
        color: "#300319",
      },
      {
        color: "#CFE4FC",
      },
      {
        color: "#7DAFE8",
      },
      {
        color: "#031830",
      },
    ],
  },
];

export const enhanceBookingSystemStats: StatsInterface[] = [
  {
    value: "41",
    description: "Total Respondents",
  },
  {
    value: "7/8",
    description: "aged 45+ prefer calling",
  },
  {
    value: "26/33",
    description: "ages 18-44 prefer booking online",
  },
  {
    value: "95.1%",
    description: "of all respondents prefer automated reminders",
  },
];

export const websiteBuilderStats: StatsInterface[] = [
  {
    value: "75%",
    description: "of website credibility comes from good design",
  },
  {
    value: "89%",
    description:
      "of consumers shop with a competitor after a poor user experience",
  },
  {
    value: "74%",
    description: "of user will return to a mobile friendly website",
  },
  {
    value: "53%",
    description:
      "of users will abandon a page if it takes more than three seconds to load",
  },
];

export const problems: RowCellInterface[] = [
  {
    problem: "Administrative Burden",
    description: `The receptionist is usually only there until 3 p.m. which means
      nail technicians must serve customers and book appointments at
      the same time. The nail technicians are rushed to get back to
      their customers as quickly as possible, which results in minimal
      screening and booking customers for the wrong service.`,
  },
  {
    problem: "Human Error",
    description: `Since the booking system is manual, customers are sometimes
      booked in the wrong time slots; therefore, double booking
      happens more than it should.`,
  },
  {
    problem: "No shows and wait times",
    description: `Customers sometimes forget about their appointment, especially
      when they aren’t reminded. Also, with booking errors, it results
      in longer wait times, frustrating customers.`,
  },
  {
    problem: "Lack of services understanding",
    description: `Without a catalogue of services available, customers sometimes
      book the wrong service. Services have different timeframes to
      complete, so to accommodate the customers requests, it creates a
      backlog and increases wait times.`,
  },
];

export const userNeeds: RowCellInterface[] = [
  {
    problem: "Users want to book, rebook, or cancel digitally",
    description: `Customers under 45 prefer online booking for nail salons due to its convenience, flexibility, 
    and language barrier reduction. It allows them to book in advance, outside business hours, and establishes a 
    loyal relationship with a specific service provider.`,
  },
  {
    problem:
      "Users want automated reminders and booking integration to their Calendar",
    description: `Users are busy  and prefer automated SMS and email reminders rather than phone calls. 
    These reminders are quick, simple, and easily accessible. 
    Email integration is particularly useful as 
    it adds the appointment to their calendar, providing an additional reminder.`,
  },
  {
    problem:
      "Users want clear, easy, and simple means to view the nail salon’s services",
    description: `Customers want to easily view the range of services available, from classic manicures to fancy 
    nail art, and know what they're getting into before booking. This includes detailed descriptions, 
    prices, and an estimate of how long each service takes to complete.`,
  },
];

export const glamourNailsLearned: RowCellInterface[] = [
  {
    problem: `Design is iterative`,
    description: `Design is iterative: it is okay not having the final design right away. 
    Having a low-mid wireframe early on is a great way to flush out and test concept quickly.`,
  },
  {
    problem: `Color theory is not complicated`,
    description: `I read Steve Schoge book on refactoring UI to improve my UI skill. 
    It provided me the foundation to create a Colour system for my designs.`,
  },
  {
    problem: `Product design matters`,
    description: `Good product design can enhance user satisfaction and convey the message that a business 
    is committed to delivering quality services, which can build trust, differentiate it from competitors, and create a loyal customer base.`,
  },
  {
    problem: `Developing design on Weblfow, setting up square booking, and tracking results`,
    description: `I will  develop the webpage on Web flow, set up the square booking system, and provide 
    training to staff and owners. We'll measure progress to address business challenges outlined above such as reducing no shows, human error, and administrative burden.`,
  },
];

export const informations: InformationInterface[] = [
  {
    title: "Role",
    infos: ["UX Researcher", "UX Designer", "Prototyping", "User Testing"],
  },
  {
    title: "Client",
    infos: ["Glamour Nails & Salon"],
  },
  {
    title: "Duration",
    infos: ["January 2023 - March 2023"],
  },
];
