import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="flex w-full flex-col items-center bg-black/[0.85] px-4 py-16">
      <div className="flex w-full max-w-[50rem] flex-col items-center justify-between gap-2 text-gray-50 sm:flex-row">
        <p className="font-semibold sm:text-base">
          © 2023 by{" "}
          <a
            href="https://github.com/MatiasRoje"
            target="_blank"
            className="hover:underline"
          >
            Matías Roje
          </a>
          . All rights reserved.
        </p>
        <div className="flex">
          {" "}
          <a
            className="flex cursor-pointer items-center gap-2 rounded-lg p-4 outline-none transition hover:scale-[1.15] hover:text-white focus:scale-[1.15] active:scale-105"
            href="https://www.linkedin.com/in/mat%C3%ADas-roje-carrasco-2a2673273/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 26 }} />
          </a>
          <a
            className="flex cursor-pointer items-center gap-2 rounded-lg p-4 outline-none transition hover:scale-[1.15] hover:text-white focus:scale-[1.15] active:scale-105"
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
