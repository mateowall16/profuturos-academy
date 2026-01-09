import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

/* =======================
   TYPES
======================= */

type Lesson = {
  id: number;
  title: string;
  description: string | null;
  order_index: number;
};

type LessonProgress = {
  lesson_id: number;
  completed: boolean;
};

/* =======================
   HELPERS
======================= */

// imagem temporária baseada na ordem (até ter thumbnail no banco)
const lessonImages: Record<number, string> = {
  1: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200",
  2: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200",
  3: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200",
  4: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1200",
};

/* =======================
   COMPONENT
======================= */

const Dashboard = () => {
  const navigate = useNavigate();
  const { profile, signOut, user } = useAuth();

  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [progress, setProgress] = useState<LessonProgress[]>([]);
  const [loading, setLoading] = useState(true);

  /* =======================
     LOAD DATA
  ======================= */

  useEffect(() => {
    if (!user) return;

    const loadData = async () => {
      setLoading(true);

      const { data: lessonsData } = await supabase
        .from("lessons")
        .select("id, title, description, order_index")
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

  const handleLogout = async () => {
    await signOut();
    navigate("/login", { replace: true });
  };

  if (!profile || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Carregando dashboard...</p>
      </div>
    );
  }

  /* =======================
     DERIVED DATA
  ======================= */

  const completedIds = progress
    .filter((p) => p.completed)
    .map((p) => p.lesson_id);

  const nextLesson =
    lessons.find((l) => !completedIds.includes(l.id)) || lessons[0];

  const progressPercent =
    lessons.length > 0
      ? Math.round((completedIds.length / lessons.length) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <div className="text-xl font-bold tracking-widest text-primary">
            JFN
          </div>

          <Button variant="outline" size="sm" onClick={handleLogout}>
            Sair
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />

        <div className="container relative py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Bem-vindo, {profile.full_name || "Aluno"}
            </h1>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Seu progresso é salvo automaticamente. Continue exatamente de onde
              parou.
            </p>

            <div className="flex items-center gap-4">
              <Button
                size="lg"
                onClick={() => navigate(`/aula/${nextLesson.id}`)}
              >
                ▶️ Continuar aula
              </Button>

              <span className="text-sm text-muted-foreground">
                {progressPercent}% concluído
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 to-transparent z-10" />
            <img
              src="/imagens/mentor-avatar.jpeg"
              alt="Mentora"
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
          {lessons.map((lesson) => {
            const completed = completedIds.includes(lesson.id);

            return (
              <Card
                key={lesson.id}
                className="group overflow-hidden border-border hover:border-primary/50 transition"
              >
                <div
                  className="h-40 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${
                      lessonImages[lesson.order_index] ||
                      lessonImages[1]
                    })`,
                  }}
                >
                  <div className="h-full w-full bg-black/40 group-hover:bg-black/20 transition" />
                </div>

                <CardContent className="p-5">
                  <div className="space-y-2 mb-5">
                    <h3 className="font-display font-semibold">
                      {lesson.order_index}. {lesson.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {lesson.description ||
                        "Aula focada em aprendizado prático e direto ao ponto."}
                    </p>
                  </div>

                  <Button
                    className="w-full"
                    variant={completed ? "outline" : "default"}
                    onClick={() => navigate(`/aula/${lesson.id}`)}
                  >
                    {completed ? "Rever aula" : "Assistir aula"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
