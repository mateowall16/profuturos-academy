import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Mentor = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Imagem */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl" />
            <img
  src="/imagens/mentor-avatar.jpeg"
  alt="Julia Jesus - Mentora"
  className="relative w-full max-w-md mx-auto rounded-2xl shadow-card"
/>

          </div>

          {/* Conteúdo */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Quem vai te guiar nessa{" "}
              <span className="text-primary">jornada</span>
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-4">
              Julia Jesus
            </h3>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Trader de criptomoedas especializada em mercado futuro, com foco em
              consistência, gestão de risco e disciplina. A mentoria foi criada
              para ajudar pessoas comuns a operarem com clareza, sem promessas
              irreais e sem depender de sorte.
            </p>

            {/* Lista de autoridade */}
            <ul className="space-y-3 mb-8">
              {[
                "Mais de 300 alunos acompanhados",
                "Atuação real no mercado de futuros",
                "Método simples e validado na prática",
                "Foco em proteção de capital e consistência",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link to="/mentoria">
              <Button variant="hero" size="lg" className="gap-2">
                Conhecer a mentoria
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
