import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apa keuntungan menggunakan landing page dibandingkan website biasa?",
    answer:
      "Landing page dirancang untuk fokus pada konversi dan interaksi dengan pengunjung. Dengan desain yang sederhana dan jelas, landing page dapat meningkatkan peluang pengunjung untuk melakukan tindakan yang diinginkan, seperti menghubungi bisnis atau melakukan pembelian.",
  },
  {
    question: "Apakah domain sudah termasuk dalam paket?",
    answer:
      "Domain tidak termasuk dalam paket. Anda dapat menggunakan domain yang sudah ada atau memilih domain yang kami sediakan.",
  },
  {
    question: "Seberapa banyak revisi yang diperbolehkan?",
    answer:
      "Revisi terbatas pada 2 kali untuk paket UMKM Sederhana dan 3 kali untuk paket UMKM Profesional. Untuk paket UMKM Kustom, jumlah revisi dapat disesuaikan dengan kebutuhan.",
  },
  {
    question: "Seberapa lama landing page dapat diakses setelah selesai dibuat?",
    answer:
      "Landing page akan tetap dapat diakses selama domain dan hosting aktif. Kami menyediakan dukungan teknis untuk memastikan landing page tetap berjalan dengan baik.",
  },
  {
    question: "Apakah ada dukungan teknis setelah landing page selesai dibuat?",
    answer:
      "Ya, kami menyediakan dukungan teknis untuk membantu Anda mengelola dan memperbarui landing page sesuai kebutuhan. Dukungan ini termasuk pemeliharaan, pembaruan konten, dan bantuan teknis lainnya.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Pertanyaan Sering{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Ditanyakan
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter"
          >
            Semua pertanyaan yang sering ditanyakan oleh UMKM telah kami rangkum di sini. Jika ada pertanyaan lain, jangan ragu untuk menghubungi kami.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-inter">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
