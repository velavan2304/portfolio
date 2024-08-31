import React from "react";
import Tilt from "react-parallax-tilt";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { motion } from "framer-motion";

import { resume } from "../assets";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[5px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
        <h6 className="text-[17px]">
          <a href={resume} download>
            {" "}
            Download Resume ➡️
          </a>
        </h6>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[25px] max-w-4xl leading-[35px]"
      >
        I’m a tech enthusiast and a student at Puducherry Technological
        University, specializing in frontend web development, web design, UI/UX,
        and data analytics. My passion lies in crafting intuitive and
        aesthetically pleasing digital experiences, backed by data-driven
        insights. With a strong foundation in both creative design and
        analytical thinking, I excel at turning complex problems into simple,
        user-friendly solutions. Constantly learning and evolving, I aim to
        contribute innovative ideas and cutting-edge solutions to the tech
        world.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
// export default About;
