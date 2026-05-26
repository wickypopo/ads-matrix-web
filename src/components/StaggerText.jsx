import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function StaggerText(props) {
  const fullText = props.text.toString();
  const [visibleText, setVisibleText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setVisibleText("");
    setIsDone(false);

    const startDelay = props.delay ? props.delay * 1000 : 0;
    const speed = props.speed || 70;

    let interval;

    const timeout = setTimeout(() => {
      let index = 0;

      interval = setInterval(() => {
        setVisibleText(fullText.slice(0, index + 1));
        index++;

        if (index >= fullText.length) {
          clearInterval(interval);

          setTimeout(() => {
            setIsDone(true);
          }, props.cursorHideDelay || 500);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [fullText, props.delay, props.speed, props.cursorHideDelay]);

  return (
    <div className={`${props.containerClass} inline-block`}>
      <span>{visibleText}</span>

      <motion.span
        className="typewriter-cursor-block"
        animate={isDone ? { opacity: 0 } : { opacity: [1, 1, 0, 0, 1] }}
        transition={
          isDone
            ? {
                duration: 0.25,
                ease: "linear",
              }
            : {
                duration: 0.8,
                repeat: Infinity,
                ease: "linear",
              }
        }
      />
    </div>
  );
}
