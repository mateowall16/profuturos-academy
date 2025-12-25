import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import fb1 from "@/Imagens/Feedback aluno.jpeg";
import fb2 from "@/Imagens/Feedback aluno 2.jpeg";
import fb3 from "@/Imagens/Feedback aluno 3.jpeg";
import fb4 from "@/Imagens/Feedback aluno 4.jpeg";
import fb5 from "@/Imagens/Feedback aluno 5.jpeg";
import fb6 from "@/Imagens/Feedback aluno 6.jpeg";
import fb7 from "@/Imagens/Feedback aluno 7.jpeg";
import fb8 from "@/Imagens/Feedback aluno 8.jpeg";
import fb9 from "@/Imagens/Feedback aluno 9.jpeg";
import fb10 from "@/Imagens/Feedback aluno 10.jpeg";
import fb11 from "@/Imagens/Feedback aluno 11.jpeg";
import fb12 from "@/Imagens/Feedback aluno 12.jpeg";

const images = [
  fb1, fb2, fb3, fb4, fb5, fb6,
  fb7, fb8, fb9, fb10, fb11, fb12,
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getVisibleCount = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [paused]);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const visibleImages = images
    .slice(index, index + visibleCount)
    .concat(
      images.slice(0, Math.max(0, index + visibleCount - images.length))
    );

  return (
    <section className="py-20 md:py-32 bg-card/50 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Título */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos <span className="text-primary">alunos dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Pessoas reais. Mensagens reais. Sem promessas milagrosas.
          </p>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="relative flex items-center justify-center gap-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Botão esquerda */}
          <button
            onClick={prev}
            className="absolute left-0 z-10 p-2 rounded-full bg-background/80 border border-border hover:border-primary transition"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          {/* Cards */}
          {visibleImages.map((img, i) => (
            <div
              key={i}
              className="w-full max-w-sm rounded-xl overflow-hidden border border-border bg-background shadow-card"
            >
              {/* ALTURA PADRÃO AQUI */}
              <div className="h-[420px] flex items-center justify-center bg-background">
                <img
                  src={img}
                  alt="Feedback real de aluno no WhatsApp"
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}

          {/* Botão direita */}
          <button
            onClick={next}
            className="absolute right-0 z-10 p-2 rounded-full bg-background/80 border border-border hover:border-primary transition"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
