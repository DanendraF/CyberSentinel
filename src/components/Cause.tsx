import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Code, Users, Settings, ShieldOff } from "lucide-react";

const causes = [
  {
    id: "technical-1",
    icon: ShieldOff,
    title: "VPN Tanpa Multi-Factor Authentication",
    category: "Teknis",
    severity: "critical",
    description: "Sistem VPN Colonial Pipeline tidak menggunakan Multi-Factor Authentication (MFA), memungkinkan penyerang masuk hanya dengan username dan password.",
    details: [
      "Password bocor ditemukan di dark web dari breach sebelumnya",
      "Tidak ada verifikasi tambahan seperti token atau biometrik",
      "Akses VPN langsung ke jaringan internal perusahaan"
    ]
  },
  {
    id: "technical-2",
    icon: Code,
    title: "Segmentasi Jaringan Tidak Memadai",
    category: "Teknis",
    severity: "high",
    description: "Kurangnya segmentasi antara jaringan IT dan OT (Operational Technology) memaksa perusahaan mematikan seluruh operasi sebagai tindakan pencegahan.",
    details: [
      "Tidak ada air gap antara sistem bisnis dan sistem kontrol",
      "Potensi penyebaran ke sistem SCADA dan kontrol pipa",
      "Keputusan shutdown preemptive untuk melindungi infrastruktur kritikal"
    ]
  },
  {
    id: "technical-3",
    icon: Settings,
    title: "Sistem Legacy dan Patch Management Lemah",
    category: "Teknis",
    severity: "high",
    description: "Infrastruktur IT yang sudah tua dengan patch management yang tidak konsisten menciptakan celah keamanan yang dieksploitasi penyerang.",
    details: [
      "Sistem operasi dan software yang outdated",
      "Patch security tidak diterapkan secara teratur",
      "Kurangnya vulnerability assessment berkala"
    ]
  },
  {
    id: "nontechnical-1",
    icon: Users,
    title: "Kurangnya Security Awareness",
    category: "Non-Teknis",
    severity: "medium",
    description: "Karyawan yang menggunakan ulang password dari akun pribadi ke akun perusahaan tanpa menyadari risiko keamanan.",
    details: [
      "Password reuse dari akun personal yang sudah bocor",
      "Kurangnya pelatihan keamanan siber reguler",
      "Tidak ada policy password yang kuat diterapkan"
    ]
  },
  {
    id: "nontechnical-2",
    icon: AlertTriangle,
    title: "Kesiapan Incident Response Kurang",
    category: "Non-Teknis",
    severity: "medium",
    description: "Ketika serangan terjadi, perusahaan tidak memiliki playbook yang jelas untuk menangani insiden ransomware skala besar.",
    details: [
      "Tidak ada backup offline yang siap digunakan",
      "Keputusan pembayaran tebusan yang cepat",
      "Kurangnya latihan simulasi serangan siber"
    ]
  }
];

export function Cause() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getSeverityStyle = (severity: string) => {
    switch (severity) {
      case "critical": return "severity-high";
      case "high": return "severity-high";
      case "medium": return "severity-medium";
      default: return "severity-low";
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
          <h2 className="section-title">Penyebab Serangan</h2>
          <p className="section-subtitle mx-auto">
            Faktor-faktor teknis dan non-teknis yang memungkinkan serangan ini berhasil
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {causes.map((cause, index) => (
              <motion.div
                key={cause.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={cause.id}
                  className="glass-card rounded-lg border-primary/10 px-4 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-4 text-left">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <cause.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold">{cause.title}</span>
                          <Badge variant="outline" className="text-xs">
                            {cause.category}
                          </Badge>
                          <Badge className={`${getSeverityStyle(cause.severity)} text-xs border`}>
                            {cause.severity.toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="pl-14 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {cause.description}
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">Detail:</p>
                        <ul className="space-y-2">
                          {cause.details.map((detail, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-0.5">→</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
