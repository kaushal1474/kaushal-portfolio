"use client";

import Image from "next/image";
import { Tilt } from "react-tilt"
import { motion } from "framer-motion";
import { styles } from "../styles";
import { link } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../utils/constants";
import { fadeIn, textVariant } from "../utils/motion";



const ProjectCard = ({
  index,
  name,
  subtext,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl w-full mx-auto sm:max-w-[75%] md:max-w-[360px]"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <a
              className="black-gradient bg-opacity-50 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              // onClick={() => window.open(source_code_link, "_blank")}
              href={source_code_link}
              target="_blank"
            >
              <Image
                src={link}
                alt="link"
                className="w-1/2 h-1/2 object-contain"
                style={{ filter: "contrast(0)" }}
              />
            </a>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-2xl">
            {name}
            {subtext && (
              <span className="ml-1 text-secondary text-xl"> | {subtext}</span>
            )}
          </h3>
          <p className="mt-2 text-secondary text-sm">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-sm ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px] max-w-3xl"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-evenly gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");