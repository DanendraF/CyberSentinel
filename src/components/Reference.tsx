import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Newspaper, FileText, Building } from "lucide-react";

const references = [
  {
    title: "Colonial Pipeline cyber attack",
    source: "Wikipedia",
    type: "Reference",
    url: "https://en.wikipedia.org/wiki/Colonial_Pipeline_cyber_attack",
    description: "Comprehensive overview of the Colonial Pipeline ransomware attack incident."
  },
  {
    title: "Cyber-Attack on U.S. Pipeline Is Linked to Criminal Gang",
    source: "The New York Times",
    type: "News",
    url: "https://www.nytimes.com/2021/05/10/us/politics/pipeline-cyberattack.html",
    description: "Breaking news coverage linking the attack to the DarkSide criminal organization."
  },
  {
    title: "DarkSide Ransomware: Best Practices for Preventing Disruption",
    source: "CISA",
    type: "Official",
    url: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa21-131a",
    description: "Official guidance from CISA on protecting against DarkSide ransomware attacks."
  },
  {
    title: "Colonial Pipeline Paid $5 Million Ransom One Day After Cyberattack",
    source: "Bloomberg",
    type: "News",
    url: "https://www.bloomberg.com/news/articles/2021-05-13/colonial-pipeline-paid-hackers-nearly-5-million-in-ransom",
    description: "Investigative report on the ransom payment decision and timeline."
  },
  {
    title: "Colonial Pipeline Attack: What We Know and What We Don't",
    source: "Wired",
    type: "Report",
    url: "https://www.wired.com/story/colonial-pipeline-ransomware-attack/",
    description: "Technical analysis of the attack vectors and security implications."
  },
  {
    title: "Department of Justice Seizes $2.3 Million in Cryptocurrency",
    source: "U.S. Department of Justice",
    type: "Official",
    url: "https://www.justice.gov/opa/pr/department-justice-seizes-23-million-cryptocurrency-paid-ransomware-extortionists-darkside",
    description: "Official announcement of the partial ransom recovery through blockchain tracing."
  },
  {
    title: "Lessons Learned from Colonial Pipeline Attack",
    source: "SANS Institute",
    type: "Report",
    url: "https://www.sans.org/blog/colonial-pipeline-attack-lessons-learned/",
    description: "Security analysis and lessons learned for critical infrastructure protection."
  },
  {
    title: "Executive Order on Improving the Nation's Cybersecurity",
    source: "The White House",
    type: "Official",
    url: "https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/",
    description: "Executive order issued in response to the Colonial Pipeline and other cyber incidents."
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "News": return Newspaper;
    case "Report": return FileText;
    case "Official": return Building;
    default: return FileText;
  }
};

const getTypeBadgeClass = (type: string) => {
  switch (type) {
    case "News": return "bg-blue-500/10 text-blue-500 border-blue-500/30";
    case "Report": return "bg-purple-500/10 text-purple-500 border-purple-500/30";
    case "Official": return "bg-success/10 text-success border-success/30";
    default: return "bg-muted text-muted-foreground border-muted";
  }
};

export function Reference() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Referensi</h2>
          <p className="section-subtitle mx-auto">
            Sumber-sumber terpercaya untuk informasi lebih lanjut tentang insiden Colonial Pipeline
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {references.map((item, index) => {
            const TypeIcon = getTypeIcon(item.type);
            return (
              <motion.div key={index} variants={itemVariants}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Card className="glass-card border-primary/10 hover:border-primary/30 hover:scale-[1.01] transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <TypeIcon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap mb-1">
                                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                                  {item.title}
                                </h3>
                                <Badge className={`${getTypeBadgeClass(item.type)} border text-xs`}>
                                  {item.type}
                                </Badge>
                              </div>
                              <p className="text-sm text-primary/80 font-medium mb-2">
                                {item.source}
                              </p>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {item.description}
                              </p>
                            </div>
                            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            Website ini dibuat untuk keperluan tugas kuliah Manajemen Teknologi Informasi.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2024 Analisis Serangan Siber | Colonial Pipeline Case Study
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            23523170 - Danendra Farrel | 23523185 - Ikhsan Arifianto | 23523186 - Naura Tsani | 23523191 - Khalaida Dzia
          </p>
        </motion.div>
      </div>
    </section>
  );
}
