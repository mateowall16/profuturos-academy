import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Lesson = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const lessons: Lesson[] = [
  {
    id: 1,
    title: "1- Apresentação da Mentoria",
    description: "Boas-vindas e visão geral do método",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200",
  },
  {
    id: 2,
    title: "2- TradingView + Futuros na Teoria",
    description: "Plataforma, conceitos e base teórica",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200",
  },
  {
    id: 3,
    title: "3- RSI + Buy & Sell + Revisão",
    description: "Indicadores técnicos e tomada de decisão",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200",
  },
  {
    id: 4,
    title: "4- Binance + Operação ao Vivo",
    description: "Execução prática no mercado real",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1200",
  },
];

const Dashboard = () => {
  const userName = localStorage.getItem("user_name") || "Aluno";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
  <div className="container flex h-16 items-center justify-between">
    {/* LOGO */}
    <div className="text-xl font-bold tracking-widest text-primary">
      JFN
    </div>

    <Button variant="outline" size="sm">
      Sair
    </Button>
  </div>
</header>


      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />

        <div className="container relative py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* TEXTO */}
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Bem-vindo, {userName}
            </h1>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Esta mentoria foi criada para te ensinar, de forma clara e prática,
              como operar no mercado futuro utilizando análise técnica,
              gerenciamento de risco e execução profissional — mesmo que você
              esteja começando do zero.
            </p>

            <Link to="/aula/1">
              <Button size="lg">Continuar assistindo</Button>
            </Link>
          </div>

          {/* FOTO DA JULIA */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 to-transparent z-10" />
            <img
              src="src\Imagens\mentor-avatar.jpg.jpeg"
              className="rounded-2xl object-cover w-full h-[320px] md:h-[380px]"
  style={{ objectPosition: "30% 75%" }}
            />
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
              className="group overflow-hidden border-border hover:border-primary/50 transition"
            >
              <div
                className="h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${lesson.image})` }}
              >
                <div className="h-full w-full bg-black/40 group-hover:bg-black/20 transition" />
              </div>

              <CardContent className="p-5 space-y-3">
                <h3 className="font-display font-semibold">
                  {lesson.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lesson.description}
                </p>

                <Link to={`/aula/${lesson.id}`}>
                  <Button className="w-full">
                    Assistir aula
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-6 mt-12">
        <div className="container text-center text-sm text-muted-foreground">
          © JFN — Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
