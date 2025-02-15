"use client";

import Tag from "@/components/Tag";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text =
  "especializado em criar experiências digitais completas e de alto impacto, com design moderno e desempenho impecável.";
const words = text.split(" ");

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(Math.floor(latest));
    });
  }, [wordIndex]);

  return (
    <section id="Introduction" className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-20 md:top-28 lg:top-40 ">
          <div className="flex justify-center">
            <Tag>Introdução</Tag>
          </div>
          <div className="text-4xl md:text-5xl lg:text-6xl font-poppins text-center font-medium mt-10">
            <span>Olá! Sou desenvolvedor front-end e back-end,</span>{" "}
            <span className="">
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge(
                    "transition duration-500 text-white/15",
                    wordIndex < currentWord && "text-white"
                  )}
                >
                  {`${word} `}
                </span>
              ))}
            </span>
            <span className="text-lime-400 block">
              Transforme suas ideias em sites e sistemas exclusivos.
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}
