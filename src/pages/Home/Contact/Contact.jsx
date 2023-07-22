import SectionTitle from "../../../components/SectionTitle";
import Lottie from "lottie-react";
import contact from "../../../../public/contact.json";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_551zhff",
        "template_7u5r34n",
        form.current,
        "gmzhlFap0cBkoCEaV"
      )
      .then(
        (result) => {
          toast.success(`Message sent ! ${result.text}`, {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          e.target.reset();
        },
        (error) => {
          toast.error(`Message not sent! ${error.text}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };
  return (
    <div className="my-10 min-h-screen overflow-x-hidden overflow-y-hidden">
      <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">
        <SectionTitle
          subTitle={"< Contact />"}
          title={"Get in touch"}
        ></SectionTitle>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center ">
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0 w-full md:w-1/2"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="md:p-6 flex flex-col justify-center"
          >
            <div className="flex flex-col">
              <label className="hidden">Full Name</label>
              <input
                type="text"
                name="user_name"
                id="name"
                placeholder="Your Name"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-transparent border border-cyan-700 text-white font-semibold focus:border-cyan-400 focus:outline-none placeholder:text-gray-400"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="hidden">Email</label>
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="Email"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-transparent border border-cyan-700 text-white font-semibold focus:border-cyan-400 focus:outline-none placeholder:text-gray-400"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="hidden">Phone Number</label>
              <input
                type="text"
                name="user_number"
                id="phone_number"
                placeholder="Phone Number"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-transparent border border-cyan-700 text-white font-semibold focus:border-cyan-400 focus:outline-none placeholder:text-gray-400"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="hidden">Message</label>
              <textarea
                type="text"
                name="message"
                id="message"
                placeholder="Enter your messages"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-transparent border border-cyan-700 text-white font-semibold focus:border-cyan-400 focus:outline-none placeholder:text-gray-400"
                rows="7"
                required
              ></textarea>
            </div>
            <div className="text-start">
              <button
                className="text-slate-200 shadow-md bg-gray-800 px-3 border border-cyan-700 py-2 rounded-md inline-block my-4 hover:border-cyan-400 duration-500"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="relative lg:w-1/2 mx-auto"
        >
          <div className="w-full">
            <Lottie animationData={contact} loop={true}></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
