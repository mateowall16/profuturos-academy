import { TrendingUp, Shield, Users, Clock } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Método simples e replicável",
    description:
      "Nada de setups confusos. Você aprende um passo a passo claro para operar o mercado futuro com lógica e consistência.",
  },
  {
    icon: Shield,
    title: "Gestão de risco desde o primeiro dia",
    description:
      "Você aprende a proteger seu capital antes de pensar em lucro, evitando os erros que fazem iniciantes quebrarem.",
  },
  {
    icon: Clock,
    title: "Rotina que cabe no seu dia",
    description:
      "Estratégias pensadas para quem trabalha ou estuda, sem precisar ficar o dia inteiro na frente do gráfico.",
  },
  {
    icon: Users,
    title: "Acompanhamento e comunidade",
    description:
      "Grupo fechado com acompanhamento, análises semanais e suporte para você não operar sozinho.",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que essa mentoria{" "}
            <span className="text-primary">funciona</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Porque ela foi criada para pessoas comuns que querem gerar renda
            extra com cripto, sem promessas irreais e sem complicação.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
