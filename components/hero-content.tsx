"use client"

export default function HeroContent() {
  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="relative z-20 min-h-screen flex items-center px-8 py-20" style={{ paddingTop: "20vh" }}>
      <div className="text-left max-w-2xl">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">
            🎓 University of Waterloo Graduate 2024
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-6">
          <span className="font-medium italic instrument">Mihajlo</span> Micic
          <br />
          <span className="font-light tracking-tight text-white">Full-Stack Developer</span>
        </h1>

        <p className="text-lg font-light text-white/80 mb-4 leading-relaxed max-w-2xl">
          Geomatics major with Computer Science minor, passionate about building AI-powered applications, data analysis
          platforms, and innovative web solutions.
        </p>

        <p className="text-sm font-light text-white/60 mb-8 leading-relaxed max-w-xl">
          Experienced with Python, Next.js, TypeScript, and modern full-stack development. Specialized in creating
          intelligent systems that bridge the gap between complex data and user-friendly interfaces.
        </p>

        <div className="flex items-center gap-4 flex-wrap">
          <button
            onClick={() => window.open("/Mihajlo-Micic-Resume.pdf", "_blank")}
            className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer"
          >
            View Resume
          </button>
          <button
            onClick={() => handleSmoothScroll("projects")}
            className="px-8 py-3 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90 cursor-pointer"
          >
            See Projects
          </button>
        </div>
      </div>
    </main>
  )
}
