import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type Lesson = {
  id: number;
  module_id: number;
  title: string;
  description: string | null;
  video_url: string;
};

export default function LessonPage() {
  const { id } = useParams<{ id: string }>();
  const lessonId = Number(id);

  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);

  /* ================= FETCH LESSON ================= */
  const fetchLesson = async () => {
    const { data, error } = await supabase
      .from("lessons")
      .select("*")
      .eq("id", lessonId)
      .single();

    if (error) {
      console.error(error);
      return;
    }

    setLesson(data);
  };

  /* ================= FETCH MODULE LESSONS ================= */
  const fetchLessons = async (moduleId: number) => {
    const { data, error } = await supabase
      .from("lessons")
      .select("*")
      .eq("module_id", moduleId)
      .order("order_index");

    if (error) {
      console.error(error);
      return;
    }

    setLessons(data);
  };

  /* ================= MARK AS COMPLETED ================= */
  const markAsCompleted = async () => {
    if (!user || !lesson) return;

    const { error } = await supabase
      .from("lesson_progress")
      .upsert(
        {
          user_id: user.id,
          lesson_id: lesson.id,
          completed: true,
          completed_at: new Date().toISOString(),
        },
        { onConflict: "user_id,lesson_id" }
      );

    if (error) {
      toast({
        title: "Erro",
        description: "Não foi possível salvar o progresso.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Aula concluída 🎉",
      description: "Seu progresso foi salvo.",
    });
  };

  useEffect(() => {
    if (!lessonId) return;

    fetchLesson();
  }, [lessonId]);

  useEffect(() => {
    if (lesson?.module_id) {
      fetchLessons(lesson.module_id);
    }
  }, [lesson]);

  if (!lesson) {
    return <div className="p-8">Carregando aula...</div>;
  }

  /* ================= UI ================= */
  return (
    <div className="flex min-h-screen">
      {/* SIDEBAR */}
      <aside className="w-80 border-r bg-muted/30 p-4 hidden md:block">
        <h2 className="font-semibold mb-4">Aulas do módulo</h2>

        <ul className="space-y-2">
          {lessons.map((l) => (
            <li
              key={l.id}
              onClick={() => navigate(`/aula/${l.id}`)}
              className={`cursor-pointer rounded px-3 py-2 text-sm transition
                ${
                  l.id === lesson.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
            >
              {l.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 p-6 max-w-5xl mx-auto">
        <button
          onClick={() => navigate("/dashboard")}
          className="text-sm text-muted-foreground mb-4"
        >
          ← Voltar para o curso
        </button>

        <h1 className="text-2xl font-bold mb-4">{lesson.title}</h1>

        {/* PLAYER */}
        <div className="aspect-video bg-black rounded overflow-hidden mb-6">
          <iframe
            src={lesson.video_url}
            className="w-full h-full"
            allow="autoplay; fullscreen"
            allowFullScreen
            title={lesson.title}
          />
        </div>

        {lesson.description && (
          <p className="text-muted-foreground mb-6">
            {lesson.description}
          </p>
        )}

        <Button onClick={markAsCompleted}>
          Concluir aula
        </Button>
      </main>
    </div>
  );
}
