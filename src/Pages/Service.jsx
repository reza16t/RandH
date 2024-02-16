import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { servicesDescription } from "../../array";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="flex h-screen w-full flex-col justify-between gap-10 overflow-y-scroll"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.header
        variants={variants}
        className="flex flex-row items-center justify-end pt-[40px] text-end text-[15px] text-gray-500 md:text-[20px]"
      >
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr className="hr w-[20%] bg-gray-500" />
      </motion.header>
      <motion.div
        className="flex w-full flex-[2] flex-col items-center justify-center text-[35px]  text-gray-300  md:text-[60px] xl:text-[70px]"
        variants={variants}
      >
        <div className="flex items-center ">
          <img
            src="/people.webp"
            alt=""
            className="mr-5 h-[50px] w-[150px] rounded-full object-cover md:h-[80px] md:w-[250px] xl:h-[100px] xl:w-[300px] "
          />
          <h1 className="s-h1">
            <motion.span
              className="font-semibold"
              whileHover={{ color: "orange" }}
            >
              Unique
            </motion.span>{" "}
            Ideas
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
          <h1 className="s-h1">
            <motion.span
              className="font-semibold"
              whileHover={{ color: "orange" }}
            >
              For Your
            </motion.span>{" "}
            Business.
          </h1>
          <button className="w-40  rounded-full bg-primary-500 p-3 text-[15px]  font-bold text-black ">
            WHAT WE DO?
          </button>
        </div>
      </motion.div>
      <motion.div
        className="flex w-full items-center justify-center"
        variants={variants}
      >
        <div className="max-w-[80%] flex-row items-center justify-center xl:flex">
          {servicesDescription.map((i) => (
            <motion.div
              className="hr m-5 rounded-2xl p-[30px] text-white"
              whileHover={{ background: "lightgray", color: "black" }}
              key={i.id}
            >
              <h1 className="pb-3 font-bold">Branding</h1>
              <p className="pb-5 text-[15px] md:text-[20px]">{i.Description}</p>
              <button className="mt-3 w-[100%] rounded-[10px]  bg-primary-500 p-2">
                Go
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
