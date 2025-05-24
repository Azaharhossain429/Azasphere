import { motion } from "framer-motion";
import Link from "next/link";

export default function CategoryCard({ title, description, href, icon }) {
  return (
    <Link href={href}>
      <motion.div
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg cursor-pointer mb-6 hover:scale-105 hover:bg-white/20 transition-all duration-300 min-w-[220px] max-w-xs mx-auto"
        whileHover={{ scale: 1.08, boxShadow: "0 0 30px #7f00ff" }}
      >
        <div className="mb-4 text-4xl">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm opacity-70 text-center">{description}</p>
      </motion.div>
    </Link>
  );
}
