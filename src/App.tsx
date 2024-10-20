import { ButtonGradient } from "@assets/svg";
import {
  Benefits,
  Collaboration,
  Header,
  Hero,
  Pricing,
  Roadmap,
  Services,
} from "@components/index";

export const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
      </div>
      <ButtonGradient />
    </>
  );
};
