import {
  axios,
  bootstrap,
  css,
  express,
  figma,
  firebase,
  github,
  html,
  javascript,
  jwt,
  mongoDB,
  mui,
  netlify,
  nextjs,
  node,
  react,
  react_router,
  tailwind,
  tanStackQ,
  vercel,
} from "../../../components/Images";
import SectionTitle from "../../../components/SectionTitle";

import SkillsCard from "../../../components/SkillsCard";
const Skills = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="mt-10 md:mt-20 overflow-x-hidden overflow-y-hidden"
    >
      <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">
        <SectionTitle
          subTitle={"< My Skills />"}
          title={"These are the technologies I've worked with"}
        ></SectionTitle>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 px-2 md:my-10">
        <span
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <SkillsCard img={html} text={"HTML"}></SkillsCard>
        </span>
        <span
          data-aos="zoom-in-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <SkillsCard img={css} text={"CSS"}></SkillsCard>
        </span>
        <span
          data-aos="flip-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <SkillsCard img={tailwind} text={"tailwind"}></SkillsCard>
        </span>
        <span
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <SkillsCard img={bootstrap} text={"bootstrap"}></SkillsCard>
        </span>
        <span
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <SkillsCard img={javascript} text={"javascript"}></SkillsCard>
        </span>
        <span
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <SkillsCard img={react} text={"react"}></SkillsCard>
        </span>
        <span
          data-aos="zoom-in-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <SkillsCard img={node} text={"node js"}></SkillsCard>
        </span>
        <span
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <SkillsCard img={express} text={"express js"}></SkillsCard>
        </span>
        <span
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <SkillsCard img={mongoDB} text={"mongo DB"}></SkillsCard>
        </span>
        <span
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <SkillsCard img={firebase} text={"firebase"}></SkillsCard>
        </span>
        <span
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <SkillsCard img={jwt} text={"jwt"}></SkillsCard>
        </span>
        <span
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <SkillsCard img={axios} text={"axios"}></SkillsCard>
        </span>
        <span
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <SkillsCard img={react_router} text={"react router"}></SkillsCard>
        </span>
        <span
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <SkillsCard img={tanStackQ} text={"TanStack Query"}></SkillsCard>
        </span>
        <span
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <SkillsCard img={github} text={"github"}></SkillsCard>
        </span>
        <span
          data-aos="flip-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <SkillsCard img={figma} text={"figma"}></SkillsCard>
        </span>
        <span
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <SkillsCard img={vercel} text={"vercel"}></SkillsCard>
        </span>
        <span
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <SkillsCard img={nextjs} text={"nextjs"}></SkillsCard>
        </span>
        <span
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <SkillsCard img={netlify} text={"netlify"}></SkillsCard>
        </span>
        <span
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <SkillsCard img={mui} text={"Material UI"}></SkillsCard>
        </span>
      </div>
    </div>
  );
};

export default Skills;
