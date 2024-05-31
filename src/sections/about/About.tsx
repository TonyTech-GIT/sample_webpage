// type Props = {}
import aboutStyles from "./about.module.scss";

const About = () => {
  return (
    <section
      className={`max-container flex flex_ai-c ${aboutStyles.container}`}
    >
      <div className={aboutStyles.container__info}>
        <div>
          <div className={aboutStyles.aboutImage}></div>
        </div>

        <p>bg image above</p>
      </div>
    </section>
  );
};

export default About;
