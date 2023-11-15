"use client";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import { useLanguage } from "@/context/language-context";

function Contact() {
  const { ref } = useSectionInView("Contact");
  const { language } = useLanguage();

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28 sm:scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>
        {language === "en" ? (
          <>Contact me</>
        ) : language === "de" ? (
          <>Kontakt</>
        ) : (
          <>Contacto</>
        )}
      </SectionHeading>
      <p className="-mt-6 text-gray-700 dark:text-gray-200">
        {language === "en" ? (
          <>
            Please contact me directly at{" "}
            <a className="underline" href="mailto:rojechi@gmail.com">
              rojechi@gmail.com
            </a>{" "}
            or through this form.
          </>
        ) : language === "de" ? (
          <>
            Bitte kontaktiere mich direkt unter{" "}
            <a className="underline" href="mailto:rojechi@gmail.com">
              rojechi@gmail.com
            </a>{" "}
            oder über dieses Formular.
          </>
        ) : (
          <>
            Puedes contactarme directamente en{" "}
            <a className="underline" href="mailto:rojechi@gmail.com">
              rojechi@gmail.com
            </a>{" "}
            o a través de este formulario.
          </>
        )}
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async formData => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully");
        }}
      >
        <input
          className="borderBlack h-14 rounded-lg px-4 transition-all focus:outline-none focus:ring focus:ring-blue-500 dark:text-gray-900"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={
            language === "en"
              ? "Your email"
              : language === "de"
              ? "Deine E-mail"
              : "Tu email"
          }
        />
        <textarea
          className="borderBlack my-3 h-52 rounded-lg p-4 transition-all focus:outline-none focus:ring focus:ring-blue-500 dark:text-gray-900"
          name="message"
          placeholder={
            language === "en"
              ? "Your message"
              : language === "de"
              ? "Deine Nachricht"
              : "Tu mensaje"
          }
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

export default Contact;
