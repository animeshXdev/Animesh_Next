'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Dumbbell, Code } from 'lucide-react'
import AboutImg from '@/assets/undraw_finance-guy-avatar_vhop.svg'
import { useRouter } from 'next/navigation'

export default function About() {
    const router = useRouter()
  return (
    <section className="bg-white dark:bg-background text-purple-900 dark:text-purple-300 px-6 lg:px-16 py-20 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10">
      
      {/* Image Section with motion */}
      <motion.div 
        className="w-full lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src={AboutImg}
          alt="About Animesh"
          width={400}
          height={400}
          className="w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-contain drop-shadow-xl dark:drop-shadow-md"
        />
      </motion.div>

      {/* Text + Options Section */}
      <motion.div 
        className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-700 dark:text-purple-400">
          About Me
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-purple-200 max-w-xl mx-auto lg:mx-0">
          I’m Animesh — a passionate <span className="font-semibold">Parkour Athlete</span> and creative <span className="font-semibold">Frontend Developer</span>.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-purple-200 max-w-xl mx-auto lg:mx-0">
          I love balancing physical fitness with digital elegance. My journey combines motion, strength, and visual aesthetics — in the gym and in code.
        </p>

        {/* Two Option Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {/* Option 1: Parkour */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-purple-100 dark:bg-purple-900 p-6 rounded-xl shadow-md flex items-center gap-4 cursor-pointer hover:shadow-xl transition"
          >
            <Dumbbell className="w-8 h-8 text-purple-700 dark:text-purple-300" />
            <div>
              <h4 className="text-xl font-semibold">Parkour Athlete</h4>
              <p className="text-sm">Mastering motion through strength, agility, and control.</p>
            </div>
          </motion.div>

          {/* Option 2: Developer */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-purple-100 dark:bg-purple-900 p-6 rounded-xl shadow-md flex items-center gap-4 cursor-pointer hover:shadow-xl transition"
          >
            <Code className="w-8 h-8 text-purple-700 dark:text-purple-300" />
            <div>
              <h4 className="text-xl font-semibold">Frontend Developer</h4>
              <p className="text-sm">Crafting beautiful, responsive, and animated web UIs.</p>
            </div>
          </motion.div>
        </div>

        {/* Learn More Button */}
        <button  onClick={() => router.push('/skills')} className="mt-6 px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white font-semibold rounded-lg shadow-md transition-all hover:scale-95 active:scale-90 hover:bg-purple-700">
          Learn More
        </button>
      </motion.div>
    </section>
  )
}
