"use client";
import { SectionWrapper } from "@/hoc";
import { technologies } from "@/utils/constants";
import Image from "next/image";

const Tech = () => {
  return (
    <>
      <h5 className="text-white md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-10 font-bold">Technical Expertise.</h5>
      <div className="flex flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div
            className="flex flex-col items-center w-28 text-center"
            key={tech.name}
          >
            <div className="flex-1 flex flex-col justify-end items-center">
              <Image src={tech.icon} height={120} width={120} alt={tech.name} />
              <span className="text-secondary mt-2">{tech.name}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
