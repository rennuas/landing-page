import { motion } from "framer-motion";

const features = [
  {
    title: "Copywriting Buruk",
    description:
      "Kata-kata bertele-tele dan tidak menjual. Calon pembeli bingung, ujung-ujungnya pergi tanpa membeli.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Tampilan Berantakan",
    description:
      "Desain tidak profesional dan kacau di layar HP. Warna tidak serasi bikin calon pembeli langsung kabur.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "Website lemot",
    description:
      "Belum sempat lihat produkmu, loading lebih dari 3 detik bisa bikin 53% pembeli pergi.",
    gradient: "from-green-500 to-teal-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section id="challenges" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Berapa Banyak {" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Pembeli Kabur Hari Ini?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter"
          >
            Bukan produkmu yang kurang bagus. Yang bikin mereka ragu adalah
            kesan pertama sebelum sempat mencoba — dan kesan itu sekarang
            terjadi di layar HP, bukan di depan toko.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const number = String(index + 1).padStart(2, "0");
            return (
              <motion.div
                key={index}
                variants={item}
                className="group relative p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-br ${feature.gradient} mb-4`}
                >
                  <span className="text-xs font-bold tracking-widest uppercase text-white tabular-nums">
                    Masalah {number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground font-inter">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}