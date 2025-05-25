"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Briefcase, Building } from "lucide-react";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
}

interface TimelineItemProps {
  experience: Experience;
  position: "left" | "right";
  index: number;
}

export default function TimelineItem({
  experience,
  position,
  index,
}: TimelineItemProps) {
  return (
    <div
      className={`relative flex items-center justify-between md:justify-normal ${
        position === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Content for larger screens */}
      <motion.div
        initial={{ opacity: 0, x: position === "left" ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`hidden md:block w-5/12 ${
          position === "right" ? "md:text-right" : ""
        }`}
      >
        <div
          className={`bg-card rounded-lg border p-6 shadow-sm ${
            position === "right" ? "ml-8" : "mr-8"
          }`}
        >
          <h3 className="font-semibold text-xl mb-1">{experience.title}</h3>
          <div className="flex items-center gap-1 text-muted-foreground mb-4 text-sm">
            <Building size={16} />
            <span>{experience.company}</span>
            <span className="mx-1">•</span>
            <span>{experience.location}</span>
          </div>
          <p className="text-muted-foreground mb-4">{experience.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {experience.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="font-normal">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Timeline circle and date */}
      <div className="z-10 flex items-center gap-4">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-primary-foreground"
        >
          <Briefcase size={18} />
        </motion.div>
        <div className="flex items-center md:hidden">
          {/* <Calendar size={16} className="text-muted-foreground mr-1" /> */}
          <span className="text-base text-muted-foreground text-primary">
            {experience.period}
          </span>
        </div>
      </div>

      {/* Date for larger screens */}
      <div
        className={`hidden md:flex items-center ${
          position === "right" ? "justify-end mr-16" : "ml-16"
        } w-5/12`}
      >
        <div
          className={`flex items-center ${
            position === "right" ? "flex-row-reverse" : ""
          } gap-1 text-muted-foreground`}
        >
          {/* <Calendar size={16} /> */}
          <span className="text-sm">{experience.period}</span>
        </div>
      </div>

      {/* Content for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="md:hidden ml-4 flex-1"
      >
        <div className="bg-card rounded-lg border p-4 shadow-sm">
          <h3 className="font-semibold text-lg mb-1">{experience.title}</h3>
          <div className="flex items-center gap-1 text-muted-foreground mb-2 text-xs">
            <Building size={14} />
            <span>{experience.company}</span>
          </div>
          <p className="text-muted-foreground text-sm mb-3">
            {experience.description}
          </p>
          <div className="flex flex-wrap gap-1 mt-2">
            {experience.skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="font-normal text-xs"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
