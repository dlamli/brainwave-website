import { socials } from "@/constants";
import { Section } from "@components/index";

export const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.iconUrl}
              className="flex items-center justify-center size-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
              target="_blank"
            >
              <img
                src={social.iconUrl}
                width={16}
                height={16}
                alt={social.title}
              />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};
