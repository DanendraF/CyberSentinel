import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  FileText, 
  Crosshair, 
  TrendingDown, 
  Clock, 
  HelpCircle, 
  ShieldCheck, 
  BookOpen,
  Menu,
  X
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "hero", label: "Beranda", icon: Shield },
  { id: "introduction", label: "Pendahuluan", icon: FileText },
  { id: "attack-type", label: "Bentuk Serangan", icon: Crosshair },
  { id: "impact", label: "Dampak", icon: TrendingDown },
  { id: "timeline", label: "Timeline", icon: Clock },
  { id: "cause", label: "Penyebab", icon: HelpCircle },
  { id: "mitigation", label: "Mitigasi", icon: ShieldCheck },
  { id: "reference", label: "Referensi", icon: BookOpen },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find active section
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden lg:block",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2 text-primary font-bold"
            >
              <Shield className="w-6 h-6" />
              <span className="text-sm">CyberAnalysis</span>
            </motion.button>

            {/* Nav Items */}
            <div className="flex items-center gap-1">
              {navItems.slice(1).map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all",
                    activeSection === item.id
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden xl:inline">{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 lg:hidden",
          isScrolled || isMobileMenuOpen
            ? "bg-background/95 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center justify-between h-14 px-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 text-primary font-bold"
          >
            <Shield className="w-5 h-5" />
            <span className="text-sm">CyberAnalysis</span>
          </motion.button>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-muted/50"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-border/50 bg-background/95 backdrop-blur-xl"
            >
              <div className="py-2 px-4 grid grid-cols-2 gap-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-3 rounded-lg text-sm transition-all text-left",
                      activeSection === item.id
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-16" />
    </>
  );
}
