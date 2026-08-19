import { useState, useEffect } from "react";
import { ArrowRight, Laptop, MessageCircle, Rocket, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { ShimmerButton } from "./ShimmerButton";
import { Button } from "./ui/button";

interface ColorTokens {
  ink: string;
  inkSoft: string;
  paper: string;
  card: string;
  marigold: string;
  teal: string;
  clay: string;
  line: string;
}

const COLORS: ColorTokens = {
  ink: "#101B2D",
  inkSoft: "rgba(16,27,45,0.62)",
  paper: "#EEF3EC",
  card: "#FFFFFF",
  marigold: "#F5A300",
  teal: "#0F6B5C",
  clay: "#E8543A",
  line: "rgba(16,27,45,0.12)",
};

interface Slide {
  niche: "kopi" | "laundry" | "katering";
  label: string;
  url: string;
  gradient: string;
}

const SLIDES: Slide[] = [
  {
    niche: "kopi",
    label: "",
    url: "kopibututi.etalase.id",
    gradient: "linear-gradient(135deg, #8C5A2B, #C88A3E)",
  },
  {
    niche: "laundry",
    label: "",
    url: "laundrykilat.etalase.id",
    gradient: "linear-gradient(135deg, #0F6B5C, #1C9C86)",
  },
  {
    niche: "katering",
    label: "",
    url: "kateringsedap.etalase.id",
    gradient: "linear-gradient(135deg, #E8543A, #F5A300)",
  },
];

interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: "4.9/5", label: "rating kepuasan klien" },
  { value: "3 hari", label: "rata-rata waktu pengerjaan" },
  { value: "100%", label: "Mobile responsive" },
];

export default function HeroSection(): JSX.Element {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const id: ReturnType<typeof setInterval> = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 3800);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="w-full font-sans bg.dark:bg-dark-800 dark:text-white relative overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap');

        .hero-display-root { font-family: 'Inter', sans-serif; }
        .hero-heading { font-family: 'Plus Jakarta Sans', sans-serif; letter-spacing: -0.01em; }
        .hero-mono { font-family: 'JetBrains Mono', monospace; }

        @keyframes heroSwing {
          0%, 100% { transform: translateX(-50%) rotate(-2.5deg); }
          50% { transform: translateX(-50%) rotate(2.5deg); }
        }
        .hero-sign {
          animation: heroSwing 4.5s ease-in-out infinite;
          transform-origin: top center;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-sign { animation: none; }
        }

        .hero-slide {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          position: absolute;
          inset: 44px 0 0 0;
        }
        .hero-slide.is-active {
          opacity: 1;
          transform: translateY(0);
          position: relative;
        }
      `}</style>

      <div className="hero-display-root max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
              <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>
        {/* ------- Left: copy ------- */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 backdrop-blur-sm px-4 py-1.5 text-sm">
              <Rocket className="h-4 w-4 text-purple-500" />
              <span className="text-muted-foreground">UMKM Go Online</span>
            </div>
          </motion.div>

          <h1 className="hero-heading font-extrabold leading-tight mt-4 mb-5 text-4xl md:text-5xl">
            Konversi Iklan Menjadi{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient">
              Penjualan
            </span> Dengan Landing Page Profesional.
          </h1>

          <p
            className="text-base md:text-lg mb-7 max-w-md text-white.text-dark"
          >
            Tingkatkan bisnis UMKM Anda dengan landing page profesional yang dirancang untuk menarik pelanggan dan meningkatkan konversi.
          </p>

          <div className="flex flex-wrap gap-3 mb-9">
            <a href="#pricing">
              <ShimmerButton className="hero-heading inline-flex items-center gap-2 font-bold text-sm px-6 py-3.5 rounded-full transition-transform hover:-translate-y-0.5">
                Lihat Harga Paket
              </ShimmerButton>
            </a>
            <a
              href="https://wa.me/6285156286627" target="_blank" rel="noopener noreferrer"
              className="hero-heading inline-flex items-center gap-2 font-bold text-sm px-6 py-3.5 rounded-full border-2 transition-colors text-dark border-dark dark:text-white dark:border-white"
            >
              <MessageCircle size={16} />
              Konsultasi Gratis
            </a>
          </div>

          <div className="flex flex-wrap gap-7">
            {STATS.map((s) => (
              <div key={s.label}>
                <b className="hero-heading block font-extrabold text-2xl">
                  {s.value}
                </b>
                <span className="text-xs text-dark dark:text-white">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ------- Right: etalase display ------- */}
        <div className="relative pt-9">
          <div className="hero-sign absolute -top-1.5 left-1/2 z-10">
            <div
              className="w-0.5 h-5 mx-auto"
              style={{ background: COLORS.inkSoft }}
            />
            <div
              className="hero-mono text-xs font-semibold tracking-wider px-4 py-1.5 rounded-md text-white"
              style={{
                background: COLORS.clay,
                boxShadow: "0 6px 14px rgba(232,84,58,0.35)",
              }}
            >
              ● BUKA 24 JAM
            </div>
          </div>

          <div
            className="rounded-3xl p-4"
            style={{
              background: COLORS.ink,
              boxShadow: "0 30px 60px -20px rgba(16,27,45,0.45)",
            }}
          >
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{ background: COLORS.card, minHeight: 420 }}
            >
              <div
                className="flex items-center gap-1.5 px-3.5 py-3 border-b"
                style={{ borderColor: COLORS.line }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: COLORS.line }}
                />
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: COLORS.line }}
                />
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: COLORS.line }}
                />
                <div
                  className="hero-mono ml-2.5 text-[11px] px-2.5 py-1 rounded-md"
                  style={{ background: COLORS.paper, color: COLORS.inkSoft }}
                >
                  {SLIDES[current].url}
                </div>
              </div>

              <div className="relative" style={{ minHeight: 376 }}>
                {SLIDES.map((slide, i) => (
                  <div
                    key={slide.niche}
                    className={`hero-slide px-5 pt-5 ${
                      i === current ? "is-active" : ""
                    }`}
                  >
                    
                    <div
                      className="rounded-xl h-32 mb-3.5 flex flex-col justify-center p-4"
                      style={{ background: slide.gradient }}
                    >
                      <div
                        className="h-2.5 rounded mb-2"
                        style={{
                          width: "60%",
                          background: "rgba(255,255,255,0.85)",
                        }}
                      />
                      <div
                        className="h-1.5 rounded mb-3.5"
                        style={{
                          width: "40%",
                          background: "rgba(255,255,255,0.55)",
                        }}
                      />
                      <div
                        className="rounded-full"
                        style={{
                          width: 86,
                          height: 22,
                          background: COLORS.ink,
                        }}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2.5">
                      {[0, 1, 2, 3, 4, 5].map((n) => (
                        <div
                          key={n}
                          className="rounded-lg border"
                          style={{
                            height: 52,
                            background: COLORS.paper,
                            borderColor: COLORS.line,
                          }}
                        />
                      ))}
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-1.5 justify-center mt-4">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.niche}
                aria-label={`Tampilkan ${slide.label}`}
                onClick={() => setCurrent(i)}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: i === current ? 20 : 7,
                  background: i === current ? COLORS.marigold : COLORS.line,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
