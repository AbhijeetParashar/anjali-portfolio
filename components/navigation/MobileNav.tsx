"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  FolderKanban,
  Home,
  Mail,
  MessageSquareQuote,
  User,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function MobileNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Bottom nav bar (hidden on medium screens and up) */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
        className={`fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t z-40 md:hidden ${
          isMenuOpen ? "hidden" : "block"
        }`}
      >
        <div className="flex justify-around items-center p-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={`flex flex-col items-center gap-1 ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                <Icon size={20} />
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Desktop navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 hidden md:block bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-4 pr-10">
            <Link href={"#"}>
              <div className="text-2xl font-bold cursor-pointer">
                Anjali Kumar
              </div>
            </Link>
            <nav>
              <ul className="flex items-center gap-6">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      className={`py-2 relative ${
                        activeSection === item.id
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
