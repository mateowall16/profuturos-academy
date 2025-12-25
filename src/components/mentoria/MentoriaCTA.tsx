import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MentoriaCTA = () => {
  return (
    <section className="py-24 bg-card/50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Pronto para dar o próximo passo?
      </h2>

      <p className="text-muted-foreground mb-8">
        Vagas limitadas para garantir acompanhamento de qualidade.
      </p>

      <Link to="/checkout">
        <Button variant="hero" size="xl" className="gap-2">
          Ir para o checkout
          <ArrowRight className="w-5 h-5" />
        </Button>
      </Link>
    </section>
  );
};

export default MentoriaCTA;
