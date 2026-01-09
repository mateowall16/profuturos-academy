import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

type CourseModule = {
  id: number;
  title: string;
  type: "recorded" | "live";
};

type Lesson = {
  id: number;
  module_id: number;
  title: string;
  duration_seconds: number;
};

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [modules, setModules] = useState<CourseModule[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);

  /* ================= FETCH MODULES ================= */
  const fetchModules = async () => {
    const { data, error } = await supabase
      .from("course_modules")
      .select("id, title, type")
      .order("order_index");

    if (error) {
      console.error("Erro ao buscar módulos:", error);
      return;
    }

    setModules(data);
  };

  /* ================= FETCH LESSONS ================= */
  const fetchLessons = async () => {
    const { data, error } = await supabase
      .from("lessons")
      .select("id, module_id, title, duration_seconds")
      .order("order_index");

    if (error) {
      console.error("Erro ao buscar aulas:", error);
      return;
    }

    setLessons(data);
  };

  useEffect(() => {
    if (!user) return;
    fetchModules();
    fetchLessons();
  }, [user]);

  /* ================= UI ================= */
  return (
    <div className="container mx-auto max-w-5xl py-8">
      <h1 className="text-2xl font-bold mb-6">Mentoria Pro Futuros</h1>

      {modules.map((module) => (
        <div key={module.id} className="mb-6 border rounded-lg p-4">
          <h2 className="font-semibold text-lg mb-2">
            {module.title}
          </h2>

          <ul className="space-y-2">
            {lessons
              .filter((lesson) => lesson.module_id === module.id)
              .map((lesson) => (
                <li
                  key={lesson.id}
                  className="flex justify-between items-center cursor-pointer hover:underline"
                  onClick={() => navigate(`/aula/${lesson.id}`)}
                >
                  <span>{lesson.title}</span>
                  <span className="text-sm text-muted-foreground">
                    {Math.floor(lesson.duration_seconds / 60)}:
                    {(lesson.duration_seconds % 60)
                      .toString()
                      .padStart(2, "0")}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
