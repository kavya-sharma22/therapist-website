"use client"
import { useState } from "react"
import { motion } from "framer-motion"


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
    agree: false,
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const validate = () => {
    let newErrors: { [key: string]: string } = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email"
    if (!formData.message.trim()) newErrors.message = "Please tell us what brings you here"
    if (!formData.preferredTime.trim()) newErrors.preferredTime = "Preferred time is required"
    if (!formData.agree) newErrors.agree = "You must agree to be contacted"
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!")
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        preferredTime: "",
        agree: false
      })
    }
  }

  return (
    <motion.section 
      className="bg-[#e0f5f3] py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left: existing contact cards with fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center md:text-left">
            Dr. Serena Blake, PsyD (Clinical Psychologist)
          </h2>
          <div className="grid gap-6">
            {[
              {
                title: "Location:",
                content: "1287 Maplewood Drive, Los Angeles, CA 90026"
              },
              {
                title: "Contact:",
                content: <>
                  Phone: (323) 555-0192<br />
                  Email: <a href="mailto:serena@blakepsychology.com" className="text-[#BFA28A] underline">
                    serena@blakepsychology.com
                  </a>
                </>
              },
              {
                title: "Office Hours:",
                content: <>
                  <span className="font-bold">In-person:</span> Tue & Thu, 10 AM–6 PM<br />
                  <span className="font-bold">Virtual via Zoom:</span> Mon, Wed & Fri, 1 PM–5 PM
                </>
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="bg-[#f5eee6] rounded-xl shadow p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p>{item.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: contact form with fade-in */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#f5eee6] rounded-xl shadow p-6 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-2">Send a Message</h3>

          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Phone", name: "phone", type: "text" },
            { label: "Email", name: "email", type: "email" },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label className="block mb-1 font-medium">{label}</label>
              <input
                type={type}
                name={name}
                value={(formData as any)[name]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-[#BFA28A] focus:ring-2 focus:ring-[#BFA28A] transition"
              />
              {errors[name] && <p className="text-red-600 text-sm">{errors[name]}</p>}
            </div>
          ))}

          <div>
            <label className="block mb-1 font-medium">What brings you here?</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-[#BFA28A] focus:ring-2 focus:ring-[#BFA28A] transition"
              rows={3}
            ></textarea>
            {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Preferred time to reach you</label>
            <input
              type="text"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-[#BFA28A] focus:ring-2 focus:ring-[#BFA28A] transition"
            />
            {errors.preferredTime && <p className="text-red-600 text-sm">{errors.preferredTime}</p>}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mr-2"
            />
            <label>I agree to be contacted</label>
          </div>
          {errors.agree && <p className="text-red-600 text-sm">{errors.agree}</p>}

          <button
            type="submit"
            className="bg-[#BFA28A] text-white px-6 py-3 rounded hover:bg-[#a88c74] hover:scale-105 transition transform"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </motion.section>
  )
}
