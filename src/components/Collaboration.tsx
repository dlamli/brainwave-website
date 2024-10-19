import { brainwaveSymbol, check } from "@/assets";
import { collabApps, collabContent, collabText } from "@/constants";
import { Button, LeftCurve, RightCurve, Section } from "@components/index";

export const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((collab) => (
              <li key={collab.id} className="mb-3 py-3">
                <div className="flex items-center gap-5">
                  <img
                    src={check}
                    className="size-6"
                    alt="Checkmark"
                    loading="lazy"
                  />
                  <h6 className="body-2">{collab.title}</h6>
                </div>
                {collab.text && (
                  <p className="body-2 mt-3 text-n-4">{collab.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-8">
          <p className="body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 m-auto aspect-square border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    className="size-12"
                    alt="Brainwave Logo"
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((collab, index) => (
                <li
                  key={collab.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex size-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={collab.width}
                      height={collab.height}
                      src={collab.icon}
                      alt={collab.title}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};
