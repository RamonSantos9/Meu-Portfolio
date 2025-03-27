"use client";

import { useState } from "react";
import Image from "next/image";
import logoImage from "@/assets/images/logo.png";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Introdução", url: "#Introduction" },
  { label: "Recursos", url: "#Features" },
  { label: "Projetos", url: "#Projects" },
  { label: "Tecnologias", url: "#Integrations" },
  { label: "FAQs", url: "#Faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
        <div className="container max-w-5xl">
          <div className="border border-white/15 rounded-[27px] md:rounded-full bg-zinc-950/70 backdrop-blur">
            <div className="grid grid-cols-2 md:grid-cols-3 p-2 px-4 md:pr-2 items-center">
              <div className="w-8">
                <Image
                  src={logoImage}
                  alt="Ramon logo"
                  className="h-9 md:auto w-auto cursor-pointer"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                />
              </div>

              <div className="md:flex md:justify-center md:items-center hidden">
                <nav className="flex gap-6 font-medium">
                  {navLinks.map((link) => (
                    <a
                      href={link.url}
                      key={link.label}
                      onClick={(e) => {
                        e.preventDefault();
                        const section = document.querySelector(link.url);
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex justify-end gap-2 ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu md:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "rotate-45 -translate-y-1"
                    )}
                  ></line>
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={twMerge("transition", isOpen && "opacity-0")}
                  ></line>
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "-rotate-45 translate-y-1"
                    )}
                  ></line>
                </svg>
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                      <a
                        href={link.url}
                        key={link.label}
                        onClick={(e) => {
                          e.preventDefault();
                          const section = document.querySelector(link.url);
                          if (section) {
                            section.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <div className="pb-[86px] md:pb-[98px] lg:px-[130px]"></div>
    </>
  );
}
