import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Users, Award, Shield } from "lucide-react";
import heroImage from "@/Imagens/hero-trading.jpg";
import mentorAvatar from "@//Imagens/mentor-avatar.jpg.jpeg";
import testimonial1 from "@/Imagens/testimonial-1.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Estratégias simples e diretas",
      description: "Métodos práticos e testados para você operar com clareza e confiança desde o início.",
    },
    {
      icon: Play,
      title: "Aulas gravadas e lives semanais",
      description: "Conteúdo disponível 24h + encontros ao vivo para tirar dúvidas e analisar o mercado.",
    },
    {
      icon: Users,
      title: "Grupo VIP de traders",
      description: "Comunidade exclusiva para trocar ideias, setups e crescer junto com outros traders.",
    },
    {
      icon: Shield,
      title: "Suporte e acompanhamento",
      description: "Mentoria de perto com suporte dedicado para acelerar sua evolução no mercado.",
    },
  ];

  const testimonials = [
    {
      name: "Fernanda Souza",
      role: "Trader desde 2023",
      image: testimonial1,
      text: "Comecei do zero e em poucos meses já estava operando com consistência. A didática é incrível!",
    },
  ];

  const stats = [
    { value: "300+", label: "Alunos" },
    { value: "R$ 100k+", label: "Lucro Gerado" },
    { value: "97%", label: "Satisfação" },
    { value: "1 Ano", label: "No Mercado" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Trading Dashboard"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-pulse-subtle" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Vagas Limitadas — Inscreva-se Agora</span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Aprenda a operar futuros na Binance com{" "}
              <span className="text-gradient">segurança e consistência</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Transforme conhecimento em lucro com a mentoria ProFuturos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/mentoria">
                <Button variant="hero" size="xl">
                  Quero começar agora
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que escolher a <span className="text-primary">ProFuturos</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Aqui você não encontra promessas vazias. Nossa metodologia é baseada em anos de experiência real no mercado de futuros. Com acompanhamento próximo, conteúdo didático e uma comunidade ativa, você terá tudo o que precisa para operar com segurança e construir resultados de verdade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl" />
              <img
                src={mentorAvatar}
                alt="Julia Jesus - Mentor"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-card"
              />
            </div>

            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Conheça Seu <span className="text-primary">Mentor</span>
              </h2>
              <h3 className="text-xl font-semibold text-foreground mb-4">Julia Jesus</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Trader profissional há mais de 2 anos, especialista em mercado de futuros de criptomoedas. 
                Já ajudou mais de 300 alunos a desenvolverem suas habilidades no mercado financeiro.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "2+ anos de experiência no mercado",
                  "Certificado pela CVM",
                  "Mais de R$ 100 k em operações",
                  "Metodologia própria e comprovada",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/mentoria">
                <Button variant="hero" size="lg">
                  Conhecer a Mentoria
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que nossos <span className="text-primary">alunos</span> dizem
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
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
                    <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">"{testimonial.text}"</p>
                <div className="flex gap-1 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Pronto Para Transformar Sua{" "}
            <span className="text-primary">Vida Financeira</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Junte-se a mais de 2.500 alunos que já mudaram suas vidas através do mercado de futuros.
          </p>
          <Link to="/mentoria">
            <Button variant="hero" size="xl">
              Começar Minha Jornada
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
