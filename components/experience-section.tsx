"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Software Developer",
    company: "ConSalt Inc.",
    location: "Hamilton, ON",
    period: "September 2023 - Present",
    type: "Full-time",
    achievements: [
      "Led development of enterprise collaboration platform, building real-time conversation management system with Python/FastAPI backend and Next.js frontend deployed via Docker on AWS ECS, implementing RAG-based task extraction from meeting notes using OpenAI APIs that reduced manual task entry by 75% and improved team productivity by 40% across 48+ production deployments.",
      "Architected document-processing pipeline integrating Google Workspace APIs for automated meeting note analysis, implementing context-aware conversation threading with orphaned session cleanup, and building immediate user feedback systems that reduced response latency from 3s to <500ms and increased user engagement by 60%.",
      "Delivered Salesforce automation solutions with custom Apex classes and Lightning Web Components for order processing workflows, implementing email automation and form validation that processed $1M+ in seasonal transactions while reducing manual processing time by 40% and eliminating order errors.",
      "Spearheaded the creation of a Full Stack application utilizing React, Flask, and SQL to automate vehicle dispatch, enhancing operational efficiency for 200+ clients. Implemented weather-based routing algorithms and analytics, resulting in a 25% reduction in dispatch times.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "Docker",
      "AWS ECS",
      "OpenAI APIs",
      "Salesforce Apex",
      "Lightning Web Components",
      "React",
      "Flask",
      "SQL",
    ],
  },
  {
    title: "Data, Analytics and Business Solutions Analyst",
    company: "York Region",
    location: "Newmarket, ON",
    period: "May 2022 - April 2023",
    type: "Co-op",
    achievements: [
      "Developed Python ETL pipeline for parsing and standardizing traffic disruption data to Waze CCP specifications, processing 30K+ daily events from multiple municipal sources, reducing processing time by 70% and improving real-time routing for 100K+ daily commuters.",
      "Built interactive BI solutions using PowerBI, Tableau, and ArcGIS Online, creating 15+ dashboards and story maps visualizing transportation patterns, infrastructure metrics, and spatial analytics for executive decision-making.",
      "Engineered geospatial data processing systems using Python, SQL, and Esri ArcGIS Pro APIs to automate spatial analysis workflows, integrating multiple GIS datasets, reducing manual mapping by 60% while improving data accuracy for transportation planning.",
      "Designed and deployed web mapping applications leveraging ArcGIS Online REST APIs and JavaScript, creating responsive visualization tools enabling 200+ municipal staff to access real-time infrastructure data.",
    ],
    technologies: [
      "Python",
      "PowerBI",
      "Tableau",
      "ArcGIS Online",
      "SQL",
      "Esri ArcGIS Pro",
      "JavaScript",
      "REST APIs",
    ],
  },
  {
    title: "Full Stack Software Developer",
    company: "Audioworks Inc.",
    location: "Mississauga, ON",
    period: "September 2021 - December 2021",
    type: "Co-op",
    achievements: [
      "Architected and developed critical features for a collaborative music platform using TypeScript and React Native, implementing real-time synchronization and user interaction systems that increased user engagement by 35% and improved session retention.",
      "Engineered efficient data handling and integration services with optimized API endpoints and state management, enhancing application performance by 40% and improving scalability to support 1K+ concurrent users.",
      "Collaborated with cross-functional teams to deliver high-quality mobile experiences, implementing responsive UI components and seamless navigation flows that reduced user drop-off rates by 25%.",
      "Optimized application architecture and implemented performance monitoring solutions, resulting in 30% faster load times and improved overall user experience across iOS and Android platforms.",
    ],
    technologies: [
      "TypeScript",
      "React Native",
      "Node.js",
      "API Integration",
      "Mobile Development",
      "Performance Optimization",
    ],
  },
  {
    title: "Bioinformatics Analyst",
    company: "Ontario Institute for Cancer Research",
    location: "Toronto, ON",
    period: "January 2021 - April 2021",
    type: "Research",
    achievements: [
      "Analyzed 50+ TB of genome sequencing data using Python, R, PLINK, and scikit-learn, implementing complex ML algorithms and statistical models to uncover genetic associations and identify potential biomarkers.",
      "Automated analysis workflows reducing processing time by 50% through custom scripts and pipelines.",
      "Conducted pathway analysis and clinical association studies, discovering novel disease mechanisms.",
    ],
    technologies: ["Python", "R", "PLINK", "scikit-learn", "Statistical Modeling", "Bioinformatics"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative z-20 px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-white mb-4">
            Professional <span className="font-medium italic instrument">Experience</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Full-stack development, data analytics, and bioinformatics across diverse industries
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 shadow-lg"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-white text-xl font-medium">{exp.title}</CardTitle>
                    <CardDescription className="text-white text-lg font-medium">{exp.company}</CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-white/90 text-slate-800 border-white/30 w-fit font-medium"
                    >
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/90 text-sm leading-relaxed">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1 pt-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-white/15 text-white/80 border-white/30 hover:bg-white/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
