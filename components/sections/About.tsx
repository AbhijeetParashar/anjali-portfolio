"use client";

import SectionHeader from "@/components/ui/section-header";
import { motion } from "framer-motion";
import { Check, Code, Palette, Sparkles } from "lucide-react";

const skills = [
  "Figma",
  "Marvel",
  "Photoshop",
  "InVision",
  "Azure DevOps",
  "Powerpoint",
  "Sketch",
  "UI/UX Design",
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <SectionHeader title="About Me" subtitle="My Background & Skills" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-lg">
            {`I'm a passionate UX designer with over five years of experience crafting intuitive and user-centered digital experiences. My journey into design began with a fascination for how people interact with technology, leading me to pursue a career where I could merge creativity with functionality.`}
          </p>
          <p className="text-muted-foreground">
            {`After graduating with a degree in Computer Science, I've worked with
            agencies, startups, and established businesses to help them achieve
            their digital goals. My approach combines technical expertise with
            creative problem-solving to deliver exceptional results.`}
          </p>
          <p className="text-muted-foreground">
            {`When I'm not designing, you'll find me doing new
            paintings, experimenting with photography, or attending local
            tech meetups to stay connected with the community.`}
          </p>

          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-center gap-1.5"
              >
                <Check size={18} className="text-primary" />
                <span className="text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card p-6 rounded-xl border"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Palette size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Design</h3>
            <p className="text-muted-foreground text-sm">
              I create visually appealing and intuitive user interfaces that
              enhance the user experience and achieve business goals.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-6 rounded-xl border"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Code size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Development</h3>
            <p className="text-muted-foreground text-sm">
              I build responsive, accessible, and performant web applications
              using modern technologies and best practices.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card p-6 rounded-xl border sm:col-span-2"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Sparkles size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Why UX Design?</h3>
            <p className="text-muted-foreground text-sm">
              {`I’ve always been curious about what truly drives my passion
              and I realized it’s the ability to see the world through someone else’s eyes.
              UX allows me to translate those human stories into meaningful, intuitive experiences. 
              It’s where problem-solving meets purpose, and that’s what excites me every day.`}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
