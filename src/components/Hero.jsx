import { motion } from "motion/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-text">
            <motion.p className="hero-greeting" variants={itemVariants}>
              Hi, I am
            </motion.p>

            <motion.h1 variants={itemVariants}>Ruslan Ragimov</motion.h1>

            <motion.p className="hero-role" variants={itemVariants}>
              Software Developer
            </motion.p>
          </div>

          <motion.div className="hero-socials" variants={containerVariants}>
            <motion.a
              variants={itemVariants}
              href="mailto:..."
              className="social-button"
            >
              <MdAlternateEmail />
            </motion.a>

            <motion.a
              variants={itemVariants}
              href="..."
              target="_blank"
              rel="noreferrer"
              className="social-button"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              variants={itemVariants}
              href="..."
              target="_blank"
              rel="noreferrer"
              className="social-button"
            >
              <FaLinkedinIn />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{
            opacity: 0,
            x: 40,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img
            src="/RuslanWork.png"
            alt="Ruslan Ragimov"
            className="hero-image"
          />
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
