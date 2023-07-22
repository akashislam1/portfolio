import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import ProjectCard from "./ProjectCard";
import { chef, job, musiway, toy } from "./Images";

SwiperCore.use([Pagination, Autoplay]);

const SwiperSlider = () => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="overflow-x-hidden overflow-y-hidden"
    >
      <Swiper
        style={{ padding: "50px 10px", overflow: "hidden" }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
      >
        <SwiperSlide>
          <ProjectCard
            img={musiway}
            name={"Musiway"}
            live_link={"https://musiway-school.web.app/"}
            view_details={"/projects"}
          ></ProjectCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            img={toy}
            name={"Kids Wonders"}
            live_link={"https://kids-wonders.web.app/"}
            view_details={"/projects"}
          ></ProjectCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            img={chef}
            name={"Pasta Club"}
            live_link={"https://the-pasta-people.web.app/"}
            view_details={"/projects"}
          ></ProjectCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            img={job}
            name={"Today's Job"}
            live_link={"https://moonlit-choux-7c914f.netlify.app/"}
            view_details={"/projects"}
          ></ProjectCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
