import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Lock, Bug, KeyRound, Network } from "lucide-react";

const attackTypes = [
  {
    icon: Lock,
    title: "Ransomware",
    type: "DarkSide Ransomware",
    severity: "high",
    description: "Malware yang mengenkripsi data korban dan meminta tebusan untuk dekripsi. DarkSide menggunakan model Ransomware-as-a-Service (RaaS).",
    details: [
      "Enkripsi menggunakan algoritma RSA-1024 dan Salsa20",
      "Tebusan diminta dalam Bitcoin",
      "Menyasar sistem Windows dan Linux"
    ]
  },
  {
    icon: KeyRound,
    title: "Credential Theft",
    type: "Compromised VPN",
    severity: "high",
    description: "Penyerang mendapatkan akses melalui kredensial VPN yang bocor. Password ini ditemukan dalam database dark web dari kebocoran sebelumnya.",
    details: [
      "VPN tanpa Multi-Factor Authentication",
      "Password yang digunakan ulang",
      "Tidak ada monitoring akses mencurigakan"
    ]
  },
  {
    icon: Network,
    title: "Lateral Movement",
    type: "Network Propagation",
    severity: "medium",
    description: "Setelah masuk ke jaringan, penyerang bergerak secara lateral untuk mengidentifikasi dan mengenkripsi sistem kritikal.",
    details: [
      "Eksploitasi kerentanan internal",
      "Privilege escalation",
      "Data exfiltration sebelum enkripsi"
    ]
  },
  {
    icon: Bug,
    title: "Double Extortion",
    type: "Data Theft + Encryption",
    severity: "high",
    description: "DarkSide mencuri data sensitif sebelum mengenkripsi, mengancam akan mempublikasikan data jika tebusan tidak dibayar.",
    details: [
      "~100GB data dicuri",
      "Ancaman publikasi di dark web",
      "Leverage tambahan untuk negosiasi"
    ]
  }
];

export function AttackType() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case "high": return "severity-high";
      case "medium": return "severity-medium";
      default: return "severity-low";
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
          <h2 className="section-title">Bentuk Serangan</h2>
          <p className="section-subtitle mx-auto">
            Analisis teknis metode serangan yang digunakan oleh kelompok DarkSide
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {attackTypes.map((attack, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full glass-card hover:scale-[1.02] transition-transform duration-300 border-primary/10 hover:border-primary/30">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <attack.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{attack.title}</CardTitle>
                        <p className="text-sm text-muted-foreground font-mono">
                          {attack.type}
                        </p>
                      </div>
                    </div>
                    <Badge className={`${getSeverityClass(attack.severity)} border`}>
                      {attack.severity.toUpperCase()}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="border-primary/20 bg-primary/5">
                    <AlertTitle className="text-sm font-semibold">Deskripsi</AlertTitle>
                    <AlertDescription className="text-sm text-muted-foreground">
                      {attack.description}
                    </AlertDescription>
                  </Alert>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Detail Teknis:</p>
                    <ul className="space-y-1">
                      {attack.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
