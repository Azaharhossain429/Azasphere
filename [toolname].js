import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ToolPage() {
  const router = useRouter();
  const { toolname } = router.query;

  // Demo content, later real tool UI/logic will go here
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <motion.div
        className="p-10 rounded-3xl bg-white/10 backdrop-blur-lg shadow-2xl flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl font-futuristic font-bold mb-3 bg-gradient-to-tr from-azasphere-gradient-start to-azasphere-gradient-end text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          {toolname?.replace(/-/g, " ").toUpperCase()}
        </motion.h1>
        <motion.p
          className="text-lg text-white/80 mb-7 text-center"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          This is the <span className="text-azasphere">{toolname}</span> AI tool page.<br />
          (Real AI tool UI & 3D animation coming soon!)
        </motion.p>
        <Link href="/" className="px-6 py-2 rounded-full bg-gradient-to-tr from-azasphere-gradient-start to-azasphere-gradient-end text-black font-semibold hover:scale-105 transition-all duration-300 mt-3">
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
