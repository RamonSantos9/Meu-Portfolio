import { twMerge } from "tailwind-merge";
import { FaLocationArrow } from "react-icons/fa";

export default function ProjectCard(props: {
  title: string;
  description: string;
  description2: string;
  description2Link: string;
  icones: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  const {
    title,
    description,
    icones,
    children,
    className,
    description2,
    description2Link,
  } = props;
  return (
    <div
      className={twMerge(
        "bg-neutral-900 border border-white/10 p-8 rounded-3xl shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col",
        className
      )}
    >
      <div className="aspect-video overflow-hidden rounded-xl">{children}</div>
      <div className="mt-6">
        <h3 className="text-3xl font-semibold font-poppins text-lime-400">
          {title}
        </h3>
        <p className="text-lime-400/60 mt-2">{description}</p>
      </div>
      <div className="flex justify-between items-center mt-auto pt-8">
        <div className="flex flex-wrap gap-2">{icones}</div>
        <a
          href={description2Link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-lime-300 transition-colors"
        >
          {description2}
          <FaLocationArrow />
        </a>
      </div>
    </div>
  );
}
