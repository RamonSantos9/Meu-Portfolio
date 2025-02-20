import Tag from "@/components/Tag";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import exemplo from "@/assets/images/embreve.png";
import preview from "@/assets/images/preview.png";
import reactIcon from "@/assets/images/react-logo.png";
import tailwindIcon from "@/assets/images/tailwind-logo.png";
import typescriptIcon from "@/assets/images/typescript-logo.png";

export default function Projects() {
  return (
    <section id="Projects" className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Projetos</Tag>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins text-center font-medium mt-10">
          Alguns dos meus{" "}
          <span className="text-lime-400">projetos criativos.</span>
        </h2>
        <div className="mt-12 max-w-7xl mx-auto grid grid-cols-[repeat(auto-fit,minmax(300px,auto))] justify-items-center gap-8">
          <ProjectCard
            title="Rage-Template"
            description="Um template moderno criado para facilitar a construção de interfaces responsivas e escaláveis. Desenvolvido com TypeScript, Next.js e Tailwind CSS, é a base perfeita para projetos de estudo e experimentação."
            description2="Ver Projeto"
            description2Link="https://rage-template.vercel.app"
            className="md:col-span-2 lg:col-span-1 group"
            icones={
              <>
                <div className="flex items-left gap-2">
                  <Image src={reactIcon} alt="React" className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={tailwindIcon}
                    alt="Tailwind CSS"
                    className="w-6 h-6"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={typescriptIcon}
                    alt="TypeScript"
                    className="w-6 h-6"
                  />
                </div>
              </>
            }
          >
            <div className="aspect-video flex items-center justify-center">
              <Image
                src={preview}
                alt="Progresso ao Vivo"
                className="object-cover group-hover:scale-110 rounded-xl transition duration-300"
              />
            </div>
          </ProjectCard>
          <ProjectCard
            title="Projetos em Breve"
            description="Estou em processo de criação de projetos incríveis. Em breve, você poderá conferir as soluções e experiências inovadoras que estou preparando."
            description2="Ver Projeto"
            description2Link=""
            className="md:col-span-2 lg:col-span-1 group"
            icones={
              <>
                <div className="flex items-left gap-2">
                  <Image src={reactIcon} alt="React" className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={tailwindIcon}
                    alt="Tailwind CSS"
                    className="w-6 h-6"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={typescriptIcon}
                    alt="TypeScript"
                    className="w-6 h-6"
                  />
                </div>
              </>
            }
          >
            <div className="aspect-video flex items-center justify-center">
              <Image
                src={exemplo}
                alt="Progresso ao Vivo"
                className="object-cover group-hover:scale-110 rounded-xl transition duration-300"
              />
            </div>
          </ProjectCard>
        </div>
      </div>
    </section>
  );
}
