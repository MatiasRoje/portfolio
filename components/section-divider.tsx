"use client";

import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="my-24 hidden h-16 w-1 text-gray-400/40 sm:flex sm:items-center sm:justify-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <FontAwesomeIcon icon={faAnglesDown} style={{ fontSize: 30 }} />
    </motion.div>
  );
}
