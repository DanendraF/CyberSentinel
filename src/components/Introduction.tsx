import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, MapPin, Users, DollarSign, AlertTriangle } from "lucide-react";

const keyFacts = [
  { icon: Calendar, label: "Tanggal Serangan", value: "7 Mei 2021", color: "text-primary" },
  { icon: MapPin, label: "Lokasi", value: "Texas - New Jersey, AS", color: "text-blue-400" },
  { icon: Users, label: "Pelaku", value: "DarkSide Group", color: "text-destructive" },
  { icon: DollarSign, label: "Tebusan Dibayar", value: "$4.4 Juta", color: "text-warning" },
];

export function Introduction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="introduction" ref={ref} className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="section-title mb-1">Pendahuluan</h2>
              <p className="text-muted-foreground text-sm">Ringkasan kasus serangan siber</p>
            </div>
          </div>

          {/* Key Facts Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {keyFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Card className="glass-card border-border/50 hover:border-primary/30 transition-all hover:scale-[1.02]">
                  <CardContent className="p-4 text-center">
                    <fact.icon className={`w-5 h-5 mx-auto mb-2 ${fact.color}`} />
                    <p className="text-xs text-muted-foreground mb-1">{fact.label}</p>
                    <p className="font-semibold text-sm">{fact.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Overview Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-2"
            >
              <Card className="glass-card border-primary/20 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      Overview
                    </Badge>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Pada tanggal <strong className="text-foreground">7 Mei 2021</strong>, 
                      Colonial Pipeline Company mengalami serangan ransomware yang memaksa 
                      perusahaan untuk menghentikan seluruh operasi pipa bahan bakar mereka. 
                      Colonial Pipeline mengoperasikan pipa sepanjang <strong className="text-foreground">8.850 km</strong> yang 
                      membawa bensin, solar, dan bahan bakar jet dari Texas ke New Jersey.
                    </p>
                    <p>
                      Serangan ini dilakukan oleh kelompok hacker bernama <strong className="text-destructive">DarkSide</strong>, 
                      sebuah organisasi kriminal siber yang berbasis di Eropa Timur. Mereka berhasil 
                      mengenkripsi sistem IT perusahaan dan meminta tebusan dalam bentuk cryptocurrency.
                    </p>
                    <p>
                      Insiden ini menjadi salah satu serangan siber paling signifikan terhadap 
                      infrastruktur kritikal di Amerika Serikat, menyebabkan kepanikan pembelian 
                      bahan bakar dan lonjakan harga di sepanjang Pantai Timur.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Alert Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="glass-card border-destructive/30 bg-destructive/5 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                    <span className="font-semibold text-destructive">Peringatan</span>
                  </div>
                  <div className="space-y-4 text-sm">
                    <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                      <p className="font-medium text-foreground mb-1">Infrastruktur Kritikal</p>
                      <p className="text-muted-foreground text-xs">
                        Pipa ini menyuplai 45% kebutuhan bahan bakar Pantai Timur AS
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                      <p className="font-medium text-foreground mb-1">Dampak Nasional</p>
                      <p className="text-muted-foreground text-xs">
                        Menimbulkan deklarasi darurat di 17 negara bagian
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                      <p className="font-medium text-foreground mb-1">Tebusan Cryptocurrency</p>
                      <p className="text-muted-foreground text-xs">
                        75 Bitcoin dibayarkan, sebagian berhasil dipulihkan FBI
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
