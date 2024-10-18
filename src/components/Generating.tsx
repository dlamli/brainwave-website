import { loading } from "@/assets";
import { GeneratingProps } from "@/libs";

export const Generating = ({ className }: GeneratingProps) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="size-5 mr-4" src={loading} alt="Loading" />
      AI is generating
    </div>
  );
};
