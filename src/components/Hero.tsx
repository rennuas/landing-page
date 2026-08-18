import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Brain } from "lucide-react";
import { MarqueeLogos } from "@/components/MarqueeLogos";

const clientLogos = [
  { name: "Queen Foods 88", url: "https://queenfoods88.com/images/logo.png" },
  { name: "Client 2", url: "https://incremental.sh/assets/images/client/klien-1.png" },
  { name: "Client 3", url: "https://incremental.sh/assets/images/client/klien-2.png" },
  { name: "Client 4", url: "https://incremental.sh/assets/images/client/klien-3.png" },
  { name: "Client 5", url: "https://incremental.sh/assets/images/client/klien-4.png" },
  { name: "Client 6", url: "https://incremental.sh/assets/images/client/klien-5.png" },
  { name: "Client 7", url: "https://incremental.sh/assets/images/client/klien-6.png" },
  { name: "Client 8", url: "https://incremental.sh/assets/images/client/klien-7.png" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 backdrop-blur-sm px-4 py-1.5 text-sm">
              <Sparkles className="h-4 w-4 text-purple-500" />
              <span className="text-muted-foreground">Landing Page UMKM Indonesia</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl"
          >
            Konversi Iklan menjadi {" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient">
              Penjualan
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            Tingkatkan bisnis UMKM Anda dengan landing page profesional yang dirancang untuk menarik pelanggan dan meningkatkan konversi.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="group">
              Order Sekarang
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Lihat Harga
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 pt-8"
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-2xl md:text-3xl font-bold">
                <span>150+</span>
              </div>
              <p className="text-sm text-muted-foreground">UMKM sudah punya etalase digital</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-2xl md:text-3xl font-bold">
                <span>2 hari</span>
              </div>
              <p className="text-sm text-muted-foreground">rata-rata waktu pengerjaan</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-2xl md:text-3xl font-bold">
                <span>4.9/5</span>
              </div>
              <p className="text-sm text-muted-foreground">rating kepuasan klien</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}