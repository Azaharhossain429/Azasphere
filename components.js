import { motion } from "framer-motion";

export default function AnimatedLogo() {
  return (
    <motion.div
      className="flex items-center justify-center mt-8 mb-4"
      initial={{ scale: 0.8, rotate: -20 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, type: "spring" }}
    >
      <motion.span
        className="text-5xl font-futuristic font-bold bg-gradient-to-tr from-azasphere-gradient-start to-azasphere-gradient-end text-transparent bg-clip-text drop-shadow-lg"
        initial={{ textShadow: "0 0 8px #00ffe7" }}
        animate={{ textShadow: "0 0 32px #7f00ff" }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "mirror" }}
      >
        A
      </motion.span>
      <span className="text-5xl font-futuristic font-bold ml-1">zasphere</span>
    </motion.div>
  );
}
