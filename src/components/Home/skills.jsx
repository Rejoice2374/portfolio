import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/color-sharp.png";
import { SkillLog } from "../../constants";
import styles from "../../style";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
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

  const calculateOffset = (score) => {
    return 440 - (440 * score) / 100;
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
            {SkillLog.map((skillItem) => (
              <SkillItem
                key={skillItem.id}
                skill={skillItem.skill}
                score={skillItem.score}
                offset={calculateOffset(skillItem.score)}
              />
            ))}
          </Carousel>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Fine" />
      </div>
    </section>
  );
};

const SkillItem = ({ skill, score, offset }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < score) {
        setCounter(counter + 1);
      } else {
        clearInterval(interval);
      }
    }, 2000 / score);

    return () => clearInterval(interval);
  }, [counter, score]);

  return (
    <div className="item">
      <div className="skillChart">
        <div className="outer">
          <div className="inner">
            <p className="circle font-semibold text-[#555]">{counter}%</p>
          </div>
        </div>

        <svg
          className="absolute top-0 left-0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient id={`GradientColor`}>
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
          </defs>
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            strokeWidth="20px"
            stroke={`url(#GradientColor)`}
            strokeLinecap="round"
            strokeDasharray="440"
            strokeDashoffset="440"
            style={{
              animation: "loading 2s linear forwards",
              "--offset": offset,
            }}
          />
        </svg>
      </div>
      <h5 className="text-white text-center mt-2">{skill}</h5>
    </div>
  );
};

export default Skills;
