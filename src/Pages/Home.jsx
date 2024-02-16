import { motion } from "framer-motion";
function Home() {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-65%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 10,
      },
    },
  };

  return (
    <main className="relative flex h-[calc(100dvh-60px)] w-full flex-col overflow-hidden bg-[linear-gradient(180deg,#000000,#439bff40)]  md:flex-row">
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="flex h-[50%] w-full flex-col items-start gap-7 pl-[10%]  pt-5 md:h-full md:justify-center md:gap-5 md:pl-[15%] 2xl:items-start"
      >
        <motion.h2
          variants={textVariants}
          className="font-semibold tracking-[5px] text-white "
        >
          REZA<span className="text-primary-500 ">&</span>HAMZA
        </motion.h2>
        <motion.h1
          variants={textVariants}
          className="flex flex-col  whitespace-nowrap text-[30px]  font-bold text-white md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[70px]"
        >
          <span className="text-[33px] md:text-[36px] lg:text-[41px] xl:text-[53px] 2xl:text-[73px] ">
            Web Developers
          </span>
          <span> and Programers</span>
        </motion.h1>

        <motion.div
          variants={textVariants}
          className="flex flex-row gap-[20px]  "
        >
          <motion.button
            variants={textVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button rounded-md bg-transparent p-2 text-[15px] font-light lg:text-[20px]"
          >
            See the Latest Work
          </motion.button>
          <motion.button
            variants={textVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-md bg-primary-500 p-2 text-[15px] text-white lg:text-[20px]"
          >
            Contact me
          </motion.button>
        </motion.div>
        <motion.img
          // variants={textVariants}
          className="z-[-1]"
          animate={{
            opacity: 0,
            y: 10,
            transition: { duration: 2, repeat: Infinity },
          }}
          src="/public/scroll.png"
        ></motion.img>
      </motion.div>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-[-120px] z-[-2]  hidden overflow-hidden whitespace-nowrap text-[50vh] text-[#ffffff10] md:flex"
      >
        Writer Content Creator Influencer
      </motion.div>
      <img src="/public/hero.png" className=""></img>
    </main>
  );
}
export default Home;
