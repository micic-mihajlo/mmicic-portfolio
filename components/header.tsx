"use client"

import type React from "react"

export default function Header() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      <div className="flex items-center">
        <div className="size-12 rounded-xl flex items-center justify-center shadow-lg">
          <img
            src="/mm-logo.png"
            alt="MM Logo"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
        <div className="ml-4">
          <span className="text-white font-semibold text-lg">Mihajlo Micic</span>
          <div className="text-white/60 text-xs font-light">Full-Stack Developer</div>
        </div>
      </div>

      <nav className="flex items-center space-x-1">
        <a
          href="#projects"
          onClick={(e) => handleSmoothScroll(e, "projects")}
          className="text-white/80 hover:text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Projects
        </a>
        <a
          href="#experience"
          onClick={(e) => handleSmoothScroll(e, "experience")}
          className="text-white/80 hover:text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Experience
        </a>
        <a
          href="#skills"
          onClick={(e) => handleSmoothScroll(e, "skills")}
          className="text-white/80 hover:text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Skills
        </a>
        <a
          href="#contact"
          onClick={(e) => handleSmoothScroll(e, "contact")}
          className="text-white/80 hover:text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Contact
        </a>
      </nav>

      <div className="flex items-center">
        <button
          onClick={(e) => handleSmoothScroll(e as any, "contact")}
          className="px-6 py-2.5 rounded-full bg-white text-black font-medium text-sm transition-all duration-200 hover:bg-white/90 cursor-pointer"
        >
          Get In Touch
        </button>
      </div>
    </header>
  )
}
