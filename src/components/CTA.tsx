import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const CTA = () => {
  const { user } = useAuth();

  const ctaLink = user ? "/checkout" : "/login";

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
        {/* Headline */}
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
          Comece hoje a construir sua{" "}
          <span className="text-primary">renda extra com cripto</span>
        </h2>

        {/* Subheadline */}
        <p className="text-lg text-muted-foreground mb-10">
          Mesmo começando do zero, você aprende com método, acompanhamento
          e gestão de risco para operar com mais segurança e clareza.
        </p>

        {/* CTA */}
        <div className="flex justify-center mb-6">
          <Link to={ctaLink}>
            <Button variant="hero" size="xl" className="gap-2">
              Quero entrar na mentoria
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Garantia / Quebra de objeção */}
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span>
            Conteúdo responsável • Foco em gestão de risco • Sem promessas irreais
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
