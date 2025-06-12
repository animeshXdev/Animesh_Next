'use client'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import Img from '../assets/undraw_dev-environment_n5by.svg'
import Link from 'next/link'


export default function HomePage() {
  return (
    <div className="bg-purple-500 dark:bg-background text-white dark:text-purple-500 pt-20 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-16">
      
      {/* Left Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Hi, I&apos;m <span className="text-white dark:text-purple-300">Animesh</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold text-purple-900 dark:text-purple-400">
          <Typewriter
            words={['Parkour Athlete', 'Personal Trainer', 'Frontend Developer']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-base sm:text-lg max-w-md leading-relaxed text-white/90 dark:text-purple-200">
          I combine strength, creativity, and modern tech to build both physical performance and beautiful web experiences.
          Whether it&apos;s scaling a wall or a UI — I get it done with style.
        </p>

       <Link href={"/contact"}> <button className="px-6 py-3 bg-white dark:bg-purple-500 text-purple-600 dark:text-white font-semibold rounded-lg shadow-md  active:scale-95 dark:hover:scale-90 cursor-pointer transition-all hover:bg-purple-500 border hover:border hover:text-white hover:border-white">
          Contact Me
        </button></Link>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
    <Image
  src={Img}
  alt="Animesh profile"
  width={300}
  height={300}
  className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-xl object-cover"
/>

      </div>
    </div>
  )
}
