import SectionTitle from "../../../components/SectionTitle";
import SwiperSlider from "../../../components/SwiperSlider";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">
        <SectionTitle
          subTitle={"< Projects />"}
          title={"My awesome works"}
        ></SectionTitle>
      </div>

      <div className="">
        <SwiperSlider></SwiperSlider>
      </div>
    </div>
  );
};

export default Projects;
