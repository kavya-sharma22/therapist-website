'use client'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Do you accept insurance?',
      answer: 'No, but a superbill is provided for self-submission.'
    },
    {
      question: 'Are online sessions available?',
      answer: 'Yes — all virtual sessions are conducted via Zoom.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: '24-hour notice is required for cancellations.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-[#f9f7f5] py-16 px-4"> {/* full width background */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-3 focus:outline-none flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-3 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
