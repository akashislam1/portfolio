import SectionTitle from "../../../components/SectionTitle";
import myPhoto from "../../../../public/my_Photo.png";
import { facebook, gitHub, linkedIn } from "../../../components/Images";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="py-10 md:py-20 min-h-screen overflow-x-hidden overflow-y-hidden">
      <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">
        <SectionTitle
          subTitle={"< Who Am I />"}
          title={"A Passionate Developer Who Loves to Code"}
        ></SectionTitle>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-10 ">
        <div
          className="md:w-8/12"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h4 className="text-3xl font-semibold mb-5 text-center md:text-left text-white">
            About <span className="text-cyan-500">Me</span>
          </h4>
          <p className="text-gray-300 text-xl text-center md:text-justify">
            Hi, my name is Naimul Islam from Shariatpur, Dhaka, Bangladesh.
            I&apos;m a front-end web developer. I love to use my creativity and
            make something new. That&apos;s why I love to work with React.js.
            Over the last year, I gathered knowledge in various parts of web
            development by myself. My ultimate goal is to become an awesome
            full-stack web developer who can make beautiful Uls and handle the
            back-end smoothly. I am a hard worker and I am also able to work
            well with others.
          </p>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="flex items-center justify-center md:justify-start gap-4 mt-5"
          >
            <Link to="https://github.com/akashislam1" target="_blank">
              <img className="w-8 rounded-xl" src={gitHub} alt="github" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/naimul-islam-bd1/"
              target="_blank"
            >
              <img className="w-8" src={linkedIn} alt="linkedin" />
            </Link>
            <Link to="https://www.facebook.com/naimulislam2.o" target="_blank">
              <img className="w-8" src={facebook} alt="facebook" />
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="bg-white px-4 pt-4 mx-auto rounded-2xl md:w-3/12 h-fit"
        >
          <img className="" src={myPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
