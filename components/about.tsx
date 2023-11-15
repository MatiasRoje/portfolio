"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";

export function About() {
  const { ref } = useSectionInView("About");
  const { language } = useLanguage();

  return (
    <motion.section
      ref={ref}
      className="mb-14 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>
        {language === "en" ? (
          <>About me</>
        ) : language === "de" ? (
          <>Über mich</>
        ) : (
          <>Sobre mí</>
        )}
      </SectionHeading>
      <p className="mb-3 text-justify">
        {language === "en" ? (
          <>
            After many years in the service industry and a background as a
            photographer, I embarked on a transformative journey into
            programming, completing a{" "}
            <span className="font-bold">Full-Stack Web Development </span>
            bootcamp at Le Wagon in Berlin. I&apos;m passionate about
            problem-solving, and the excitement of finding solutions drives my
            commitment to this field. My core tech stack includes{" "}
            <span className="font-bold">
              React, Next.js, TypeScript, Node.js
            </span>{" "}
            and <span className="font-bold">MongoDB</span>, with additional
            proficiency in <span className="font-bold">Ruby</span> and{" "}
            <span className="font-bold">Ruby on Rails</span>. Keeping abreast of
            industry trends through conferences, online courses, and
            experimentation with emerging technologies, I craft functional,
            visually appealing and user-friendly designs. I&apos;am on the
            lookout for a <span className="font-bold">full-time position </span>
            as a software developer.
          </>
        ) : language === "de" ? (
          <>
            Nach vielen Jahren in der Dienstleistungsbranche und einer
            Hintergrundgeschichte als Fotograf habe ich mich auf eine
            transformative Reise in die Programmierung begeben und erfolgreich
            an einem{" "}
            <span className="font-bold">Full-Stack Webentwicklungs</span>
            -Bootcamp bei Le Wagon in Berlin teilgenommen. Ich bin
            leidenschaftlich daran interessiert, Probleme zu lösen, und die
            Aufregung, Lösungen zu finden, treibt mein Engagement für dieses
            Feld an. Mein Kern-Technologie-Stack umfasst{" "}
            <span className="font-bold">
              React, Next.js, TypeScript, Node.js
            </span>{" "}
            und <span className="font-bold">MongoDB</span>, mit zusätzlicher
            Kompetenz in <span className="font-bold">Ruby</span> und{" "}
            <span className="font-bold">Ruby on Rails</span>. Durch die
            Teilnahme an Konferenzen, Online-Kursen und Experimente mit
            aufkommenden Technologien halte ich mich über Branchentrends auf dem
            Laufenden und entwerfe funktionale, visuell ansprechende und
            benutzerfreundliche Designs. Ich bin auf der Suche nach einer{" "}
            <span className="font-bold">Vollzeit-Position </span>als
            Softwareentwickler.
          </>
        ) : (
          <>
            Después de muchos años en la industria de servicios y con
            experiencia como fotógrafo, he emprendido un cambio de rumbo laboral
            orientado hacia la programación, completando un bootcamp de{" "}
            <span className="font-bold">Desarrollo Web Full-Stack</span> en Le
            Wagon en Berlín. Me apasiona la resolución de problemas, y la
            emoción de encontrar soluciones impulsa mi compromiso con este
            campo. Mi Tech Stack principal incluye{" "}
            <span className="font-bold">
              React, Next.js, TypeScript, Node.js
            </span>{" "}
            y <span className="font-bold">MongoDB</span>, con experiencia
            adicional en <span className="font-bold">Ruby</span> y{" "}
            <span className="font-bold">Ruby on Rails</span>. Manteniéndome al
            tanto de las tendencias de la industria a través de conferencias,
            cursos en línea y experimentación con tecnologías emergentes, diseño
            soluciones funcionales, visualmente atractivas y amigables para el
            usuario. Estoy en la búsqueda de una{" "}
            <span className="font-bold">posición a tiempo completo </span>como
            desarrollador de software.
          </>
        )}
      </p>

      <p className="text-justify">
        {language === "en" ? (
          <>
            When I&apos;m not coding, I enjoy playing chess, diving into various
            water sports and traveling. Socializing with friends and maintaining
            a fitness lifestyle are very important to me, fostering a harmonious
            blend of mental challenges and physical well-being. Beyond that, my
            love for learning extends to a passion for languages and exploring
            diverse cultures.
          </>
        ) : language === "de" ? (
          <>
            Wenn ich nicht programmiere, genieße ich es, Schach zu spielen, mich
            in verschiedene Wassersportarten zu vertiefen und zu reisen. Das
            Sozialisieren mit Freunden und die Pflege eines gesunden Lebensstils
            sind mir sehr wichtig, um eine harmonische Mischung aus geistigen
            Herausforderungen und körperlichem Wohlbefinden zu fördern. Darüber
            hinaus erstreckt sich meine Liebe zum Lernen auf eine Leidenschaft
            für Sprachen und die Erkundung verschiedener Kulturen.
          </>
        ) : (
          <>
            Cuando no estoy programando, disfruto jugando al ajedrez,
            sumergiéndome en varios deportes acuáticos y viajando. Socializar
            con amigos y mantener un estilo de vida activo son muy importantes
            para mí, fomentando una armoniosa combinación de desafíos mentales y
            bienestar físico. Además, mi amor por el aprendizaje se extiende a
            una pasión por los idiomas y explorar diversas culturas.
          </>
        )}
      </p>
    </motion.section>
  );
}

export default About;
