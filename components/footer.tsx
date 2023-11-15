import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterUserSection from "./footer-user-section";

function Footer() {
  return (
    <footer className="flex w-full flex-col items-center bg-gray-900 px-4 py-16 dark:bg-gray-50">
      <div className="flex w-full max-w-[50rem] flex-col items-center justify-between gap-2 text-gray-50 dark:text-gray-900 sm:flex-row">
        <FooterUserSection />
        <div className="flex">
          {" "}
          <a
            className="flex cursor-pointer items-center gap-2 rounded-lg p-4 outline-none transition hover:scale-[1.15] hover:text-white focus:scale-[1.15] active:scale-105 dark:hover:text-gray-950"
            href="https://www.linkedin.com/in/mat%C3%ADas-roje-carrasco-2a2673273/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 26 }} />
          </a>
          <a
            className="flex cursor-pointer items-center gap-2 rounded-lg p-4 outline-none transition hover:scale-[1.15] hover:text-white focus:scale-[1.15] active:scale-105 dark:hover:text-gray-950"
            href="https://github.com/MatiasRoje"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: 26 }} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
