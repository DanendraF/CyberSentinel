import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, Cloud, Key, Users, Monitor, Database, Lock } from "lucide-react";

const mitigationItems = [
  {
    category: "Autentikasi & Akses",
    icon: Key,
    items: [
      { text: "Implementasi Multi-Factor Authentication (MFA) untuk semua akses remote", priority: "critical" },
      { text: "Terapkan Zero Trust Architecture - never trust, always verify", priority: "critical" },
      { text: "Gunakan password manager dan enforce password policies yang kuat", priority: "high" },
      { text: "Audit dan revoke akses yang tidak diperlukan secara berkala", priority: "medium" }
    ]
  },
  {
    category: "Keamanan Cloud & Infrastruktur",
    icon: Cloud,
    items: [
      { text: "Segmentasi jaringan antara IT dan OT (Operational Technology)", priority: "critical" },
      { text: "Implementasi air gap untuk sistem kritikal", priority: "critical" },
      { text: "Gunakan cloud security posture management (CSPM)", priority: "high" },
      { text: "Enkripsi data at rest dan in transit", priority: "high" }
    ]
  },
  {
    category: "Backup & Recovery",
    icon: Database,
    items: [
      { text: "Backup 3-2-1: 3 salinan, 2 media berbeda, 1 offsite/offline", priority: "critical" },
      { text: "Test restore backup secara berkala", priority: "high" },
      { text: "Implementasi immutable backup yang tidak bisa dimodifikasi", priority: "high" },
      { text: "Dokumentasi dan latih prosedur disaster recovery", priority: "medium" }
    ]
  },
  {
    category: "Monitoring & Detection",
    icon: Monitor,
    items: [
      { text: "Deploy EDR (Endpoint Detection & Response) di semua endpoint", priority: "critical" },
      { text: "Implementasi SIEM untuk centralized logging dan alerting", priority: "high" },
      { text: "Monitor aktivitas mencurigakan dan lateral movement", priority: "high" },
      { text: "Gunakan threat intelligence feeds untuk early warning", priority: "medium" }
    ]
  },
  {
    category: "Security Awareness",
    icon: Users,
    items: [
      { text: "Training keamanan siber reguler untuk semua karyawan", priority: "high" },
      { text: "Simulasi phishing untuk menguji awareness", priority: "high" },
      { text: "Buat kultur keamanan: \"See something, say something\"", priority: "medium" },
      { text: "Update training sesuai tren serangan terbaru", priority: "medium" }
    ]
  },
  {
    category: "Incident Response",
    icon: Shield,
    items: [
      { text: "Buat dan uji Incident Response Plan secara berkala", priority: "critical" },
      { text: "Bentuk tim CSIRT (Computer Security Incident Response Team)", priority: "high" },
      { text: "Jalin hubungan dengan law enforcement sebelum insiden", priority: "medium" },
      { text: "Siapkan retainer dengan incident response vendor", priority: "medium" }
    ]
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "critical": return "text-destructive";
    case "high": return "text-warning";
    default: return "text-primary";
  }
};

export function Mitigation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-success/10">
              <Lock className="w-6 h-6 text-success" />
            </div>
            <h2 className="section-title mb-0">Mitigasi & Pencegahan</h2>
          </div>
          <p className="section-subtitle mx-auto">
            Best practices keamanan untuk mencegah serangan serupa berdasarkan pelajaran dari insiden Colonial Pipeline
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {mitigationItems.map((section, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full glass-card border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <section.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">{section.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${getPriorityColor(item.priority)}`} />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {item.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Best Practice Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <Card className="glass-card border-success/20 bg-success/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-success/10">
                  <Cloud className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="font-semibold text-success">Cloud Security Best Practice</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Untuk infrastruktur cloud, terapkan prinsip <strong className="text-foreground">least privilege</strong>, 
                    gunakan <strong className="text-foreground">IAM policies</strong> yang ketat, aktifkan 
                    <strong className="text-foreground"> logging dan monitoring</strong> di semua layanan, 
                    dan implementasi <strong className="text-foreground">automated security scanning</strong> 
                    untuk mendeteksi misconfiguration. Gunakan layanan seperti AWS GuardDuty, 
                    Azure Security Center, atau Google Security Command Center untuk threat detection.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
