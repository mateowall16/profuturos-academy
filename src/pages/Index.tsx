import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Users, Award, Shield } from "lucide-react";
import heroImage from "@/assets/hero-trading.jpg";
import mentorAvatar from "@/assets/mentor-avatar.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Estratégias Comprovadas",
      description: "Aprenda técnicas testadas e aprovadas para operar futuros com consistência e segurança.",
    },
    {
      icon: Users,
      title: "Comunidade Exclusiva",
      description: "Faça parte de um grupo seleto de traders que compartilham conhecimento e experiências.",
    },
    {
      icon: Award,
      title: "Suporte Premium",
      description: "Acesso direto ao mentor e suporte da equipe para tirar suas dúvidas em tempo real.",
    },
    {
      icon: Shield,
      title: "Gestão de Risco",
      description: "Domine as técnicas de gerenciamento de risco para proteger seu capital.",
    },
  ];

  const testimonials = [
    {
      name: "Carla Mendes",
      role: "Trader Profissional",
      image: testimonial1,
      text: "Em 6 meses de mentoria, consegui sair do negativo e hoje opero com consistência. A metodologia do Rafael é incrível!",
    },
    {
      name: "Roberto Silva",
      role: "Empresário",
      image: testimonial2,
      text: "Nunca imaginei que conseguiria operar futuros. A mentoria me deu a confiança e o conhecimento necessário.",
    },
    {
      name: "Lucas Oliveira",
      role: "Desenvolvedor",
      image: testimonial3,
      text: "O suporte é excepcional. Sempre que tenho dúvidas, recebo respostas rápidas e precisas. Recomendo demais!",
    },
  ];

  const stats = [
    { value: "2.500+", label: "Alunos" },
    { value: "R$ 15M+", label: "Lucro Gerado" },
    { value: "98%", label: "Satisfação" },
    { value: "4 Anos", label: "No Mercado" },
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
              <span className="text-sm text-primary font-medium">Vagas Limitadas para 2024</span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Domine o Mercado de{" "}
              <span className="text-gradient">Futuros</span> na Binance
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              A mentoria definitiva para você aprender a operar contratos futuros com estratégias comprovadas e conquistar sua liberdade financeira.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/mentoria">
                <Button variant="hero" size="xl">
                  Quero Começar Agora
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button variant="heroOutline" size="xl">
                <Play className="w-5 h-5" />
                Ver Aula Grátis
              </Button>
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
              Por Que Escolher a <span className="text-primary">ProFuturos</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nossa metodologia foi desenvolvida para transformar iniciantes em traders consistentes e lucrativos.
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
                alt="Rafael Costa - Mentor"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-card"
              />
            </div>

            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Conheça Seu <span className="text-primary">Mentor</span>
              </h2>
              <h3 className="text-xl font-semibold text-foreground mb-4">Rafael Costa</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Trader profissional há mais de 8 anos, especialista em mercado de futuros de criptomoedas. 
                Já ajudou mais de 2.500 alunos a desenvolverem suas habilidades no mercado financeiro.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "8+ anos de experiência no mercado",
                  "Certificado pela CVM",
                  "Mais de R$ 15 milhões em operações",
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
              O Que Nossos <span className="text-primary">Alunos</span> Dizem
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Histórias reais de pessoas que transformaram suas vidas através da nossa mentoria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">"{testimonial.text}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
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
