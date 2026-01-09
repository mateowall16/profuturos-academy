import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const Hero = () => {
  const { user } = useAuth();

  const ctaLink = user ? "/checkout" : "/login";

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">
              Mentoria prática • Vagas limitadas
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Gere{" "}
            <span className="text-primary">renda extra</span>{" "}
            com cripto mesmo{" "}
            <span className="text-primary">começando do zero</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Aprenda a operar o mercado futuro de criptomoedas com um método claro,
            gestão de risco e acompanhamento real — mesmo que você nunca tenha operado antes.
          </p>

          {/* CTA */}
          <div className="flex justify-center">
            <Link to={ctaLink}>
              <Button variant="hero" size="xl" className="gap-2">
                Quero entrar na mentoria
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Prova rápida */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">300+</div>
              <div className="text-sm text-muted-foreground">
                Alunos acompanhados
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Atuação real</div>
              <div className="text-sm text-muted-foreground">
                Mercado futuro
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Método</div>
              <div className="text-sm text-muted-foreground">
                Validado na prática
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
