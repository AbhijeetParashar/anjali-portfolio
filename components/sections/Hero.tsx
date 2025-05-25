"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background dark:from-primary/5 dark:via-background dark:to-background -z-10" />
      <ThemeToggle />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <div className="inline-block px-6 py-2 bg-white dark:bg-white/10 rounded-full">
              <span className="text-lg font-medium">Hello!</span>
              <div className="absolute -right-4 -top-2">
                <div className="text-primary text-2xl rotate-12">✨</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              I&apos;m <span className="text-primary">Anjali</span>,
              <br />
              UI/UX Designer
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative mx-auto w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px]"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
            <Image
              src="/hero-image.png"
              alt="Anjali"
              fill
              priority
              className="object-cover rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-8 mt-12"
          >
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-primary" fill="currentColor" />
                <Star className="w-6 h-6 text-primary" fill="currentColor" />
                <Star className="w-6 h-6 text-primary" fill="currentColor" />
                <Star className="w-6 h-6 text-primary" fill="currentColor" />
                <Star className="w-6 h-6 text-primary" fill="currentColor" />
              </div>
              <div className="text-2xl font-bold">
                5 Years
                <span className="block text-sm text-muted-foreground">
                  Experience
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="rounded-full px-8 gap-2"
              >
                Portfolio
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("about")}
                className="rounded-full px-8"
              >
                About Me
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
