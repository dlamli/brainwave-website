import { HeadingProps } from "@/libs";

export const Heading = ({ className, title }: HeadingProps) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {title && <h2 className="h2">{title}</h2>}
    </div>
  );
};
