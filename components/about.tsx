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
            <span className="font-bold">Ruby on Rails</span>. A dedicated
            learner, I stay current with industry trends through participation
            in conferences, online courses, and hands-on experimentation with
            emerging technologies. This commitment reflects in my ability to
            craft functional, visually appealing, and user-friendly designs. In
            addition to my skill set, I have extensively delved into{" "}
            <span className="font-bold">Test-Driven Development</span> (TDD)
            using technologies like Jest. Currently, I am expanding my horizons
            by venturing into the realms of Data Science and Artificial
            Intelligence through <span className="font-bold">Python</span> and{" "}
            <span className="font-bold">Machine Learning</span>.
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
            <span className="font-bold">Ruby on Rails</span>. Als engagierter
            Lernender halte ich mich durch die Teilnahme an Konferenzen,
            Online-Kurse und praktische Experimente mit aufkommenden
            Technologien über die neuesten Branchentrends auf dem Laufenden.
            Dieses Engagement spiegelt sich in meiner Fähigkeit wider,
            funktionale, visuell ansprechende und benutzerfreundliche Designs zu
            erstellen. Zusätzlich zu meinen Fähigkeiten habe ich mich intensiv
            mit <span className="font-bold">Test-Driven Development</span> (TDD)
            unter Verwendung von Technologien wie Jest auseinandergesetzt.
            Derzeit erweitere ich meinen Horizont, indem ich mich in die
            Bereiche Data Science und Artificial Intelligence mit{" "}
            <span className="font-bold">Python</span> und{" "}
            <span className="font-bold">Machine Learning</span> wage.
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
            <span className="font-bold">Ruby on Rails</span>. Como aprendiz
            dedicado, me mantengo al día con las tendencias de la industria
            mediante la participación en conferencias, cursos en línea y
            experimentación práctica con tecnologías emergentes. Este compromiso
            se refleja en mi capacidad para crear diseños funcionales,
            visualmente atractivos y fáciles de usar. Además de mis habilidades,
            me he sumergido extensamente en el{" "}
            <span className="font-bold">Desarrollo Guiado por Pruebas</span>{" "}
            (TDD) utilizando tecnologías como Jest. Actualmente, estoy ampliando
            mis horizontes adentrándome en los campos de la Ciencia de Datos e
            Inteligencia Artificial a través de{" "}
            <span className="font-bold">Python</span> y{" "}
            <span className="font-bold">Machine Learning</span>.
          </>
        )}
      </p>

      <p className="mb-3 text-justify">
        {language === "en" ? (
          <>
            I am now actively seeking a{" "}
            <span className="font-bold">full-time position</span> as a software
            developer, eager to contribute my diverse skill set and unwavering
            enthusiasm to a dynamic and innovative team.
          </>
        ) : language === "de" ? (
          <>
            Ich suche aktiv eine{" "}
            <span className="font-bold">Vollzeitposition</span> als
            Softwareentwickler und freue mich darauf, mein vielfältiges
            Fähigkeitenportfolio und meine unerschütterliche Begeisterung in ein
            dynamisches und innovatives Team einzubringen.
          </>
        ) : (
          <>
            Actualmente estoy buscando activamente una{" "}
            <span className="font-bold">posición a tiempo completo</span> como
            desarrollador de software, ilusionado por contribuir con mi conjunto
            diverso de habilidades y entusiasmo inquebrantable a un equipo
            dinámico e innovador.
          </>
        )}
      </p>

      <p className="text-justify">
        {language === "en" ? (
          <>
            When I&apos;m not coding, I enjoy going to the gym, reading, diving
            into various water sports and traveling. Socializing with friends
            and maintaining a fitness lifestyle are very important to me,
            fostering a harmonious blend of mental challenges and physical
            well-being. Beyond that, my love for learning extends to a passion
            for languages and exploring diverse cultures.
          </>
        ) : language === "de" ? (
          <>
            Wenn ich nicht am Programmieren bin, genieße ich es, ins
            Fitnessstudio zu gehen, zu lesen, mich in verschiedene
            Wassersportarten zu vertiefen und zu reisen. Das Sozialisieren mit
            Freunden und die Aufrechterhaltung eines gesunden Lebensstils sind
            mir sehr wichtig und schaffen eine harmonische Mischung aus mentalen
            Herausforderungen und körperlichem Wohlbefinden. Darüber hinaus
            erstreckt sich meine Liebe zum Lernen auf eine Leidenschaft für
            Sprachen und das Erkunden verschiedener Kulturen.
          </>
        ) : (
          <>
            Cuando no estoy programando, disfruto yendo al gimnasio, leyendo,
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
