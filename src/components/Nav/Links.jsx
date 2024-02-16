import { motion } from "framer-motion";
import { pageLinks } from "../../../array";
function Links() {
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  return (
    <motion.ul
      variants={{
        open: {
          transition: {
            staggerChildren: 0.2,
          },
        },
        closed: {
          transition: {
            staggerChildren: 0.1,
            staggerDirection: -1,
          },
        },
      }}
      className="flex w-[80%] flex-col items-start gap-2"
    >
      {pageLinks.map((i) => (
        <a href={`#${i.Url}`} key={i.Url} className="w-full">
          {" "}
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-6 w-full items-center gap-1 rounded-sm hover:bg-blue-500 hover:text-white md:h-8"
          >
            <img src={i.iconUrl} className="h-5"></img>
            {i.Url}
          </motion.li>
        </a>
      ))}
    </motion.ul>
  );
}
export default Links;
