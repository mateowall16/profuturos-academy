import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/feedbacks/Feedback-1.jpeg",
  "/feedbacks/Feedback-2.jpeg",
  "/feedbacks/Feedback-3.jpeg",
  "/feedbacks/Feedback-4.jpeg",
  "/feedbacks/Feedback-5.jpeg",
  "/feedbacks/Feedback-6.jpeg",
  "/feedbacks/Feedback-7.jpeg",
  "/feedbacks/Feedback-8.jpeg",
  "/feedbacks/Feedback-9.jpeg",
  "/feedbacks/Feedback-10.jpeg",
  "/feedbacks/Feedback-11.jpeg",
  "/feedbacks/Feedback-12.jpeg",
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsividade
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Autoplay
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
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const visibleImages = images
    .slice(index, index + visibleCount)
    .concat(
      images.slice(
        0,
        Math.max(0, index + visibleCount - images.length)
      )
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
          className="relative flex items-center justify-center gap-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Botão esquerda */}
          <button
            onClick={prev}
            className="absolute left-0 z-10 p-2 rounded-full bg-background/80 border border-border hover:border-primary transition"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          {/* Cards */}
          {visibleImages.map((img, i) => (
            <div
              key={i}
              className="w-full max-w-sm rounded-xl overflow-hidden border border-border bg-background shadow-card"
            >
              {/* Altura padrão */}
              <div className="h-[420px] flex items-center justify-center bg-background">
                <img
                  src={img}
                  alt="Feedback real de aluno no WhatsApp"
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/feedbacks/placeholder.jpeg";
                  }}
                />
              </div>
            </div>
          ))}

          {/* Botão direita */}
          <button
            onClick={next}
            className="absolute right-0 z-10 p-2 rounded-full bg-background/80 border border-border hover:border-primary transition"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
