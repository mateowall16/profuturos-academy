import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type Lesson = {
  id: number;
  title: string;
  description: string | null;
  video_url: string;
};

type Document = {
  id: number;
  title: string;
  file_url: string;
  type: "pdf" | "sheet" | "link";
};

export default function LessonPage() {
  const { id } = useParams<{ id: string }>();
  const lessonId = Number(id);

  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH LESSON ================= */
  const fetchLesson = async () => {
    const { data, error } = await supabase
      .from("lessons")
      .select("id, title, description, video_url")
      .eq("id", lessonId)
      .single();

    if (error) {
      console.error("Erro ao buscar aula:", error);
      return;
    }

    setLesson(data);
  };

  /* ================= FETCH DOCUMENTS ================= */
  const fetchDocuments = async () => {
    const { data, error } = await supabase
      .from("lesson_documents")
      .select("id, title, file_url, type")
      .eq("lesson_id", lessonId);

    if (error) {
      console.error("Erro ao buscar documentos:", error);
      return;
    }

    setDocuments(data);
  };

  /* ================= MARK AS COMPLETED ================= */
  const markAsCompleted = async () => {
    if (!user) return;

    const { error } = await supabase
      .from("lesson_progress")
      .upsert(
        {
          user_id: user.id,
          lesson_id: lessonId,
          completed: true,
          completed_at: new Date().toISOString(),
        },
        {
          onConflict: "user_id,lesson_id",
        }
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
      description: "Seu progresso foi salvo com sucesso.",
    });
  };

  useEffect(() => {
    if (!lessonId) return;

    Promise.all([fetchLesson(), fetchDocuments()]).finally(() =>
      setLoading(false)
    );
  }, [lessonId]);

  if (loading) {
    return <div className="p-8">Carregando aula...</div>;
  }

  if (!lesson) {
    return <div className="p-8">Aula não encontrada</div>;
  }

  /* ================= UI ================= */
  return (
    <div className="container mx-auto max-w-4xl py-8">
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-muted-foreground mb-4"
      >
        ← Voltar para o curso
      </button>

      <h1 className="text-2xl font-bold mb-4">{lesson.title}</h1>

      {/* PLAYER */}
      <div className="aspect-video mb-6 bg-black rounded overflow-hidden">
        <iframe
          src={lesson.video_url}
          className="w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
          title={lesson.title}
        />
      </div>

      {/* DESCRIÇÃO */}
      {lesson.description && (
        <p className="text-muted-foreground mb-6">
          {lesson.description}
        </p>
      )}

      {/* DOCUMENTOS */}
      {documents.length > 0 && (
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Materiais da aula</h2>
          <ul className="space-y-2">
            {documents.map((doc) => (
              <li key={doc.id}>
                <a
                  href={doc.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  {doc.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CONCLUIR */}
      <Button onClick={markAsCompleted}>
        Concluir aula
      </Button>
    </div>
  );
}
