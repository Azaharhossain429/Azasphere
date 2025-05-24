import AnimatedLogo from "@/components/AnimatedLogo";
import CategoryCard from "@/components/CategoryCard";
import { motion } from "framer-motion";

const categories = [
  {
    title: "AI Chatbot",
    description: "Natural conversation with GPT/AI bots.",
    href: "/tools/ai-chatbot",
    icon: "🤖",
  },
  {
    title: "Text to Image",
    description: "Turn your words into stunning images.",
    href: "/tools/text-to-image",
    icon: "🖼️",
  },
  {
    title: "Text to Video",
    description: "Generate videos from descriptions.",
    href: "/tools/text-to-video",
    icon: "🎬",
  },
  {
    title: "Text to 3D",
    description: "Create 3D models for game devs.",
    href: "/tools/text-to-3d",
    icon: "🧊",
  },
  {
    title: "Bug Tester",
    description: "AI-powered code & bug analysis.",
    href: "/tools/bug-tester",
    icon: "🦠",
  },
  {
    title: "YouTube Banner",
    description: "Generate banners with AI.",
    href: "/tools/youtube-banner",
    icon: "🎨",
  },
  {
    title: "Image to 3D",
    description: "Convert images into 3D models.",
    href: "/tools/image-to-3d",
    icon: "🔲",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen px-4">
      <AnimatedLogo />
      <motion.h1
        className="text-4xl md:text-5xl font-futuristic font-bold text-center mb-4 bg-gradient-to-tr from-azasphere-gradient-start to-azasphere-gradient-end text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Explore the Future of <span className="text-azasphere">AI</span> Tools
      </motion.h1>
      <motion.p
        className="max-w-2xl text-center mb-8 font-semibold text-lg text-white/70"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        All the best free AI APIs in one place. Choose a category below to get started!
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-2">
        {categories.map((cat) => (
          <CategoryCard key={cat.title} {...cat} />
        ))}
      </div>
      <motion.div
        className="fixed top-7 right-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <a
          href="/login"
          className="px-7 py-3 rounded-full bg-gradient-to-tr from-azasphere-gradient-start to-azasphere-gradient-end text-black font-bold shadow-xl hover:scale-110 transition-all duration-300 text-lg"
        >
          Login
        </a>
      </motion.div>
    </main>
  );
}
