import React from "react";
import {motion} from "framer-motion";

export const Fade = ({
  children,
  bottom,
  top,
  left,
  right,
  duration = 500,
  distance = "20px",
  fraction = 0.05,
  delay = 0,
  className,
  style,
  ...props
}) => {
  const distNum =
    typeof distance === "string" ? parseInt(distance, 10) || 20 : distance || 20;

  let initialX = 0;
  let initialY = 0;

  if (bottom) initialY = distNum;
  else if (top) initialY = -distNum;

  if (left) initialX = -distNum;
  else if (right) initialX = distNum;

  return (
    <motion.div
      initial={{opacity: 0, x: initialX, y: initialY}}
      whileInView={{opacity: 1, x: 0, y: 0}}
      viewport={{once: true, amount: fraction}}
      transition={{
        duration: (duration || 500) / 1000,
        delay: (delay || 0) / 1000,
        ease: "easeOut"
      }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const Slide = ({
  children,
  left,
  right,
  top,
  bottom,
  duration = 1000,
  fraction = 0.05,
  delay = 0,
  className,
  style,
  ...props
}) => {
  let initialX = 0;
  let initialY = 0;

  if (left) initialX = -80;
  else if (right) initialX = 80;

  if (top) initialY = -80;
  else if (bottom) initialY = 80;

  return (
    <motion.div
      initial={{opacity: 0, x: initialX, y: initialY}}
      whileInView={{opacity: 1, x: 0, y: 0}}
      viewport={{once: true, amount: fraction}}
      transition={{
        duration: (duration || 1000) / 1000,
        delay: (delay || 0) / 1000,
        ease: "easeOut"
      }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default {Fade, Slide};
