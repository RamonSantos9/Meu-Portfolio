import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva(
  "border border-[#9EA3BF] h-10 rounded-full px-4 font-medium",
  {
    variants: {
      variant: {
        primary:
          "bg-lime-400 text-neutral-950 border-line-400 border-[#9EA3BF]",
        secondary: "text-white bg-zinc-950 border-[#9EA3BF]",
        tertiary: "text-white bg-zinc-950 rounded-[17px] border-[#9EA3BF]",
      },
      size: {
        sm: "h-10 px-4",
      },
    },
  }
);

export default function Button(
  props: {
    variant: "primary" | "secondary" | "tertiary";
    size?: "sm";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { variant, className, size, ...otherProps } = props;
  return (
    <button
      className={classes({
        variant,
        size,
        className,
      })}
      {...otherProps}
    />
  );
}
