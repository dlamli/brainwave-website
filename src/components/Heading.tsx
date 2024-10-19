import { HeadingProps } from "@/libs";

export const Heading = ({ className, title, text }: HeadingProps) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{title}</p>}
    </div>
  );
};
