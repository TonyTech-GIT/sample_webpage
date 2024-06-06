// type Props = {}
import { efficiencyIcon, fastDelivery, serviceIcon } from "../../assets/icons";
import { videoOne } from "../../assets/video";
import aboutStyles from "./about.module.scss";

const About = () => {
  return (
    <section
      className={`max-container flex flex_ai-c ${aboutStyles.container}`}
    >
      <div className={aboutStyles.container__info}>
        <div>
          <div className={aboutStyles.aboutImage}>
            <h2>
              Unique Solutions <span>For you</span>
            </h2>
          </div>
        </div>

        {/* <p>bg image above</p> */}
      </div>

      <div className={aboutStyles.info_grid_container}>
        <div
          className={`${aboutStyles.grid_item_one} ${aboutStyles.grid_item}`}
        >
          <h2>Get started with us today.</h2>

          <button>Get Started</button>
        </div>

        <div
          className={`${aboutStyles.grid_item_two} ${aboutStyles.grid_item}`}
        >
          <div className={aboutStyles.about_list_wrapper}>
            <div
              className={`${aboutStyles.about_list_item} ${aboutStyles.fast_delivery}`}
            >
              <img src={fastDelivery} alt="fast-delivery" />

              <h3>Fast Delivery</h3>
            </div>

            <div
              className={`${aboutStyles.about_list_item} ${aboutStyles.service_icon}`}
            >
              <img src={serviceIcon} alt="service-icon" />

              <h3>24/7 Service</h3>
            </div>

            <div
              className={`${aboutStyles.about_list_item} ${aboutStyles.efficiency_icon}`}
            >
              <img src={efficiencyIcon} alt="efficiency-icon" />

              <h3>Efficient</h3>
            </div>
          </div>
        </div>

        <div
          className={`${aboutStyles.grid_item_three} ${aboutStyles.grid_item}`}
        >
          <video autoPlay loop muted>
            <source src={videoOne} type="video/mp4" />
          </video>

          <div className={aboutStyles.marquee}>
            {" "}
            <p>Going beyond what is perceived as possible...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
