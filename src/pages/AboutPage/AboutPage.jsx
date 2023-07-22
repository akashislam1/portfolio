import { Link } from "react-router-dom";
import {
  about,
  facebook,
  gmail,
  linkedIn,
  phone,
} from "../../components/Images";

const AboutPage = () => {
  return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <h4 className="text-3xl font-semibold mt-12 text-center text-white ">
        About <span className="text-cyan-500">Me</span>
      </h4>

      <div className="py-5 md:py-10 min-h-screen px-2 md:px-0 flex flex-col-reverse md:flex-row gap-4">
        <div className="space-y-5 my-4 md:w-9/12">
          <p className="text-gray-300 text-xl md:text-justify">
            Hi, my name is Naimul Islam from Shariatpur, Dhaka, Bangladesh. I am
            a front-end web developer. I love to use my creativity and make
            something new. That&apos;s why I love to work with React.js. Over
            the last year, I gathered knowledge in various parts of web
            development. My ultimate goal is to become an awesome full-stack web
            developer who can make beautiful UIs and handle the back-end
            smoothly.
          </p>
          <p className="text-gray-300 text-xl md:text-justify">
            I have been working as a self-learner in the web development sector
            for almost one year, and I have a strong understanding of HTML, CSS,
            JavaScript, and React. I am also comfortable using various CSS
            frameworks, such as Bootstrap, Tailwind CSS, MATERIAL UI, and
            DaisyUI. I am also comfortable in using ExpressJS, and MongoDB for
            the backend and also familiar with knowledge about NodeJS. I am also
            comfortable using Firebase for Authentication and Hosting. <br /> I
            have recently completed my two projects using MERN which I attached
            to my resume. I also completed more than 15 projects based on my
            skills.
          </p>

          <div className="text-gray-300 text-xl">
            <p className="font-bold text-gray-100 text-xl">
              <>My key skills are :</>
            </p>
            <li className="list-disc">Focus on details</li>
            <li className="list-disc">Problem-solving</li>
            <li className="list-disc">Communication</li>
            <li className="list-disc">Enjoy learning new knowledge</li>
            <li className="list-disc">
              Adapt to new and rapidly changing environments
            </li>
          </div>
          <div className="text-gray-300 text-xl">
            <h2 className="text-xl font-bold text-gray-100">Education :</h2>
            <li className="list-disc">
              National University of Bangladesh
              <br />
              <span className="text-[16px] md:ml-7">
                Bachelor of Arts (BA)
              </span>{" "}
              <br />
              <span className="text-[16px] md:ml-7">Feb 2016 - Dec 2020</span>
            </li>
          </div>
          <div className="text-gray-300 text-xl">
            <h2 className="text-xl font-bold text-gray-100">Courses :</h2>
            <li className="list-disc">
              Complete Web Development Course With Programming Hero
            </li>
          </div>
          <div className="text-gray-300 text-xl">
            <h2 className="text-xl font-bold text-gray-100">Languages :</h2>
            <li className="list-disc">Bangla (Native)</li>
            <li className="list-disc">English (Fluent)</li>
          </div>
        </div>
        {/* Aside bar */}
        <div className="bg-cyan-950 px-4 pt-4 rounded-xl md:w-3/12 ">
          <div className="bg-white px-4 pt-4 rounded-xl">
            <img src={about} alt="" />
          </div>
          <div className="text-gray-300 text-xl my-8">
            <h2 className="text-xl font-bold text-gray-100">Contact :</h2>
            <p className="">
              Vill: Koarag, Post Office: Upashi, Upazilla: Naria, Zilla:
              Shariatpur, Capital: Dhaka, Country: Bangladesh
            </p>
            <p className="flex mt-3 gap-2">
              <span className="text-gray-100">
                <img className="w-8 rounded-xl" src={phone} alt="phone" />
              </span>{" "}
              +8801921582066
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 mt-8">
              <Link to="mailto:naimulislam0518@gmail.com" target="_blank">
                <img className="w-8 rounded-xl" src={gmail} alt="gmail" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/naimul-islam-bd1/"
                target="_blank"
              >
                <img className="w-8" src={linkedIn} alt="linkedin" />
              </Link>
              <Link
                to="https://www.facebook.com/naimulislam2.o"
                target="_blank"
              >
                <img className="w-8" src={facebook} alt="facebook" />
              </Link>
            </div>
          </div>
          <div className="text-gray-300 text-xl mb-5">
            <h2 className="text-xl font-bold text-gray-100">Top Skills :</h2>
            <li className="list-disc">React.js</li>
            <li className="list-disc">JavaScript</li>
            <li className="list-disc">MongoDB</li>
            <li className="list-disc">Express.js</li>
            <li className="list-disc">Node.js</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
