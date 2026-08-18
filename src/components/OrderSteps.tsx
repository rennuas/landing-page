import { motion } from "framer-motion";
import { MessageCircle, Wallet, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    title: "Pilih Paket & Checkout",
    description:
      "Pilih paket yang sesuai, lalu ceritakan UMKM-mu lewat form checkout, 15 menit saja.",
    tag: "15 menit",
  },
  {
    icon: PenTool,
    title: "Proses Pembuatan",
    description:
      "Kami kerjakan landing page-mu secara profesional sesuai kebutuhan UMKM-mu",
    tag: "2-3 hari",
  },
  {
    icon: Rocket,
    title: "Landing Page Live",
    description:
      "Domain terpasang, halaman tayang dan siap terima order dari pembeli.",
    tag: "Online",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const circle = {
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 260, damping: 18 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function OrderSteps() {
  return (
    <section id="order-steps" className="relative py-20 md:py-32 overflow-hidden">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-blob" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          >
            Cara pemesanan
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-5xl font-bold"
          >
            3 langkah menuju{" "}
            <span className="marker-underline">landing page-mu</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter"
          >
            Cukup fokus pada bisnis anda, sisanya beres di tangan kami.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6"
        >
          {/* connecting line - desktop, animated draw */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.15 }}
            style={{ transformOrigin: "left" }}
            className="hidden md:block absolute top-10 left-0 right-0 h-px bg-border"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const number = String(index + 1).padStart(2, "0");
            const isLast = index === steps.length - 1;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative flex md:flex-col gap-4"
              >
                {/* connecting line - mobile */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute left-9 top-20 bottom-[-2.5rem] w-px bg-border" />
                )}

                <motion.div
                  variants={circle}
                  whileHover={{ scale: 1.08, rotate: isLast ? 0 : -4 }}
                  className={`relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full shadow-sm ${
                    isLast
                      ? "bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-[length:200%_200%] animate-gradient shadow-lg shadow-green-500/25"
                      : "border border-border bg-background"
                  }`}
                >
                  {isLast && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-ping" />
                  )}
                  <Icon
                    className={`h-9 w-9 ${isLast ? "text-white" : "text-primary"}`}
                  />
                  <span
                    className={`absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold tabular-nums ${
                      isLast
                        ? "bg-background text-foreground border border-border"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {number}
                  </span>
                </motion.div>

                <div className="flex-1 md:pt-1 space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <span
                      className="text-[11px] font-medium px-2 py-0.5 rounded-full "
                      style={{
                        backgroundColor: "hsl(24 95% 53% / 0.12)",
                        color: "hsl(24 95% 53%)",
                      }}
                    >
                      {step.tag}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground font-inter">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}