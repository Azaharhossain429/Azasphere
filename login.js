import { motion } from "framer-motion";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black/70">
      <motion.div
        className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl flex flex-col items-center"
        initial={{ scale: 0.8, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.9, type: "spring" }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-futuristic font-bold mb-6 bg-gradient-to-tr from-azasphere-gradient-start to-azasphere-gradient-end text-transparent bg-clip-text"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Welcome to Azasphere
        </motion.h1>
        <form className="flex flex-col w-72 gap-4">
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg px-4 py-3 bg-black/30 text-white placeholder-white/80 focus:outline-azasphere"
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-lg px-4 py-3 bg-black/30 text-white placeholder-white/80 focus:outline-azasphere"
          />
          <motion.button
            type="submit"
            className="rounded-lg bg-gradient-to-tr from-azasphere-gradient-start to-azasphere-gradient-end text-black font-bold py-3 mt-2 hover:scale-105 shadow-lg transition-all"
            whileHover={{ scale: 1.08, boxShadow: "0 0 18px #00ffe7" }}
          >
            Login
          </motion.button>
          <Link href="/" className="text-azasphere text-center mt-2">
            ← Back to Home
          </Link>
        </form>
      </motion.div>
    </div>
  );
}
