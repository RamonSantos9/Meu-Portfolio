import Tag from "@/components/Tag";
import figmaIcon from "@/assets/images/figma-logo.png";
import reactIcon from "@/assets/images/react-logo.png";
import nextIcon from "@/assets/images/next-logo.png";
import typescriptIcon from "@/assets/images/typescript-logo.png";
import javascriptIcon from "@/assets/images/javascript-logo.png";
import tailwindIcon from "@/assets/images/tailwind-logo.png";
import javaIcon from "@/assets/images/java-logo.png";
import netbeansIcon from "@/assets/images/netbeans-logo.png";
import springIcon from "@/assets/images/spring-logo.png";
import mysqlIcon from "@/assets/images/mysql-logo.png";
import nodejsIcon from "@/assets/images/nodejs-logo.png";
import dockerIcon from "@/assets/images/docker-logo.png";
import IntegrationColumn from "@/components/IntegrationsColumn";

const integrations = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Plataforma para design e protótipos colaborativos.",
  },
  {
    name: "React",
    icon: reactIcon,
    description: "Biblioteca para criar interfaces dinâmicas.",
  },
  {
    name: "Next.js",
    icon: nextIcon,
    description: "Framework React para aplicações modernas.",
  },
  {
    name: "TypeScript",
    icon: typescriptIcon,
    description: "Extensão do JavaScript com tipagem estática.",
  },
  {
    name: "JavaScript",
    icon: javascriptIcon,
    description: "Linguagem essencial para o desenvolvimento web.",
  },
  {
    name: "Tailwind CSS",
    icon: tailwindIcon,
    description: "Framework para estilização rápida e consistente.",
  },
];

const backend = [
  {
    name: "Java",
    icon: javaIcon,
    description: "Linguagem poderosa para back-end.",
  },
  {
    name: "NetBeans",
    icon: netbeansIcon,
    description: "IDE para desenvolvimento em Java e outras linguagens.",
  },
  {
    name: "Spring",
    icon: springIcon,
    description: "Framework Java para aplicações empresariais e back-end.",
  },
  {
    name: "MySQL",
    icon: mysqlIcon,
    description: "Sistema de gerenciamento de banco de dados relacional.",
  },
  {
    name: "Node.js",
    icon: nodejsIcon,
    description: "Ambiente de execução JavaScript para servidores.",
  },
  {
    name: "Docker",
    icon: dockerIcon,
    description: "Plataforma para automação de deployment e containers.",
  },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
  return (
    <section id="Integrations" className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <Tag>Front-end</Tag>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-medium mt-6">
              Minhas Habilidades Técnicas{" "}
              <span className="text-lime-400">em Fron-end</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              Para criar essa aplicação, usamos tecnologias como
            </p>
          </div>
          <div>
            <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 grid md:grid-cols-2 gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <IntegrationColumn integrations={integrations} />
              <IntegrationColumn
                integrations={integrations.slice().reverse()}
                reverse
                className="hidden md:flex"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-24 overflow-hidden">
        <div className="container mt-10">
          <div className="grid lg:grid-cols-2 items-center lg:gap-16">
            <div>
              <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 grid md:grid-cols-2 gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                <IntegrationColumn integrations={backend} />
                <IntegrationColumn
                  integrations={backend.slice().reverse()}
                  reverse
                  className="hidden md:flex"
                />
              </div>
            </div>
            <div className="text-right">
              <Tag>Back-end</Tag>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-medium mt-6">
                Minhas Habilidades Técnicas{" "}
                <span className="text-lime-400">em Back-end</span>
              </h2>
              <p className="text-white/50 mt-4 text-lg">
                Para criar essa aplicação, usamos tecnologias como
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
