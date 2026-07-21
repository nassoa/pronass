"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Variant = "up" | "left" | "scale";

interface Props {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
}

// Variantes d'animation correspondant aux classes .rv, .rv-left, .rv-scale du prototype
const variants = {
  up: { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -22 }, visible: { opacity: 1, x: 0 } },
  scale: {
    hidden: { opacity: 0, y: 18, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
};

export function ScrollReveal({
  children,
  variant = "up",
  delay = 0,
  className,
}: Props) {
  const ref = useRef(null);
  // Se déclenche quand 10% de l'élément est visible, avec marge négative en bas
  const inView = useInView(ref, {
    once: true,
    margin: "0px 0px -40px 0px",
    amount: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1], // --ease du prototype
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
