import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, Lock, ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToIntro = () => {
    document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-destructive/10 rounded-full blur-3xl animate-pulse-slow" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Security Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8 inline-flex"
          >
            <div className="p-4 rounded-2xl glass-card cyber-glow">
              <Shield className="w-16 h-16 text-primary" />
            </div>
          </motion.div>

          {/* Severity Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-6"
          >
            <Badge className="severity-high text-sm px-4 py-2 font-mono uppercase tracking-wider border">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Tingkat Keparahan: High
            </Badge>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Analisis Serangan Siber
            <span className="block text-gradient mt-2">
              Colonial Pipeline (2021)
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Studi kasus serangan ransomware yang melumpuhkan infrastruktur 
            pipa bahan bakar terbesar di Amerika Serikat
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {[
              { icon: Lock, label: "Ransomware Attack", color: "text-destructive" },
              { icon: AlertTriangle, label: "Critical Infrastructure", color: "text-warning" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 glass-card rounded-full"
              >
                <item.icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            onClick={scrollToIntro}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 group cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                Scroll untuk membaca
              </span>
              <ChevronDown className="w-5 h-5 text-primary" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
