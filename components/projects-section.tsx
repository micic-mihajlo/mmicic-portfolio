"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Star, GitFork } from "lucide-react"

const projects = [
  {
    title: "Datalore - AI-Powered Data Analysis Platform",
    description:
      "Built an enterprise-grade AI data analysis tool that transforms natural language queries into actionable insights. Integrated Anthropic's Claude API with advanced Python analytics libraries to enable non-technical users to perform complex statistical analysis, data visualization, and custom code execution through conversational commands.",
    technologies: ["Python", "Anthropic Claude API", "Pandas", "NumPy", "Matplotlib", "Streamlit"],
    github: "https://github.com/micic-mihajlo/Datalore",
    stars: 41,
    forks: 4,
    details:
      "Implemented sandboxed code execution for security, colorized terminal output for enhanced UX, and support for multiple data formats (CSV, Excel, JSON).",
  },
  {
    title: "Pathly - Smart Transit Safety Platform",
    description:
      "Developed a comprehensive safety-first transit companion for international students in Toronto, processing 50,000+ real crime incidents into an interactive 3D mapping interface. Implemented hexagonal tessellation using Turf.js for optimal crime data visualization.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Mapbox GL JS",
      "Google Maps API",
      "Supabase",
      "Clerk Auth",
      "Drizzle ORM",
    ],
    github: "https://github.com/micic-mihajlo/pathly",
    details:
      "Built multi-modal routing with TTC integration providing real-time departure times, platform information, and transfer details.",
  },
  {
    title: "Habithletics - Habit Tracking PWA",
    description:
      "Engineered a cross-platform habit tracking application with activity streak monitoring and analytics dashboard. Implemented secure Google OAuth authentication, real-time data synchronization, and PWA capabilities for offline functionality.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL (Neon)",
      "NextAuth.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    github: "https://github.com/micic-mihajlo/habithletics",
    details:
      "Built with modern React patterns using server components, Zod validation schemas, and optimized database queries through Prisma ORM.",
  },
  {
    title: "FIFA 23 Ultimate Team Optimizer",
    description:
      "Developed an intelligent squad optimization system utilizing genetic algorithms to generate optimal team compositions within budget constraints. Processed extensive player performance datasets to calculate fitness scores, chemistry ratings, and value optimization.",
    technologies: ["Python", "Genetic Algorithms", "Data Science", "Performance Analytics"],
    github: "https://github.com/micic-mihajlo/FIFA-23-Team-Builder",
    details: "Implemented evolutionary computation techniques including selection, crossover, and mutation operators.",
  },
  {
    title: "Code Route - Self-Improving AI Framework",
    description:
      "Architected an innovative AI assistant framework capable of dynamically creating and managing tools during runtime conversations. Built a self-improving system that expands its own functionality based on user needs, demonstrating advanced metaprogramming and AI orchestration capabilities.",
    technologies: ["Python", "AI/ML", "Dynamic Tool Generation", "Shell Scripting"],
    github: "https://github.com/micic-mihajlo/code-route",
    details: "Implemented sophisticated error handling, tool validation, and performance monitoring systems.",
  },
  {
    title: "TherapyMatch - AI Healthcare Platform",
    description:
      "Created an AI-driven web application streamlining psychotherapist matching using advanced Natural Language Processing. Implemented personalized recommendation algorithms analyzing therapist specializations, patient needs, and geographic proximity.",
    technologies: ["JavaScript", "Python", "NLP", "Machine Learning", "Location Services"],
    github: "https://github.com/micic-mihajlo/TherapyMatch",
    stars: 1,
    details:
      "Built efficient location-based matching systems and integrated multiple data sources for comprehensive therapist profiles.",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-20 px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-white mb-4">
            <span className="font-medium italic instrument">Featured</span> Projects
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A collection of AI-powered applications, full-stack platforms, and innovative solutions showcasing modern
            development practices and cutting-edge technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white/15 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 group shadow-lg shadow-black/20"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-white text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-white/90 text-sm leading-relaxed mb-3">
                      {project.description}
                    </CardDescription>
                    {project.details && (
                      <CardDescription className="text-white/80 text-xs leading-relaxed">
                        {project.details}
                      </CardDescription>
                    )}
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {(project.stars || project.forks) && (
                  <div className="flex items-center gap-4 text-white/80 text-xs mt-4">
                    {project.stars && (
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        <span>{project.stars}</span>
                      </div>
                    )}
                    {project.forks && (
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        <span>{project.forks}</span>
                      </div>
                    )}
                  </div>
                )}
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs bg-white/90 text-gray-800 border-white/30 hover:bg-white hover:text-gray-900 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/60 text-sm mb-4">
            Interested in collaborating or learning more about these projects?
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/micic-mihajlo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              View All Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
