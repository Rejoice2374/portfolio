import React from "react";
import styles from "../../style";
import { useState, useEffect } from "react";
import headerImg from "../../assets/header-img.svg";
import { BsArrowRightCircle } from "react-icons/bs";
// import "animate.css";
// import TrackVisibility from "react-on-screen";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const period = 2000;
  const toRotate = React.useMemo(
    () => ["Web Developer", "Web Designer", "UI/UX Designer"],
    []
  );

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex((prevIndex) => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex((prevIndex) => prevIndex + 1);
      }
    };

    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, isDeleting, loopNum, period, toRotate]);

  return (
    <section className={`${styles.section} banner`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.heroText} HeroText`}>
          <span className="tagline">Welcome to Favo's World!</span>
          <h1 className="banner-heading">
            Hi, I'm Rejoice Adeboye (alias, Favochino){" "}
            <span className="wrap">{text}</span>
          </h1>
          <p className="banner-text">
            I am a fullstack web devSeloper with 2 years working experience in
            React.js, Laravel, Node.js and some much more.
          </p>
          <div className="banner-btns">
            <a href="#connect" className="banner-btn">
              Let's Connect <BsArrowRightCircle />
            </a>
          </div>
        </div>
        <div className="HeroImg">
          <img src={headerImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
