// type Props = {}
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
        ></div>

        <div
          className={`${aboutStyles.grid_item_two} ${aboutStyles.grid_item}`}
        ></div>

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
