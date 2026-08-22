import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";

const journeySteps = [
  {
    year: "2022",
    label: "THE BEGINNING",
    title: "Tallinna Polütehnikum",
    text: "My journey into software development started at Tallinna Polütehnikum, where I began learning programming and building my technical foundation. My journey into software development started at Tallinna Polütehnikum, where I began learning programming and building my technical foundation.",
    image: "/TPT.png",
  },
  {
    year: "2025",
    label: "FIRST EXPERIENCE",
    title: "From learning to real projects",
    text: "During my studies, I gained my first real experience in IT, working with backend development, automation, web scraping and real development tasks. During my studies, I gained my first real experience in IT, working with backend development, automation, web scraping and real development tasks.",
    image: "/RuslanWork.png",
  },
  {
    year: "2026",
    label: "NEXT CHAPTER",
    title: "TalTech",
    text: "The next step in my journey is TalTech, where I continue developing my knowledge and moving toward becoming a stronger software engineer. The next step in my journey is TalTech, where I continue developing my knowledge and moving toward becoming a stronger software engineer.",
    image: "/TalTech.png",
  },
];

const JourneyItem = ({ step, index, activeIndex, setActiveIndex }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.35,
    margin: "-30% 0px -30% 0px",
  });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  return (
    <article
      ref={ref}
      className={`journey-item ${activeIndex === index ? "active" : ""}`}
    >
      <span className="journey-year">{step.year}</span>

      <div className="journey-item-content">
        <p className="journey-label">{step.label}</p>

        <h3>{step.title}</h3>

        <p>{step.text}</p>
      </div>
    </article>
  );
};

const MyJourney = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStep = journeySteps[activeIndex];

  return (
    <section className="journey" id="about">
      <div className="journey-container">
        <div className="journey-header">
          <span>01 / ABOUT ME</span>
          <h2>My Journey</h2>
        </div>

        <div className="journey-content">
          <div className="journey-timeline">
            {journeySteps.map((step, index) => (
              <JourneyItem
                key={step.year}
                step={step}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>

          <div className="journey-visual">
            <div className="journey-image-frame">
              <AnimatePresence>
                <motion.img
                  key={activeStep.image}
                  src={activeStep.image}
                  alt={activeStep.title}
                  className="journey-image"
                  initial={{
                    opacity: 0,
                    scale: 1.03,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </AnimatePresence>
            </div>

            <div className="journey-image-info">
              <span>{String(activeIndex + 1).padStart(2, "0")}</span>

              <p>{activeStep.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
