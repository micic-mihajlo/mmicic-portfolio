"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, MapPin, Download } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-20 px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-white mb-4">
            Let's <span className="font-medium italic instrument">Connect</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Open to new opportunities and collaborations. Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white/15 backdrop-blur-md border-white/20 shadow-lg shadow-black/20">
            <CardHeader>
              <CardTitle className="text-white text-xl font-medium">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-white">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Toronto, Ontario, Canada</span>
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  variant="outline"
                  className="justify-start gap-3 bg-white/15 border-white/30 text-white hover:bg-white/25 hover:border-white/40"
                  asChild
                >
                  <a href="mailto:m2micic@uwaterloo.ca">
                    <Mail className="w-4 h-4" />
                    Send Email
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="justify-start gap-3 bg-white/15 border-white/30 text-white hover:bg-white/25 hover:border-white/40"
                  asChild
                >
                  <a href="https://github.com/micic-mihajlo" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    GitHub Profile
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="justify-start gap-3 bg-white/15 border-white/30 text-white hover:bg-white/25 hover:border-white/40"
                  asChild
                >
                  <a href="https://linkedin.com/in/mihajlo-micic" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/15 backdrop-blur-md border-white/20 shadow-lg shadow-black/20">
            <CardHeader>
              <CardTitle className="text-white text-xl font-medium">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white/90 text-sm leading-relaxed">
                University of Waterloo graduate with expertise in full-stack development, AI applications, and data
                analytics. Currently working as a Software Developer at Consalt Inc.
              </p>

              <div className="flex flex-col gap-3">
                <Button className="justify-start gap-3 bg-primary hover:bg-primary/90" asChild>
                  <a href="/Mihajlo-Micic-Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="justify-start gap-3 bg-white/15 border-white/30 text-white hover:bg-white/25 hover:border-white/40"
                  asChild
                >
                  <a href="#projects">View Projects</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>


      </div>
    </section>
  )
}
