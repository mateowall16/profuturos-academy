import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, PlayCircle, FileText } from "lucide-react";
import clsx from "clsx";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

type Lesson = {
  id: number;
  title: string;
  video_url: string;
  order_index: number;
};

type LessonProgress = {
  lesson_id: number;
  completed: boolean;
};

const LessonPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [progress, setProgress] = useState<LessonProgress[]>([]);
  const [loading, setLoading] = useState(true);

  const currentId = Number(id);

  /* =======================
     LOAD DATA
  ======================= */
  useEffect(() => {
    if (!user) return;

    const loadData = async () => {
      setLoading(true);

      const { data: lessonsData } = await supabase
        .from("lessons")
        .select("id, title, video_url, order_index")
        .order("order_index");

      const { data: progressData } = await supabase
        .from("lesson_progress")
        .select("lesson_id, completed")
        .eq("user_id", user.id);

      setLessons(lessonsData || []);
      setProgress(progressData || []);
      setLoading(false);
    };

    loadData();
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Carregando aula...</p>
      </div>
    );
  }

  const lesson = lessons.find((l) => l.id === currentId);
  const completedLessons = progress.filter((p) => p.completed).map((p) => p.lesson_id);

  const isCompleted = completedLessons.includes(currentId);
  const nextLesson = lessons.find((l) => l.order_index === lesson?.order_index + 1);

  const progressPercent = Math.round(
    (completedLessons.length / lessons.length) * 100
  );

  /* =======================
     ACTIONS
  ======================= */

  const markAsCompleted = async () => {
    if (!user || isCompleted) return;

    await supabase.from("lesson_progress").upsert({
      user_id: user.id,
      lesson_id: currentId,
      completed: true,
      completed_at: new Date().toISOString(),
    });

    setProgress((prev) => [
      ...prev,
      { lesson_id: currentId, completed: true },
    ]);
  };

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
        {/* PLAYER */}
        <section className="space-y-6">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
            <iframe
              src={lesson.video_url}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>

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
            <Button size="lg" onClick={markAsCompleted} disabled={isCompleted}>
              {isCompleted ? "Aula concluída" : "Marcar como concluída"}
            </Button>

            {isCompleted && (
              <div className="flex items-center gap-2 text-green-500 text-sm">
                <CheckCircle className="w-5 h-5" />
                Concluída
              </div>
            )}
          </div>
        </section>

        {/* SIDEBAR */}
        <aside className="bg-card border border-border rounded-xl p-4 space-y-4 h-fit lg:sticky lg:top-24">
          {/* PROGRESSO */}
          <div>
            <h3 className="font-semibold text-sm">Módulo 0 — Início</h3>

            <div className="w-full h-2 bg-muted rounded overflow-hidden mt-2">
              <div
                className="h-full bg-primary"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <p className="text-xs text-muted-foreground mt-1">
              {progressPercent}% concluído
            </p>
          </div>

          {/* LISTA DE AULAS */}
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
                    ) : active ? (
                      <PlayCircle className="w-5 h-5 text-primary" />
                    ) : (
                      <span className="text-sm font-semibold">
                        {item.order_index}
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

          {/* PRÓXIMA AULA */}
          {nextLesson ? (
            <Button
              className="w-full"
              onClick={() => navigate(`/aula/${nextLesson.id}`)}
            >
              Ir para a próxima aula
            </Button>
          ) : (
            <p className="text-center text-sm text-muted-foreground">
              🎉 Você concluiu este módulo
            </p>
          )}
        </aside>
      </main>
    </div>
  );
};

export default LessonPage;
