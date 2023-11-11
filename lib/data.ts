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
    githubUrl: "https://github.com/MatiasRoje/FilmFortress2.0",
    liveUrl: "https://filmfortress.netlify.app/",
  },
  {
    title: "FakeFriends",
    description:
      "FakeFriends was developed to help users get to know their friends better by asking personal questions and puzzles in an original way. Le Wagon Berlin Batch #1141 - Final Project.",
    tags: [
      "Ruby on Rails",
      "HTML",
      "SASS",
      "Stimulus",
      "PostgreSQL",
      "Redis",
      "Animate.css",
    ],
    imageUrl: fakefriendsImg,
    githubUrl: "https://github.com/MatiasRoje/FakeFriends-MR",
    liveUrl: "https://fakefriends.onrender.com/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Sass",
  "Tailwind",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Redux",
  "Ruby",
  "Ruby on Rails",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "GitHub",
  "VSCode",
] as const;
