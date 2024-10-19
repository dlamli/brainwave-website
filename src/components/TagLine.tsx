import { brackets } from "@/assets/svg";
import { TagLineProps } from "@/libs";

export const TagLine = ({ className, children }: TagLineProps) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};
