import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, ThumbsUp, Tag, Link } from "lucide-react";

const WHATSAPP_NUMBER = "6285156286627";
 
function getWhatsAppLink(planName: string, price: number | null) {
  const priceText = price ? `Rp${formatRupiah(price)}` : "Custom";
  const message = `Halo, saya mau order paket ${planName} (${priceText}) dari BANGUN. Bisa dibantu prosesnya?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function formatRupiah(value: number) {
  return value.toLocaleString("id-ID");
}

const plans = [
  {
    name: "UMKM Sederhana",
    originalPrice: 1000000,
    price: 98000,
    description: "Cocok untuk landing page UMKM sederhana",
    features: [
      "1 Halaman landing page",
      "Desain responsif untuk mobile",
      "Tombol Whatsapp untuk pemesanan",
      "Google Maps untuk lokasi bisnis",
    ],
    cta: "Order Sekarang",
    highlighted: false,
  },
  {
    name: "UMKM Profesional",
    originalPrice: 1500000,
    price: 143000,
    description: "Cocok untuk menampilkan produk atau portofolio terbaik anda",
    features: [
      "1 Halaman landing page",
      "Desain responsif untuk mobile",
      "Tombol Whatsapp untuk pemesanan",
      "Google Maps untuk lokasi bisnis",
      "SEO Dasar untuk visibilitas di Google",
      "Estalase produk/portofolio (Maks. 9 produk/portofolio)",
    ],
    cta: "Order Sekarang",
    highlighted: true,
  },
  {
    name: "UMKM Kustom",
    originalPrice: null,
    price: null,
    description: "Sesuai kebutuhan, untuk bisnis yang ingin tampil beda dan profesional",
    features: [
      "Konsultasi Gratis",
      "Fitur kustom sesuai kebutuhan",
      "Prioritas pengerjaan dan dukungan",
      "Desain dan pengembangan sesuai permintaan",
    ],
    cta: "Konsultasi Sekarang",
    highlighted: false,
  },
];

function getDiscountPercent(originalPrice: number | null, price: number | null) {
  if (!originalPrice || !price) return null;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Investasi Terjangkau, {" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Hasil Maksimal
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter"
          >
            Semua paket dirancang biar bisnismu naik kelas tanpa bikin kantong bolong. Transparan dari awal sampai akhir.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-600 dark:text-purple-400"
          >
            <Sparkles className="h-4 w-4" />
            Promo terbatas — diskon berlaku untuk 20 klien pertama bulan ini
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const discount = getDiscountPercent(plan.originalPrice, plan.price);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border bg-card ${
                  plan.highlighted
                    ? "ring-2 ring-purple-500 shadow-xl scale-105"
                    : ""
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 text-xs font-semibold text-white">
                      <ThumbsUp className="h-3 w-3" />
                      Paling Populer
                    </div>
                  </div>
                )}

                {discount && (
                  <div className="absolute top-4 right-4">
                    <div className="inline-flex items-center gap-1 rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold text-green-600 dark:text-green-400">
                      <Tag className="h-3 w-3" />
                      Hemat {discount}%
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm font-inter">
                    {plan.description}
                  </p>

                  <div className="space-y-1">
                    {plan.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through font-inter">
                        Rp{formatRupiah(plan.originalPrice)}
                      </div>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">
                        {plan.price ? `Rp${formatRupiah(plan.price)}` : "Custom"}
                      </span>
                      {plan.price && (
                        <span className="text-muted-foreground">/website</span>
                      )}
                    </div>
                  </div>
                  
                  <a
                    href={getWhatsAppLink(plan.name, plan.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      className="w-full"
                      variant={plan.highlighted ? "highlighted" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </a>


                  <div className="pt-4 space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground font-inter">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}