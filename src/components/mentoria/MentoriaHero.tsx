import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MentoriaHero = () => {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-32">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Mentoria completa para gerar{" "}
          <span className="text-primary">renda extra com cripto</span>
        </h1>

        <p className="text-lg text-muted-foreground mb-8">
          Um método prático para quem quer operar mercado futuro com clareza,
          gestão de risco e acompanhamento real — mesmo começando do zero.
        </p>

        <Link to="/checkout">
          <Button variant="hero" size="xl" className="gap-2">
            Quero entrar agora
            <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default MentoriaHero;
