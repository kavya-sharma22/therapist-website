import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#f5f1ee] text-center text-gray-700 py-6 text-sm mt-8">
      <div className="space-x-4 mb-2">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/good-faith-estimate" target="_blank">
          <span className="hover:underline">Good Faith Estimate</span>
        </Link>
        <Link href="#" className="hover:underline">Client Portal</Link>
      </div>
      <p>© 2025 Dr. Serena Blake, PsyD (Clinical Psychologist). All rights reserved.</p>
    </footer>
  )
}
