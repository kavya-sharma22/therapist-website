"use client"
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <section className="bg-[#f5f1ee] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-semibold mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Services & Specialties
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              img: "/images/service1.jpg",
              alt: "Anxiety & Stress Management",
              title: "Anxiety & Stress Management",
              text: "Learn practical tools and evidence-based strategies to reduce worry, manage stress, and restore balance to your daily life."
            },
            {
              img: "/images/service2.jpg",
              alt: "Relationship Counseling",
              title: "Relationship Counseling",
              text: "Improve communication, rebuild trust, and deepen emotional connection in your relationships, whether as a couple or individually."
            },
            {
              img: "/images/service3.jpg",
              alt: "Trauma Recovery",
              title: "Trauma Recovery",
              text: "Heal from past trauma in a safe, supportive space, using approaches like mindfulness and cognitive-behavioral therapy."
            }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <img
                src={service.img}
                alt={service.alt}
                className="w-48 h-48 object-cover rounded-full shadow-md mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Centered beige divider line */}
        <div className="mt-12 flex justify-center">
          <div className="w-360 h-0.5 bg-[#BFA28A] rounded"></div>
        </div>
      </div>
    </section>
  )
}
