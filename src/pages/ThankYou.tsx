import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Mail, MessageCircle, TrendingUp } from "lucide-react";
import confetti from "canvas-confetti";
import { useEffect } from "react";

const ThankYou = () => {
  useEffect(() => {
    // Trigger confetti on mount
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ["#00C46B", "#00a85a", "#ffffff"],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ["#00C46B", "#00a85a", "#ffffff"],
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const nextSteps = [
    {
      icon: Mail,
      title: "E-mail de Boas-Vindas Enviado",
      description: "Você receberá: 'Bem-vindo à Mentoria JFN Trading 🚀 — Seu acesso foi liberado. Comece pelo módulo 1: Introdução aos Futuros.'",
    },
    {
      icon: TrendingUp,
      title: "Acesse a plataforma",
      description: "Faça login na área do aluno para começar a estudar agora mesmo.",
    },
    {
      icon: MessageCircle,
      title: "Entre no Grupo VIP do WhatsApp",
      description: "Participe das discussões, tire dúvidas e conecte-se com outros traders.",
      isWhatsApp: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative w-full max-w-2xl text-center">
        {/* Success Icon */}
        <div className="mb-8 animate-scale-in">
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto shadow-[0_0_60px_hsl(153_100%_39%/0.3)]">
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>
        </div>

        {/* Message */}
        <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-up">
          Parabéns! Você garantiu seu acesso <span className="text-primary">🎉</span>
        </h1>

        <p className="text-lg text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Seu acesso à Mentoria Binance Pro foi confirmado. Verifique seu e-mail com os detalhes e comece pelo módulo 1.
        </p>

        {/* Next Steps */}
        <div className="bg-card rounded-2xl border border-border p-6 md:p-8 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="font-display text-xl font-semibold text-foreground mb-6">
            Próximos Passos
          </h2>

          <div className="space-y-4">
            {nextSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 border border-border/50 text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  {step.isWhatsApp && (
                    <a
                      href="https://wa.me/5511999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 text-sm text-primary hover:underline"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Acessar Grupo VIP 👉
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Link to="/dashboard">
            <Button variant="hero" size="xl">
              Ir para área do aluno
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Support */}
        <p className="text-sm text-muted-foreground mt-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Dúvidas? Entre em contato:{" "}
          <a href="mailto:suporte@JFN Trading.com.br" className="text-primary hover:underline">
            suporte@JFN Trading.com.br
          </a>
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
