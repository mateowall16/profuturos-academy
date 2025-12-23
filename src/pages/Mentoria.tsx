import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Play, Shield, Clock, Users, BookOpen, MessageCircle, Video, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-trading.jpg";

const Mentoria = () => {
  const modules = [
    {
      title: "Módulo 1: Fundamentos",
      lessons: ["Introdução ao Mercado de Futuros", "Como Funciona a Binance", "Alavancagem e Margem", "Tipos de Ordens"],
    },
    {
      title: "Módulo 2: Análise Técnica",
      lessons: ["Candlesticks e Padrões", "Suporte e Resistência", "Indicadores Essenciais", "Fibonacci e Pivôs"],
    },
    {
      title: "Módulo 3: Estratégias",
      lessons: ["Scalping Profissional", "Day Trade Avançado", "Swing Trade", "Operando Tendências"],
    },
    {
      title: "Módulo 4: Gestão de Risco",
      lessons: ["Calculando Posição", "Stop Loss Inteligente", "Gerenciamento Emocional", "Diário de Trading"],
    },
  ];

  const benefits = [
    { icon: Video, text: "+50 aulas em vídeo HD" },
    { icon: BookOpen, text: "Material complementar em PDF" },
    { icon: MessageCircle, text: "Grupo VIP no Telegram" },
    { icon: Users, text: "Lives semanais ao vivo" },
    { icon: Clock, text: "Acesso vitalício" },
    { icon: Shield, text: "Garantia de 7 dias" },
  ];

  const pricing = {
    original: "2.997",
    current: "997",
    installments: "12x de R$ 99,70",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Trading" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Oferta Especial - Últimas Vagas</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Mentoria <span className="text-gradient">ProFuturos</span> Academy
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              O programa completo para você dominar o mercado de futuros e construir uma carreira sólida como trader profissional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/checkout">
                <Button variant="hero" size="xl">
                  Garantir Minha Vaga
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button variant="heroOutline" size="xl">
                <Play className="w-5 h-5" />
                Assistir Apresentação
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              O Que Você Vai <span className="text-primary">Aprender</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conteúdo estruturado do zero ao avançado para você se tornar um trader consistente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {modules.map((module, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all"
              >
                <h3 className="font-display font-semibold text-lg text-primary mb-4">{module.title}</h3>
                <ul className="space-y-3">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <li key={lessonIndex} className="flex items-center gap-3 text-foreground text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              O Que Está <span className="text-primary">Incluso</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border/50"
              >
                <benefit.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-card border-2 border-primary/50 relative overflow-hidden">
              {/* Badge */}
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold rounded-bl-lg">
                MAIS POPULAR
              </div>

              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">Mentoria Completa</h3>
                <p className="text-muted-foreground text-sm">Acesso vitalício + Bônus Exclusivos</p>
              </div>

              <div className="text-center mb-8">
                <div className="text-muted-foreground line-through text-lg">De R$ {pricing.original}</div>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-sm text-muted-foreground">Por apenas</span>
                  <span className="font-display text-5xl font-bold text-primary">R$ {pricing.current}</span>
                </div>
                <div className="text-muted-foreground mt-2">ou {pricing.installments}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Acesso imediato a todos os módulos",
                  "Grupo VIP no Telegram",
                  "Lives semanais com mentor",
                  "Suporte via WhatsApp",
                  "Certificado de conclusão",
                  "Atualizações gratuitas",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/checkout">
                <Button variant="hero" size="xl" className="w-full">
                  Quero Começar Agora
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                Garantia incondicional de 7 dias
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Garantia <span className="text-primary">Incondicional</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Se em até 7 dias você sentir que a mentoria não é para você, basta enviar um e-mail 
              e devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
            </p>
            <Link to="/checkout">
              <Button variant="hero" size="lg">
                Começar Sem Risco
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mentoria;
