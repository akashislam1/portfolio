import { chef, job, musiway, toy } from "../../components/Images";
import ProjectPageCard from "../../components/ProjectPageCard";

const ProjectsPage = () => {
  return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <h4
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-3xl font-semibold mt-12 mb-10 text-center text-white "
      >
        My <span className="text-cyan-500">Projects</span>
      </h4>
      <div className="my-10">
        <div className="grid md:grid-cols-2 gap-5">
          {/* Musiway */}
          <ProjectPageCard
            img={musiway}
            name={
              <>
                <>
                  Musiway{" "}
                  <span className="text-[16px]">( MERN Stack Project )</span>{" "}
                  <br />
                  <span className="text-xl text-slate-400">
                    Jun 2023 - Present
                  </span>
                </>
              </>
            }
            live_link={"https://musiway-school.web.app/"}
            client_link={"https://github.com/akashislam1/Musiway-client"}
            server_link={"https://github.com/akashislam1/Musiway-server"}
            techlogies={`HTML, CSS, React.js, React Router, Tailwind CSS, Firebase, Express JS, Node, MongoDB, Stripe Payment, Axios, TanStack Query, DaisyUI, AOS animation, React-
awesome-reveal`}
            features={
              <>
                <li>
                  Students can select their favorite music classes after login
                  and pay through Stripe Payment to enroll for classes. Students
                  can see payment history on the payment history page.
                </li>
                <li>
                  An instructor can add and updates classes. By default, the
                  classes status will be pending when an admin approves or deny
                  classes, the status will be updated to approved or denied.
                </li>
                <li>
                  An Admin can manage classes and users. By default, everyone
                  will be a student. Admin can change the role of users and also
                  can change class status.
                </li>
              </>
            }
          ></ProjectPageCard>
          {/* Kids wonders */}
          <ProjectPageCard
            img={toy}
            name={
              <>
                <>
                  Kids Wonders{" "}
                  <span className="text-[16px]">( MERN Stack Project )</span>{" "}
                  <br />
                </>
              </>
            }
            live_link={"https://kids-wonders.web.app/"}
            client_link={"https://github.com/akashislam1/kids-wonders"}
            server_link={"https://github.com/akashislam1/kids-wonders-server"}
            techlogies={`HTML, CSS, React.js, Tailwind CSS, Firebase, Express JS, Node, MongoDB,
AOS animation.`}
            features={
              <>
                <li>
                  Use Firebase Authentication for secure authentication for the
                  login system
                </li>
                <li>
                  Implement CRUD operation for adding, getting, deleting, and
                  updating toy details
                </li>
                <li>
                  Using MongoDB to store data and uses AOS animation and react
                  tabs
                </li>
              </>
            }
          ></ProjectPageCard>
          {/* Pasta club */}
          <ProjectPageCard
            img={chef}
            name={
              <>
                <>
                  Pasta Club{" "}
                  <span className="text-[16px]">( React Project )</span> <br />
                </>
              </>
            }
            live_link={"https://the-pasta-people.web.app/"}
            client_link={"https://github.com/akashislam1/pasta-club-client"}
            server_link={"https://github.com/akashislam1/pasta-club-server"}
            techlogies={`HTML, CSS, React.js, React Router, Tailwind CSS, Firebase, Express JS, Node`}
            features={
              <>
                <li>
                  Login users can be granted permission to view Chef details
                </li>
                <li>
                  View details page user can see the details of the chef&apos;s
                  recipe details information
                </li>
                <li>
                  On the blog page using React to PDF, there the user can
                  download this file in pdf
                </li>
              </>
            }
          ></ProjectPageCard>
          {/* Today Job */}
          <ProjectPageCard
            img={job}
            name={
              <>
                <>
                  Today&apos;s Job{" "}
                  <span className="text-[16px]">( React Project )</span> <br />
                </>
              </>
            }
            live_link={"https://moonlit-choux-7c914f.netlify.app/"}
            client_link={"https://github.com/akashislam1/todays-job"}
            techlogies={`HTML, CSS, React.js, React Router, Tailwind CSS, React Hot Toast, Hero Icon`}
            features={
              <>
                <li>Users can find jobs in features section</li>
                <li>
                  View details page user can see the details of that job&apos;s
                  who click
                </li>
                <li>View details page he can apply job&apos;s</li>
              </>
            }
          ></ProjectPageCard>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
