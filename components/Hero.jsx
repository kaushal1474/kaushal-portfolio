"use client";
import { motion } from "framer-motion";
import { styles } from "@/styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full z-20 h-screen mx-auto">
      <div className="relative md:min-h-[767px] max-w-7xl mx-auto sm:px-16 px-8 sm:py-16 py-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-center">
        {/* <div
          className={`${styles.paddingX} absolute -left-10 z-40 inset-0 max-w-7xl flex flex-row mx-auto items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 h-20 sm:h-80 violet-gradient" />
          </div>
        </div> */}
        <div className="mt-10">
          <h1 className={styles.heroHeadText + " text-white leading-tight"}>
            Hi, I&apos;m <span className="text-[#915eff]">Kaushal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I developed High quality web applications with responsive User
            Interaface(UI).
          </p>
          <div className="mt-6">
            <a
              href="#work"
              className="green-pink-gradient px-0.5 py-2 rounded font-semibold"
            >
              <button className="bg-primary px-4 py-1.5 hover:bg-transparent hover:text-primary rounded transition-colors">
                View My Work
              </button>
            </a>
          </div>
        </div>
        <div className="w-screen md:w-full h-full min-h-[60vh] md:min-h-max -ml-8 md:mx-auto">
          <ComputersCanvas />
        </div>
      </div>

      <div className="absolute xs:bottom-4 bottom-6 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-4 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
