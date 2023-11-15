import filmfortressImg from "@/public/filmfortress.jpeg";
import fakefriendsImg from "@/public/fakefriends.jpeg";

export const projectsData = [
  {
    title: "FilmFortress",
    description: {
      en: "Movie database website where users can explore and discover information about movies in an attractive way, as well as write reviews, rate movies, and add them to their watchlist.",
      de: "Film-Datenbank-Website, auf der Benutzer Informationen über Filme auf attraktive Weise erkunden und entdecken können. Außerdem können sie Bewertungen schreiben, Filme bewerten und sie ihrer Watchlist hinzufügen.",
      es: "Base de datos de películas donde los usuarios pueden explorar y descubrir información sobre películas de una manera atractiva, así como escribir reseñas, calificar películas y agregarlas a su lista de películas por ver.",
    },
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
    description: {
      en: "FakeFriends was developed to help users get to know their friends better by asking personal questions and puzzles in an original way. Le Wagon Berlin Batch #1141 - Final Project.",
      de: "FakeFriends wurde entwickelt, um Benutzern dabei zu helfen, ihre Freunde besser kennenzulernen, indem sie auf originelle Weise persönliche Fragen und Rätsel stellen. Le Wagon Berlin Batch #1141 - Abschlussprojekt.",
      es: "FakeFriends fue desarrollado para ayudar a los usuarios a conocer mejor a sus amigos haciendo preguntas personales y rompecabezas de una manera original. Le Wagon Berlin Batch #1141 - Proyecto final.",
    },
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
  "html",
  "css",
  "sass",
  "tailwind",
  "bootstrap",
  "js",
  "ts",
  "react",
  "nextjs",
  "nodejs",
  "express",
  "redux",
  "ruby",
  "rails",
  "mongodb",
  "postgres",
  "git",
  "github",
  "vscode",
] as const;
