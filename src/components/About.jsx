<<<<<<< HEAD
import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
=======
import React, { useEffect, forwardRef } from "react";
import Tilt from "react-tilt";
>>>>>>> 68900ec38de5056ab7695a23f571f46730a6148f
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

<<<<<<< HEAD
const ServiceCard = ({ index, title, icon }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const tiltNode = tiltRef.current;
    if (tiltNode) {
      VanillaTilt.init(tiltNode, {
        max: 45,
        speed: 450,
        glare: true,
        "max-glare": 0.3,
      });
    }
  }, []);

  return (
    <div ref={tiltRef} className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};
=======
// Custom Tilt component that forwards the ref
const CustomTilt = forwardRef((props, ref) => (
  <Tilt {...props} innerRef={ref} />
));

const ServiceCard = ({ index, title, icon }) => (
  <CustomTilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </CustomTilt>
);
>>>>>>> 68900ec38de5056ab7695a23f571f46730a6148f

const About = () => {
  useEffect(() => {
    // Disable findDOMNode deprecation warning
    // This will suppress the warning caused by react-tilt
    const originalConsoleError = console.error;
    console.error = (...args) => {
      if (/Warning: findDOMNode/.test(args[0])) {
        return;
      }
      originalConsoleError.apply(console, args);
    };
    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As an aspiring coder with a fervent passion for technology, 
        I've recently delved into the world of programming. Through various courses and personal projects, 
        I've begun my journey in web development and 3D modeling. Proficient in TypeScript and JavaScript, 
        I've also gained expertise in frameworks such as React, Node.js, and Three.js. I thrive on learning quickly 
        and working closely with clients to develop efficient, scalable, and intuitive solutions that tackle real-world 
        challenges. Let's collaborate to turn your concepts into reality!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
