import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/color-sharp.png";
import { SkillLog } from "../../constants";
import styles from "../../style";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 834 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 834, min: 0 },
      items: 1,
    },
  };

  return (
    <section className={`${styles.section1}`} id="skills">
      <div className="container1">
        <div className="skill-bx flex flex-1 flex-col items-center justify-center self-stretch gap-[10px] text-white font-work">
          <h2 className="skillh2">Skills</h2>
          <p className="skillp">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.<br></br> Lorem Ipsum has been the industry's standard
            dummy text.
          </p>

          <Carousel
            responsive={responsive}
            infinite={true}
            className="owl-carousel owl-theme skill-slider"
          >
            {SkillLog.map((ski) => (
              <div className="item">
                <div className="mb-4">
                  <div className="relative circle-out">
                    <p className="circle">{ski.score}%</p>
                  </div>
                </div>
                <h5>{ski.skill}</h5>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Fine" />
    </section>
  );
};

export default Skills;
