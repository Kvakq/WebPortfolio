import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hi, I am</p>

            <h1>Ruslan Ragimov</h1>

            <p className="hero-role">
              Software Developer
            </p>
          </div>

          <div className="hero-socials">
            <a
              href="mailto:ruslan.raagimov06@gmail.com"
              className="social-button"
              aria-label="Email"
            >
              <MdAlternateEmail />
            </a>

            <a
              href="https://github.com/Kvakq"
              target="_blank"
              rel="noreferrer"
              className="social-button"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ruslan-ragimov-64971332b/"
              target="_blank"
              rel="noreferrer"
              className="social-button"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="/RuslanWork.png"
            alt="Ruslan Ragimov"
            className="hero-image"
          />
        </div>

      </div>
    </main>
  );
};

export default Hero;