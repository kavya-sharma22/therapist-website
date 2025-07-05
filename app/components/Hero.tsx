export default function Hero() {
  return (
    <>
 {/* Logo bar on top */}
<div className="w-full flex justify-start items-center p-6 bg-[#f5eee6]">
  <a href="/" className="block pl-14">
    <img
      src="/images/logo.png" // your logo path
      alt="Logo"
      className="h-12 md:h-16 w-auto"
    />
  </a>
</div>



      {/* Hero section */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#f4f1ea]">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover md:object-contain"
        >
          <source src="/videos/Ripples-2000x1200.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay content */}
        <div className="relative z-10 text-center px-4 md:px-8 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-serif mb-4 text-white">
            Psychological Care for
          </h1>
          <h2 className="text-xl md:text-3xl font-serif mb-6 text-white">
            Change, Insight, and Well‑Being
          </h2>
          <p className="mb-6 text-sm md:text-base text-white">
            Offering individual psychotherapy for adults via telehealth in California.
          </p>
          <a
            href="https://forms.gle/4cTp4FraRHLLCWwc6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#BFA28A] text-white px-10 py-3 rounded-full hover:bg-[#a88c74] hover:scale-105 hover:shadow-md transform transition"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </>
  )
}
