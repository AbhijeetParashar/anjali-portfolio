"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionHeader from "@/components/ui/section-header";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const launchConfetti = () => {
    const duration = 2000; // 2 seconds
    const interval = 250; // fire every 250ms
    const end = Date.now() + duration;

    const confettiInterval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(confettiInterval);
        return;
      }

      confetti({
        particleCount: 100,
        spread: 120,
        startVelocity: 30,
        angle: 90,
        origin: { x: Math.random(), y: 1 }, // random horizontal spread from bottom
        gravity: 0.5,
        ticks: 200,
      });
    }, interval);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formRef.current) {
      try {
        // await emailjs.sendForm(
        //   "service_rf66mi1",
        //   "template_cy5ngpi",
        //   formRef.current,
        //   "jyERb-aqsfASvhpUw"
        // );

        toast({
          title: "Message sent 🎉 🎉 🎉",
          description: "Thanks for reaching out. I'll get back to you soon.",
          variant: "success",
        });

        launchConfetti(); //  Confetti launch
        formRef.current.reset();
      } catch (error) {
        console.error("EmailJS Error:", error);
        toast({
          title: "Error",
          description:
            "There was an issue sending your message. Please try again later.",
        });
      }
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20">
      <SectionHeader title="Contact" subtitle="Get in Touch" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold">{`Let's Connect`}</h3>
          <p className="text-muted-foreground">
            {`Have a project in mind or want to discuss potential collaborations? Feel free to reach out!
            I'm always open to new opportunities and interesting conversations.`}
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p>anjaliakp@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p>+971 56 617 4145</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p>Dubai, United Arab Emirates</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="from_name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="from_name"
                  name="from_name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="from_email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="from_email"
                  name="from_email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows={5}
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Send size={16} className="mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
