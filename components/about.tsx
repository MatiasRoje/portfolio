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
      <p className="mb-3 text-justify sm:text-lg">
        {language === "en" ? (
          <>
            After many years in the service industry and with a background as a{" "}
            photographer, I transitioned into tech by completing a{" "}
            <span className="font-bold">
              Full-Stack Web Development Bootcamp
            </span>{" "}
            at <span className="font-bold">Le Wagon</span> in Berlin. My passion
            for problem-solving and finding creative solutions drives my
            dedication to this field. My core tech stack as a developer includes{" "}
            <span className="italic">JavaScript</span>,{" "}
            <span className="italic">TypeScript</span>,{" "}
            <span className="italic">React</span>,{" "}
            <span className="italic">Next.js</span>,{" "}
            <span className="italic">Node.js</span>, and{" "}
            <span className="italic">MongoDB</span>, with additional experience
            in <span className="italic">Ruby</span> and{" "}
            <span className="italic">Ruby on Rails</span>.
          </>
        ) : language === "de" ? (
          <>
            Nach vielen Jahren im Kundenservice und mit einem Background als{" "}
            Fotograf habe ich den Übergang in die Tech-Welt durch den Abschluss
            eines{" "}
            <span className="font-bold">
              Full-Stack Web Development Bootcamps
            </span>{" "}
            bei <span className="font-bold">Le Wagon</span> in Berlin vollzogen.
            Meine Leidenschaft für Problemlösung und das Finden kreativer
            Lösungen treibt mein Engagement in diesem Bereich an. Mein
            Haupt-Tech-Stack als Entwickler umfasst{" "}
            <span className="italic">JavaScript</span>,{" "}
            <span className="italic">TypeScript</span>,{" "}
            <span className="italic">React</span>,{" "}
            <span className="italic">Next.js</span>,{" "}
            <span className="italic">Node.js</span> und{" "}
            <span className="italic">MongoDB</span>, mit zusätzlicher Erfahrung
            in <span className="italic">Ruby</span> und{" "}
            <span className="italic">Ruby on Rails</span>.
          </>
        ) : (
          <>
            Después de muchos años en la industria de servicios y con
            experiencia como fotógrafo, he hecho una transición al mundo de la
            tecnología al completar un{" "}
            <span className="font-bold">
              Bootcamp de Desarrollo Web Full-Stack
            </span>{" "}
            en <span className="font-bold">Le Wagon</span> en Berlín. Mi pasión
            por la resolución de problemas y la búsqueda de soluciones creativas
            impulsa mi dedicación a este campo. Mi stack tecnológico principal
            como desarrollador incluye{" "}
            <span className="italic">JavaScript</span>,{" "}
            <span className="italic">TypeScript</span>,{" "}
            <span className="italic">React</span>,{" "}
            <span className="italic">Next.js</span>,{" "}
            <span className="italic">Node.js</span> y{" "}
            <span className="italic">MongoDB</span>, con experiencia adicional
            en <span className="italic">Ruby</span> y{" "}
            <span className="italic">Ruby on Rails</span>.
          </>
        )}
      </p>

      <p className="mb-3 text-justify sm:text-lg">
        {language === "en" ? (
          <>
            <span className="font-bold">
              I worked as a Full-Stack Developer
            </span>{" "}
            at Emoree, a start-up in Berlin, where I gained hands-on experience
            until the company unfortunately went bankrupt. Since then, I
            completed a second bootcamp in{" "}
            <span className="font-bold">DevOps</span> with{" "}
            <span className="font-bold">Datascientest</span>, certified by{" "}
            <span className="font-bold">Panthéon-Sorbonne University</span>.
            This program deepened my expertise in{" "}
            <span className="italic">AWS</span>,{" "}
            <span className="italic">Infrastructure as Code (IaC)</span>,{" "}
            <span className="italic">CI/CD pipelines</span>,{" "}
            <span className="italic">Kubernetes</span>,{" "}
            <span className="italic">Docker</span>, and{" "}
            <span className="italic">Terraform</span> and many other tools.
          </>
        ) : language === "de" ? (
          <>
            <span className="font-bold">
              Ich arbeitete als Full-Stack Developer
            </span>{" "}
            bei Emoree, einem Start-up in Berlin, wo ich praktische Erfahrungen
            gesammelt habe, bis das Unternehmen leider in die Insolvenz ging.
            Seitdem habe ich ein zweites Bootcamp in{" "}
            <span className="font-bold">DevOps</span> bei{" "}
            <span className="font-bold">Datascientest</span> absolviert,
            zertifiziert von der{" "}
            <span className="font-bold">Panthéon-Sorbonne Universität</span>.
            Dieses Programm hat meine Expertise in{" "}
            <span className="italic">AWS</span>,{" "}
            <span className="italic">Infrastructure as Code (IaC)</span>,{" "}
            <span className="italic">CI/CD-Pipelines</span>,{" "}
            <span className="italic">Kubernetes</span>,{" "}
            <span className="italic">Docker</span> und{" "}
            <span className="italic">Terraform</span> sowie vielen anderen Tools
            vertieft.
          </>
        ) : (
          <>
            <span className="font-bold">Trabajé como Full-Stack Developer</span>{" "}
            en Emoree, una start-up en Berlín, donde he adquirido experiencia
            práctica hasta que la empresa lamentablemente se declaró en
            bancarrota. Desde entonces, he completado un segundo bootcamp en{" "}
            <span className="font-bold">DevOps</span> con{" "}
            <span className="font-bold">Datascientest</span>, certificado por la{" "}
            <span className="font-bold">Universidad Panthéon-Sorbonne</span>.
            Este programa profundizó mi experiencia en{" "}
            <span className="italic">AWS</span>,{" "}
            <span className="italic">Infrastructure as Code (IaC)</span>,{" "}
            <span className="italic">pipelines de CI/CD</span>,{" "}
            <span className="italic">Kubernetes</span>,{" "}
            <span className="italic">Docker</span> y{" "}
            <span className="italic">Terraform</span> entre muchas otras
            herramientas.
          </>
        )}
      </p>

      <p className="mb-3 text-justify sm:text-lg">
        {language === "en" ? (
          <>
            I&apos;m now seeking a{" "}
            <span className="font-bold">full-time position</span> as a{" "}
            <span className="font-bold">DevOps Engineer</span> or{" "}
            <span className="font-bold">Software Developer</span> , eager to
            apply my skills and continue learning in a dynamic team.
          </>
        ) : language === "de" ? (
          <>
            Ich suche nun eine <span className="font-bold">Vollzeitstelle</span>{" "}
            als <span className="font-bold">DevOps Engineer</span> oder{" "}
            <span className="font-bold">Software Developer</span> und freue mich
            darauf, meine Fähigkeiten einzusetzen und in einem dynamischen Team
            weiterzulernen.
          </>
        ) : (
          <>
            Ahora estoy buscando una{" "}
            <span className="font-bold">posición a tiempo completo</span> como{" "}
            <span className="font-bold">DevOps Engineer</span> o{" "}
            <span className="font-bold">Desarrollador de Software</span>, con
            ganas de aplicar mis habilidades y seguir aprendiendo en un equipo
            dinámico.
          </>
        )}
      </p>

      <p className="text-justify sm:text-lg">
        {language === "en" ? (
          <>
            Outside of work, I enjoy going to the gym, reading, traveling, and
            staying active with water sports. I value socializing with friends
            and maintaining a balance between mental challenges and physical
            well-being. I&apos;m also passionate about learning languages and
            exploring different cultures.
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
