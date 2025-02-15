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
        "bg-neutral-900 border border-white/10 p-6 rounded-3xl",
        className
      )}
    >
      <div className="aspect-video">{children}</div>
      <div>
        <h3 className="text-3xl font-medium mt-6 font-poppins">{title}</h3>
        <p className="text-white/50 mt-2">{description}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex flex-wrap gap-2">{icones}</div>
        <a
          href={description2Link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
        >
          {description2}
          <FaLocationArrow />
        </a>
      </div>
    </div>
  );
}
