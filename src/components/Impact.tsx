import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Database, Clock, Users, Fuel, TrendingUp } from "lucide-react";

const impactData = [
  {
    icon: DollarSign,
    value: "$4.4 Juta",
    label: "Tebusan Dibayar",
    description: "Pembayaran dalam Bitcoin kepada DarkSide",
    color: "text-destructive"
  },
  {
    icon: Database,
    value: "100 GB",
    label: "Data Dicuri",
    description: "Data sensitif perusahaan yang dieksfiltrasi",
    color: "text-warning"
  },
  {
    icon: Clock,
    value: "6 Hari",
    label: "Downtime",
    description: "Durasi operasi pipa dihentikan total",
    color: "text-primary"
  },
  {
    icon: Users,
    value: "50 Juta",
    label: "Warga Terdampak",
    description: "Populasi Pantai Timur yang mengalami kelangkaan BBM",
    color: "text-destructive"
  },
  {
    icon: Fuel,
    value: "45%",
    label: "Pasokan BBM",
    description: "Persentase pasokan BBM Pantai Timur yang terganggu",
    color: "text-warning"
  },
  {
    icon: TrendingUp,
    value: "$3.00",
    label: "Harga BBM/Gallon",
    description: "Rata-rata harga tertinggi sejak 2014",
    color: "text-primary"
  }
];

export function Impact() {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Dampak Kerugian</h2>
          <p className="section-subtitle mx-auto">
            Statistik dan dampak yang ditimbulkan dari serangan ransomware Colonial Pipeline
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {impactData.map((item, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full glass-card hover:scale-[1.02] transition-all duration-300 border-primary/10 hover:border-primary/30 hover:cyber-glow group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-secondary group-hover:bg-primary/10 transition-colors`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className={`text-3xl font-bold ${item.color} font-mono`}>
                        {item.value}
                      </p>
                      <p className="text-sm font-semibold text-foreground mt-1">
                        {item.label}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <Card className="glass-card border-destructive/20 bg-destructive/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-destructive/10">
                  <DollarSign className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <p className="font-semibold text-destructive">Total Estimasi Kerugian</p>
                  <p className="text-2xl font-bold text-foreground mt-1">$100+ Juta</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Termasuk tebusan, biaya pemulihan sistem, kehilangan pendapatan operasional, 
                    dan dampak ekonomi tidak langsung pada industri dan konsumen.
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
