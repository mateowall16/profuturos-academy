import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import clsx from "clsx";

type Lesson = {
  id: number;
  title: string;
  embedUrl: string;
};

const lessons: Lesson[] = [
  {
    id: 1,
    title: "Apresentação da Mentoria",
    embedUrl:
      "https://drive.google.com/file/d/1ANxz2tgNhdM3hNxW9l_0EdEPeDhHPp5I/preview",
  },
  {
    id: 2,
    title: "TradingView + Futuros na Teoria",
    embedUrl:
      "https://drive.google.com/file/d/1DDr03aWbqb0176RWp4De1CRb_JEV0NMJ/preview",
  },
  {
    id: 3,
    title: "RSI + Buy & Sell + Revisão",
    embedUrl:
      "https://drive.google.com/file/d/1R_bwV8cnWdTgA3mMxD5WWTg9a9nuFbn_/preview",
  },
  {
    id: 4,
    title: "Binance + Operação ao Vivo",
    embedUrl:
      "https://drive.google.com/file/d/1_JzxXQPFbsvEzpNHCaAyEr9Lbu-P5yfk/preview",
  },
];

const LessonPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentId = Number(id);
  const lesson = lessons.find((l) => l.id === currentId);

  const completedLessons: number[] = JSON.parse(
    localStorage.getItem("completed_lessons") || "[]"
  );

  const isCompleted = completedLessons.includes(currentId);

  const markAsCompleted = () => {
    if (!isCompleted) {
      localStorage.setItem(
        "completed_lessons",
        JSON.stringify([...completedLessons, currentId])
      );
    }
  };

  const nextLesson = lessons.find((l) => l.id === currentId + 1);

  if (!lesson) {
    return (
      <div className="container py-20 text-center">
        <p className="text-muted-foreground">Aula não encontrada.</p>
        <Link to="/dashboard">
          <Button className="mt-4">Voltar ao dashboard</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="border-b border-border bg-card">
        <div className="container h-16 flex items-center justify-between">
          <Link
            to="/dashboard"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            ← Voltar para o dashboard
          </Link>

          <span className="text-sm text-muted-foreground">
            Módulo 0 — Início
          </span>
        </div>
      </header>

      {/* CONTEÚDO */}
      <main className="container py-8 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
        {/* PLAYER + INFO */}
        <section className="space-y-6">
          {/* PLAYER */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
            <iframe
              src={lesson.embedUrl}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>

          {/* INFO */}
          <div>
            <h1 className="font-display text-2xl font-bold mb-1">
              {lesson.title}
            </h1>
            <p className="text-sm text-muted-foreground">
              Aula focada em aprendizado prático e direto ao ponto.
            </p>
          </div>

          {/* AÇÕES */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              onClick={markAsCompleted}
            >
              Marcar como concluída
            </Button>

            {isCompleted && (
              <div className="flex items-center gap-2 text-green-500 text-sm">
                <CheckCircle className="w-5 h-5" />
                Aula concluída
              </div>
            )}
          </div>
        </section>

        {/* SIDEBAR */}
        <aside className="bg-card border border-border rounded-xl p-4 space-y-4">
          <div>
            <h3 className="font-semibold text-sm">
              Módulo 0 — Início
            </h3>
            <p className="text-xs text-muted-foreground">
              {lessons.length} aulas
            </p>
          </div>

          <div className="space-y-2">
            {lessons.map((item) => {
              const active = item.id === currentId;
              const completed = completedLessons.includes(item.id);

              return (
                <Link
                  key={item.id}
                  to={`/aula/${item.id}`}
                  className={clsx(
                    "flex items-center gap-3 p-2 rounded-lg border transition",
                    active
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/40"
                  )}
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded bg-muted">
                    {completed ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <span className="text-sm font-semibold">
                        {item.id}
                      </span>
                    )}
                  </div>

                  <span className="text-sm line-clamp-2">
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </div>

          {nextLesson && (
            <Button
              className="w-full"
              onClick={() => navigate(`/aula/${nextLesson.id}`)}
            >
              Ir para a próxima aula
            </Button>
          )}
        </aside>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border py-6">
        <div className="container text-center text-sm text-muted-foreground">
          © ProFuturos Academy — Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
};

export default LessonPage;
