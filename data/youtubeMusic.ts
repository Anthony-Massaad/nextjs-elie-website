import { InformationInterface, RowCellInterface } from "@/globals/interfaces";

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
