import filmfortressImg from "@/public/filmfortress.jpeg";
import fakefriendsImg from "@/public/fakefriends.jpeg";

export const projectsData = [
  {
    title: "FilmFortress",
    description:
      "Movie database website where users can explore and discover information about movies in an attractive way, as well as write reviews, rate movies, and add them to their watchlist.",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "MongoDB",
      "Tailwind",
      "React Query",
      "Next Auth",
    ],
    imageUrl: filmfortressImg,
  },
  {
    title: "FakeFriends",
    description:
      "FakeFriends was developed to help users get to know their friends better by asking personal questions and puzzles in an original way. Le Wagon Berlin Batch #1141 - Final Project",
    tags: ["Ruby on Rails", "HTML", "SASS", "Stimulus", "PostgreSQL", "Redis"],
    imageUrl: fakefriendsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
