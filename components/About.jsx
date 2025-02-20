
"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Tilt } from "react-tilt"
import { styles } from '@/styles'
import { services } from '@/utils/constants'
import { fadeIn, textVariant } from '@/utils/motion'
import { SectionWrapper } from "@/hoc"


const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="w-full xs:w-[250px]"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >

          <Image src={icon} width={180} height={300} alt={title} className='object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center mt-4'>

            {title}
          </h3>

        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='condary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Next.js, and
        Vite.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-y-10 gap-x-6 md:gap-x-5 2xl:gap-x-10 justify-evenly'>
        {services.map((service, index) => {
          return (
            <ServiceCard {...service} index={index} key={service.title} />
          )
        })}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")