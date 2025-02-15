"use client";

import Tag from "@/components/Tag";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "Qual é o processo para criar meu logo/site?",
    answer:
      "Começamos entendendo sua visão, seguidos por conceitos de design, feedback e a implementação final. Você estará envolvido em cada etapa do processo.",
  },
  {
    question: "Quanto tempo leva para completar um logo/site?",
    answer:
      "O cronograma varia dependendo da complexidade do seu projeto, mas tipicamente um logotipo pode levar de 1 a 2 semanas e um site cerca de 4 a 6 semanas.",
  },
  {
    question: "Posso solicitar alterações após a conclusão do design?",
    answer:
      "Sim, oferecemos revisões durante a fase de design para garantir que você esteja totalmente satisfeito com o resultado.",
  },
  {
    question: "Você oferece suporte contínuo após o lançamento do meu site?",
    answer:
      "Sim, oferecemos pacotes de manutenção e suporte para garantir que seu site permaneça atualizado e funcione sem problemas.",
  },
  {
    question: "O que eu preciso fornecer para começar?",
    answer:
      "Precisaremos de detalhes sobre sua marca, estilo preferido e qualquer conteúdo que você deseja incluir (por exemplo, texto, imagens, logotipo).",
  },
  {
    question: "Quais ferramentas e tecnologias você usa para construir sites?",
    answer:
      "Usamos o Visual Studio como nosso IDE e construímos sites com React.js, Next.js, Tailwind CSS e outras tecnologias modernas. Para design, trabalhamos com Photoshop e Figma para criar experiências impressionantes e de fácil utilização.",
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectIndex] = useState(0);
  return (
    <section id="Faqs" className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Perguntas Frequentes</Tag>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins text-center font-medium max-w-xl mt-6 mx-auto">
          Tem alguma dúvida ?{" "}
          <span className="text-lime-400">Eu Tenho as respostas</span>
        </h2>
        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              className="bg-neutral-900 rounded-2xl border border-white/10 p-6"
            >
              <div
                className="flex justify-between items-center"
                onClick={() => setSelectIndex(faqIndex)}
              >
                <h3 className="font-medium font-poppins">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={twMerge(
                    "feather feather-plus text-lime-400 flex-shrink-0 transition duration-300",
                    selectedIndex === faqIndex && "rotate-45"
                  )}
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{
                      height: 0,
                      marginTop: 0,
                    }}
                    animate={{
                      height: "auto",
                      marginTop: 24,
                    }}
                    exit={{
                      height: 0,
                      marginTop: 0,
                    }}
                    className={twMerge("overflow-hidden")}
                  >
                    <p className="text-white/50">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
