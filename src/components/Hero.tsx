import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background simples (melhor performance) */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      {/* Glow leve (sem exagero) */}
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
            Mentoria prática em mercado futuro de criptomoedas, com método claro,
            gestão de risco e acompanhamento real para você operar com segurança.
          </p>

          {/* CTA */}
          <div className="flex justify-center">
            <Link to="/mentoria">
              <Button variant="hero" size="xl" className="gap-2">
                Quero entrar para a mentoria
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Prova rápida */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">300+</div>
              <div className="text-sm text-muted-foreground">Alunos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">97%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1+ ano</div>
              <div className="text-sm text-muted-foreground">No mercado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
