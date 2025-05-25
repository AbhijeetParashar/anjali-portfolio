"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Digital Credit Journey Platform",
    description:
      "Led end-to-end UX design for a digital credit journey platform within Nitro’s agile Credit Journey Squad. Conducted user research, created wireframes and prototypes using Figma and Marvel, and delivered seven seamless customer experiences with a focus on usability and compliance.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    tags: ["UX Design", "Figma", "Marvel", "Agile", "User Research"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Enterprise UI Design System",
    description:
      "Established a comprehensive UI guideline and contributed to a centralized design library for Nitro’s digital squads. Worked closely with cross-functional teams to ensure design consistency and scalability across multiple journeys and platforms.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    tags: ["UI Design", "Design Systems", "Sketch", "DesignOps"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "ELCM Training Module Suite",
    description:
      "Designed and developed 36 interactive training modules for the ELCM project using iMovie and design tools. Created engaging learning experiences for internal teams, focusing on usability, clarity, and brand alignment.",
    image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
    tags: ["Instructional Design", "iMovie", "UX Writing", "Training Design"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    title: "POS & Card Services UX Optimization",
    description:
      "Enhanced UX workflows for POS terminal programming, testing, and card issuance within a core banking system. Delivered smoother operational interfaces and supported e-commerce configuration for payment gateway systems at Mashreq Bank.",
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg",
    tags: ["Banking UX", "Process Optimization", "User Testing", "POS Systems"],
    liveLink: "#",
    githubLink: "#",
  },
];

const categories = ["All", "Frontend", "Fullstack", "Mobile", "UI/UX", "AI/ML"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeCategory));

  return (
    <section id="projects" className="py-20">
      <SectionHeader title="Projects" subtitle="My Recent Work" />

      <div className="flex flex-wrap gap-2 justify-center mt-8 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            className="rounded-full"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-card overflow-hidden rounded-lg border hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-60 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>

              <div className="flex gap-4">
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-primary"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
