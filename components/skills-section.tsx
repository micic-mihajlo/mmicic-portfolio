"use client"
import { Code, Database, Brain, Globe, Wrench, BarChart, GraduationCap } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "React Native", "HTML/CSS", "shadcn/ui"],
  },
  {
    title: "Backend Development",
    icon: Code,
    skills: ["Python", "Node.js", "Flask", "Salesforce Apex", "RESTful APIs", "Server Actions", "Microservices"],
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: ["PostgreSQL", "SQL", "Supabase", "Prisma ORM", "Drizzle ORM", "Database Design", "Data Modeling"],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      "Anthropic Claude API",
      "Natural Language Processing",
      "Machine Learning",
      "Genetic Algorithms",
      "Statistical Modeling",
      "Data Science",
    ],
  },
  {
    title: "Data Analytics",
    icon: BarChart,
    skills: [
      "Python (Pandas, NumPy)",
      "R",
      "Tableau",
      "PowerBI",
      "Matplotlib",
      "Statistical Analysis",
      "Data Visualization",
      "PLINK",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      "Git",
      "ArcGIS Pro",
      "Mapbox GL JS",
      "Google Maps API",
      "Clerk Auth",
      "NextAuth.js",
      "Streamlit",
      "Docker",
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-20 px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-white mb-4">
            Technical <span className="font-medium italic instrument">Skills</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Comprehensive expertise across full-stack development, data science, and AI technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={index}
                className="bg-white/15 backdrop-blur-md rounded-xl border border-white/20 p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-primary/20 text-white rounded-full border border-primary/30 hover:bg-primary/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16">
          <div className="bg-white/15 backdrop-blur-md rounded-xl border border-white/20 p-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-white/20 border border-white/30 p-4 flex-shrink-0">
                <img
                  src="/uwaterloo-logo.png"
                  alt="University of Waterloo Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-white">University of Waterloo</h3>
                </div>
                <p className="text-white/80 mb-3">Bachelor's Degree, Class of 2024</p>
                <div className="flex gap-3">
                  <span className="px-3 py-1 text-sm bg-primary/20 text-white rounded-full border border-primary/30">
                    Major: Geomatics
                  </span>
                  <span className="px-3 py-1 text-sm bg-primary/20 text-white rounded-full border border-primary/30">
                    Minor: Computer Science
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
