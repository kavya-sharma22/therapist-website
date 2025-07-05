"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      className="py-16 px-4 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-8">
        
        {/* Text */}
        <motion.div
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[#4a3b2d]">
            About Dr. Serena Blake
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <span className="font-bold">Dr. Serena Blake, PsyD (Clinical Psychologist)</span> is a licensed clinical psychologist based in Los Angeles, CA,
            with eight years of experience and over 500 client sessions. She blends evidence-based
            approaches—like cognitive-behavioral therapy and mindfulness—with compassionate,
            personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake
            is committed to creating a safe, supportive space for you to thrive.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/images/dr-serena-blake.png"
            alt="Dr. Serena Blake"
            width={400}
            height={500}
            className="rounded-lg shadow-md object-cover"
          />
        </motion.div>
      </div>

      {/* Centered black divider */}
      <div className="mt-12 flex justify-center">
        <div className="w-380 h-0.5 bg-black rounded"></div>
      </div>
    </motion.section>
  )
}
