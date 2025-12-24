import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, AlertCircle, Clock } from "lucide-react";

const timelineEvents = [
  {
    date: "29 April 2021",
    title: "Initial Access",
    description: "Penyerang mendapatkan akses melalui kredensial VPN yang bocor. Password ditemukan di dark web dari kebocoran data sebelumnya.",
    type: "breach"
  },
  {
    date: "30 April - 6 Mei",
    title: "Reconnaissance & Lateral Movement",
    description: "DarkSide melakukan pengintaian jaringan internal, mengidentifikasi sistem kritikal, dan melakukan privilege escalation.",
    type: "attack"
  },
  {
    date: "6 Mei 2021",
    title: "Data Exfiltration",
    description: "Sekitar 100GB data sensitif perusahaan dicuri sebelum ransomware diaktifkan sebagai bagian dari strategi double extortion.",
    type: "breach"
  },
  {
    date: "7 Mei 2021",
    title: "Ransomware Deployment",
    description: "Ransomware diaktifkan, mengenkripsi sistem IT Colonial Pipeline. Ransom note muncul menuntut pembayaran Bitcoin.",
    type: "critical"
  },
  {
    date: "7 Mei 2021",
    title: "Operations Shutdown",
    description: "Colonial Pipeline menghentikan seluruh operasi pipa sebagai tindakan pencegahan untuk mencegah penyebaran ke sistem OT.",
    type: "impact"
  },
  {
    date: "8 Mei 2021",
    title: "Federal Response",
    description: "Pemerintah AS mendeklarasikan keadaan darurat regional. FBI dan CISA memulai investigasi.",
    type: "response"
  },
  {
    date: "8 Mei 2021",
    title: "Ransom Payment",
    description: "Colonial Pipeline membayar tebusan sebesar 75 Bitcoin (~$4.4 juta) kepada DarkSide untuk mendapatkan decryption key.",
    type: "critical"
  },
  {
    date: "9-12 Mei 2021",
    title: "Fuel Shortage",
    description: "Kepanikan pembelian BBM terjadi di Pantai Timur. Ribuan SPBU kehabisan stok, antrian panjang terjadi di mana-mana.",
    type: "impact"
  },
  {
    date: "12 Mei 2021",
    title: "Operations Resume",
    description: "Colonial Pipeline memulai restart bertahap operasi pipa setelah 6 hari shutdown.",
    type: "recovery"
  },
  {
    date: "7 Juni 2021",
    title: "Partial Recovery",
    description: "DOJ mengumumkan pemulihan 63.7 Bitcoin (~$2.3 juta) dari tebusan yang dibayarkan melalui pelacakan blockchain.",
    type: "recovery"
  }
];

const getTypeStyles = (type: string) => {
  switch (type) {
    case "critical":
      return "border-destructive bg-destructive/10 text-destructive";
    case "breach":
      return "border-warning bg-warning/10 text-warning";
    case "attack":
      return "border-orange-500 bg-orange-500/10 text-orange-500";
    case "impact":
      return "border-primary bg-primary/10 text-primary";
    case "response":
      return "border-blue-500 bg-blue-500/10 text-blue-500";
    case "recovery":
      return "border-success bg-success/10 text-success";
    default:
      return "border-muted bg-muted/10 text-muted-foreground";
  }
};

export function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h2 className="section-title mb-0">Timeline Serangan</h2>
          </div>
          <p className="section-subtitle mx-auto">
            Kronologi kejadian serangan ransomware Colonial Pipeline dari awal hingga pemulihan
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent" />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                    className={`w-4 h-4 rounded-full border-2 ${getTypeStyles(event.type)} cyber-glow`}
                  />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                }`}>
                  <div className={`glass-card rounded-lg p-4 border ${getTypeStyles(event.type).replace('text-', 'border-').split(' ')[0]}/30`}>
                    <div className={`flex items-center gap-2 mb-2 ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}>
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm font-mono text-primary font-medium">
                        {event.date}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
