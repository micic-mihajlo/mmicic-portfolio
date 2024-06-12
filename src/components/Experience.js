// src/components/Experience.js
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from "react-icons/fa";

export const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Consalt Inc.",
      location: "CA, ON, Hamilton",
      duration: "September 2023 - Present",
      details: [
        "Developed and implemented custom Salesforce Apex components for the snow melting solution purchase process, reducing processing time by 40% and enhancing user experience for over 100 clients.",
        "Conducted extensive data analysis for multiple clients using Python (Pandas, NumPy), identifying key performance metrics that led to a 20% increase in operational efficiency through targeted optimizations.",
        "Spearheaded the creation of a Full Stack application utilizing React, Flask, and SQL to automate vehicle dispatch, enhancing operational efficiency for 200+ clients. Implemented dynamic routing with weather analytics, resulting in a 25% reduction in dispatch times."
      ]
    },
    {
      title: "Data Analytics Technician",
      company: "York Region",
      location: "CA, ON, Newmarket",
      duration: "January 2023 - April 2023",
      details: [
        "Performed data analysis and management for transportation projects, utilizing Esri ArcGIS Pro, ArcGIS Online, SQL databases, and Python programming to optimize spatial data and inform decision-making processes.",
        "Assisted in the design and development of diverse information products, leveraging PowerBI, ArcGIS Online, and graphic design software to create maps, web maps, story maps, dashboards, and visualizations for effective communication of findings and insights.",
        "Collaborated with cross-functional teams to support project planning and execution, attending meetings, providing input, and maintaining project status reports in Microsoft Office applications to ensure successful outcomes and adherence to timelines."
      ]
    },
    {
      title: "Data, Analytics and Business Solutions Analyst",
      company: "York Region",
      location: "CA, ON, Newmarket",
      duration: "May 2022 - September 2022",
      details: [
        "Developed and supported business applications for data analytics, leveraging web mapping tools and APIs such as ESRI ArcGIS Pro and Python, increasing efficiency in data analysis processes.",
        "Designed visually appealing data visualization and storytelling products using Tableau and PowerBI, enhancing clients' understanding of complex datasets and driving data-driven decision-making.",
        "Crafted engaging infographics, maps, and other media tailored to clients' requirements, improving communication and client satisfaction.",
        "Spearheaded the development of a Python-based application for parsing traffic disruption data, ensuring adherence to Waze standards."
      ]
    },
    {
      title: "Full Stack Software Developer",
      company: "Audioworks Inc.",
      location: "CA, ON, Mississauga",
      duration: "September 2021 - December 2021",
      details: [
        "Played a key role in developing and maintaining critical features for a collaborative music platform, using TypeScript and React Native, boosting user engagement.",
        "Implemented efficient data handling and integration services, enhancing app performance and scalability."
      ]
    },
    {
      title: "Bioinformatics Analyst",
      company: "Ontario Institute for Cancer Research",
      location: "CA, ON, Toronto",
      duration: "January 2021 - April 2021",
      details: [
        "Analyzed and interpreted 50+ terabytes of genome sequencing data using Python, R, and PLINK, implementing complex algorithms and statistical models to uncover genetic associations and identify potential biomarkers.",
        "Integrated diverse genomic datasets to generate comprehensive insights into complex diseases and medical conditions, leveraging expertise in bioinformatics and data science.",
        "Automated data analysis and reporting tasks, streamlining workflows and reducing analysis time by 50%. Developed custom scripts and pipelines to improve data quality and ensure reproducibility.",
        "Conducted downstream data modelling, including visualization, pathway analysis, and clinical association studies, resulting in the discovery of novel disease mechanisms and potential therapeutic targets. Communicated findings to cross-functional teams and stakeholders, contributing to the development of new treatments and therapies."
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Experience</h2>
            <VerticalTimeline>
              {experiences.map((exp, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: '#917018b2', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid darkorange' }}
                  date={exp.duration}
                  iconStyle={{ background: '#fcba03', color: '#fff' }}
                  icon={<FaBriefcase />}
                >
                  <h3 className="vertical-timeline-element-title">{exp.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{exp.company} | {exp.location}</h4>
                  <ul>
                    {exp.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};
