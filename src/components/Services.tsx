import { Generating, Heading, Section } from "@components/index";
import { check, service1, service2, service3 } from "@/assets";
import { brainwaveServices, brainwaveServicesIcons } from "@/constants";
import {
  Gradient,
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "@components/design";

export const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications."
        />
        <div className="relative">
          <div className="relative z-1 flex items-center justify-center md:justify-end h-[39rem] mb-5 p-8 border border-n-1/10 rounded-2xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                src={service1}
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                alt="Smartest AI Service Background"
              />
            </div>
            <div className="relative z-1 max-w-[17rem]">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-12 text-n-3">
                Brainwave unlocks the potential of AI-powered applications.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-4 p-4 border-t border-n-6"
                  >
                    <img
                      src={check}
                      alt="Checkmark Service"
                      className="size-6"
                    />
                    <p>{service}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2 lg:w-1/2" />
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="w-full h-full object-cover"
                  width={630}
                  height={750}
                  alt="Robot Service Background"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/10 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photo Editing</h4>
                <p className="body-2 mb-12 text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div>
              <PhotoChatMessage />
            </div>
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video Generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The world&apos;s most powerful AI photo and video art
                  generation engine. What will you create?
                </p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((serviceIcon, index) => (
                    <li
                      key={serviceIcon}
                      className={`flex items-center justify-center rounded-2xl ${
                        index === 2
                          ? "size-[3rem] p-0.25 bg-conic-gradient rounded-2xl md:size-[4.5rem]"
                          : "flex siiize-10 bg-n-6 md:size-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex justify-center items-center size-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img
                          src={serviceIcon}
                          className="size-6"
                          alt="Video Icon"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="size-full object-cover"
                  width={520}
                  height={400}
                  alt="Robot Video Background"
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};
