"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div>
            <Image
              src="/portrait.jpg"
              alt="Matías portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full object-cover object-top border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <span className="absolute bottom-2 right-2 text-4xl">👋🏼</span>
        </div>
      </div>
    </section>
  );
}

export default Intro;
