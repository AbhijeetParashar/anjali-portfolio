import { motion } from "framer-motion";
import Image from "next/image";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  icon?: string;
}

export default function SectionHeader({ title, subtitle, icon }: SectionHeaderProps) {
  return (
    <div className="text-center space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex flex-col items-center"
      >
        {icon && (
          <div className="w-12 h-12 mb-4">
            <Image src={icon} alt={title} width={48} height={48} />
          </div>
        )}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-primary/10 px-6 py-2 rounded-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">{title}</h2>
        </motion.div>
        <p className="text-lg text-muted-foreground mt-2">{subtitle}</p>
      </motion.div>
    </div>
  );
}