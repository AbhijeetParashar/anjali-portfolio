"use client";

import SectionHeader from "@/components/ui/section-header";
import TimelineItem from "@/components/ui/timeline-item";

const experiences = [
  {
    id: 1,
    title: "Project Manager",
    company: "Mashreq Bank",
    location: "Dubai, UAE",
    period: "2024 - Present",
    description:
      "Collaborated closely with Product Owners and end-users to deeply understand user requirements, conducting extensive user research to inform design decisions.",
    skills: ["Figma", "Photoshop", "Management", "Deliverables"],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Mashreq Bank",
    location: "Dubai, UAE",
    period: "2020 - 2024",
    description:
      "Spearheaded the design efforts as the sole designer for four critical projects within the Nitro Digital studio being part of the Credit Journey Squad, Risk Squad and Advanced analytics Squad, operating within a fully agile framework.",
    skills: ["Figma", "React", "CSS/SCSS", "User Research"],
  },
  {
    id: 3,
    title: "Intern",
    company: "MSD",
    location: "Dubai, UAE",
    period: "2019 - 2019",
    description:
      "Redesigned local website and launched official Facebook page. Created marketing content using Photoshop, managed live newsletters, and ensured compliance through Merck’s GMAPP and GPUB systems.",
    skills: ["JavaScript", "HTML/CSS", "Digital", "Photoshop"],
  },
  {
    id: 4,
    title: "Intern",
    company: "Mashreq Bank",
    location: "Dubai, UAE",
    period: "2017 - 2017",
    description:
      "Assisted in branch transformation by supporting POS terminal configuration, UAT, and testing. Gained experience with core banking systems, e-commerce payment gateway setup, card issuance, and merchant operations.",
    skills: ["HTML/CSS", "JavaScript", "Git", "Presentation"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <SectionHeader title="Experience" subtitle="My Professional Journey" />

      <div className="mt-12 relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] md:left-1/2 md:-ml-0.5 h-full w-0.5 bg-border"></div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              position={index % 2 === 0 ? "left" : "right"}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
