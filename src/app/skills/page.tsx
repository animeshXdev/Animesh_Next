'use client'

import { motion } from 'framer-motion'
import { Dumbbell, Code, Cpu, MoveRight } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const skillData = {
  all: [
    { name: "React", icon: <Code />, level: 85 },
    { name: "Tailwind", icon: <Code />, level: 80 },
    { name: "Parkour Flow", icon: <Dumbbell />, level: 90 },
    { name: "Web Animations", icon: <Cpu />, level: 70 },
    { name: "Jump Precision", icon: <Dumbbell />, level: 88 },
  ],
  parkour: [
    { name: "Jump Precision", icon: <Dumbbell />, level: 88 },
    { name: "Vaults", icon: <MoveRight />, level: 75 },
    { name: "Wall Climb", icon: <Dumbbell />, level: 82 },
  ],
  webdev: [
    { name: "React", icon: <Code />, level: 85 },
    { name: "Tailwind", icon: <Code />, level: 80 },
    { name: "Framer Motion", icon: <Cpu />, level: 70 },
  ]
}

export default function SkillsSection() {
  return (
    <section className="bg-white dark:bg-background text-purple-900 dark:text-purple-200 px-6 lg:px-16 py-20 min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">My Skills</h2>
        <p className="text-gray-700 dark:text-purple-300 mb-10">
          Combining physical discipline with frontend creativity and precision.
        </p>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex justify-center flex-wrap gap-4 mb-8 bg-transparent">
            <TabsTrigger value="all" className="px-5 py-2 rounded-full border hover:bg-purple-100 dark:hover:bg-purple-800">
              All Skills
            </TabsTrigger>
            <TabsTrigger value="parkour" className="px-5 py-2 rounded-full border hover:bg-purple-100 dark:hover:bg-purple-800">
              Parkour
            </TabsTrigger>
            <TabsTrigger value="webdev" className="px-5 py-2 rounded-full border hover:bg-purple-100 dark:hover:bg-purple-800">
              Web Dev
            </TabsTrigger>
          </TabsList>

          {Object.entries(skillData).map(([key, skills]) => (
            <TabsContent key={key} value={key}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {skills.map(({ name, icon, level }) => (
                  <motion.div
                    key={name}
                    className="bg-purple-100 dark:bg-purple-900 p-6 rounded-xl shadow-md hover:shadow-xl transition"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-purple-600 dark:text-purple-300 hover:scale-110 transition-transform duration-300">
                        {icon}
                      </div>
                      <h4 className="text-lg font-semibold">{name}</h4>
                    </div>
                    <div className="w-full h-3 bg-purple-200 dark:bg-purple-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-3 bg-purple-600 dark:bg-purple-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                    <p className="mt-1 text-right text-sm">{level}%</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
