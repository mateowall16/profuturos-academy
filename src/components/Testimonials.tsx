import { Star } from "lucide-react";
import testimonial1 from "@/Imagens/testimonial-1.jpg";

const testimonials = [
  {
    name: "Fernanda Souza",
    role: "Iniciante em cripto",
    image: testimonial1,
    text:
      "Eu não entendia nada de mercado futuro e tinha muito medo de perder dinheiro. A mentoria me deu clareza, disciplina e hoje consigo operar com muito mais segurança.",
  },
  {
    name: "Carlos Henrique",
    role: "Renda extra com cripto",
    image: testimonial1,
    text:
      "O maior diferencial foi a gestão de risco e o acompanhamento. Não é promessa de dinheiro fácil, é método real. Isso mudou totalmente minha forma de operar.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos <span className="text-primary">alunos dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Pessoas reais, resultados reais. Sem promessas milagrosas.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                “{testimonial.text}”
              </p>

              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
