"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionHeader from "@/components/ui/section-header";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const testimonials = [
  {
    id: 5,
    name: "Natasha Dhawan",
    position: "Product Owner, Credit Journey - Mashreq",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    text: "Anjali brought immense value to our Credit Journey Squad. As the sole designer across multiple squads, her ability to understand complex requirements and translate them into user-friendly journeys was outstanding. Her designs significantly improved our customer satisfaction scores.",
  },
  {
    id: 6,
    name: "Deepa Arora",
    position: "Product Owner, Advance Analytics - Mashreq",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    text: "Anjali was instrumental in building our organization-wide UI guidelines. Her attention to consistency and user empathy made her stand out. She doesn’t just design screens—she builds experiences that work flawlessly across platforms.",
  },
  {
    id: 7,
    name: "Umesh Kumar",
    position: "Proxy Product Owner, Mashreq Bank",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    text: "During our Branch Transformation project, Anjali played a key role in POS terminal testing and e-commerce configuration. Her systematic approach and quick adaptability helped us execute UAT processes smoothly and on time.",
  },
  {
    id: 5,
    name: "Rashmi Shetty",
    position: "Business Analyst - Mashreq",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    text: "What sets Anjali apart is her structured thinking and her ability to collaborate across cross-functional teams. She’s a reliable designer who not only delivers beautiful interfaces but also aligns them with real business goals. A true asset in any agile squad.",
  },
  {
    id: 8,
    name: "Andrus Jebakumar",
    position: "Tech Lead - Mashreq",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    text: "Anjali reimagined our local website and designed promotional assets with creativity and precision. Her social media and newsletter work brought a fresh visual language that aligned perfectly with our brand standards and compliance protocols.",
  },
  {
    id: 1,
    name: "Aslihan Demieral",
    position: "Product Owner, Mashreq",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
    text: "Working with Anjali was an absolute pleasure. Her attention to detail and creative problem-solving skills transformed our product's user experience. The interface she designed not only looks beautiful but has significantly improved our user engagement metrics.",
  },
  {
    id: 2,
    name: "Abhijeet Kumar",
    position: "CTA, MSD",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    text: "Anjali's ability to understand our vision and translate it into a stunning website exceeded our expectations. Her technical expertise combined with her design sensibility resulted in a platform that perfectly represents our brand and has received overwhelmingly positive feedback from our users.",
  },
];

export default function Testimonials() {
  const carouselRef = useRef(null);

  return (
    <section id="testimonials" className="py-20">
      <SectionHeader title="Testimonials" subtitle="What Clients Say" />

      <div className="mt-12">
        <Carousel
          ref={carouselRef}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full bg-card rounded-xl border p-6 flex flex-col"
                >
                  <Quote size={32} className="text-primary opacity-20 mb-4" />

                  <p className="text-muted-foreground flex-1 mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="static transform-none" />
            <CarouselNext className="static transform-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
