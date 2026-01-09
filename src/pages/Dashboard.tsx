import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const lessons = [
  {
    id: 1,
    title: "Apresentação da Mentoria",
    description: "Boas-vindas e visão geral do método",
    url: "https://drive.google.com/file/d/1ANxz2tgNhdM3hNxW9l_0EdEPeDhHPp5I/view",
  },
  {
    id: 2,
    title: "TradingView + Futuros na Teoria",
    description: "Plataforma, conceitos e base teórica",
    url: "https://drive.google.com/file/d/1DDr03aWbqb0176RWp4De1CRb_JEV0NMJ/view",
  },
  {
    id: 3,
    title: "RSI + Buy & Sell + Revisão",
    description: "Indicadores e leitura prática",
    url: "https://drive.google.com/file/d/1R_bwV8cnWdTgA3mMxD5WWTg9a9nuFbn_/view",
  },
  {
    id: 4,
    title: "Binance + Operação ao Vivo",
    description: "Execução real e análise prática",
    url: "https://drive.google.com/file/d/1_JzxXQPFbsvEzpNHCaAyEr9Lbu-P5yfk/view",
  },
];

const Dashboard = () => {
  const userName = localStorage.getItem("user_name") || "Aluno";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-display font-bold text-lg">
            ProFuturos Academy
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-muted-foreground">
            <Link to="/dashboard" className="hover:text-primary">
              Início
            </Link>
            <Link to="/mentoria" className="hover:text-primary">
              Conteúdos
            </Link>
            <Link to="/faq" className="hover:text-primary">
              Suporte
            </Link>
          </nav>

          <Button variant="outline" size="sm">
            Sair
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
        <div className="container relative py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Bem-vindo, {userName}
            </h1>
            <p className="text-muted-foreground mb-6">
              Continue sua jornada com aulas organizadas e focadas em resultado.
            </p>

            <Link to={`/aula/${lessons[0].id}`}>
              <Button size="lg">Começar agora</Button>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/30 to-primary/5 border border-border" />
          </div>
        </div>
      </section>

      {/* AULAS */}
      <section className="container py-12 space-y-6">
        <h2 className="font-display text-2xl font-semibold">
          Aulas disponíveis
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {lessons.map((lesson) => (
            <Card
              key={lesson.id}
              className="group hover:border-primary/50 transition"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-primary/5 border-b border-border" />

              <CardContent className="p-5 space-y-3">
                <h3 className="font-display font-semibold">
                  {lesson.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lesson.description}
                </p>

                <Link to={`/aula/${lesson.id}`}>
                  <Button className="w-full">Assistir aula</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-6 mt-12">
        <div className="container text-center text-sm text-muted-foreground">
          © ProFuturos Academy — Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
