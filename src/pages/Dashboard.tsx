import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Video,
  LogOut,
  CheckCircle,
  BookOpen,
  Users,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import Logo from "@/components/Logo";
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import IntroVideo from "@/components/dashboard/IntroVideo";
import ProgressChecklist from "@/components/dashboard/ProgressChecklist";
import { supabase } from "@/integrations/supabase/client";

/* ================= TYPES ================= */
type Module = {
  id: number;
  title: string;
  description: string | null;
  thumbnail: string | null;
  video_url: string | null;
  order_index: number;
  is_free: boolean;
};

const Dashboard = () => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [introVideoWatched, setIntroVideoWatched] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  // PASSO 1
  const [isPaid, setIsPaid] = useState<boolean>(false);

  // PASSO 2
  const [modules, setModules] = useState<Module[]>([]);

  const { toast } = useToast();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const userName =
    user?.user_metadata?.full_name ||
    user?.email?.split("@")[0] ||
    "Aluno";

  /* ================= LOCAL STATE (apenas UI) ================= */
  useEffect(() => {
    const savedIntroWatched = localStorage.getItem("introVideoWatched");
    if (savedIntroWatched === "true") {
      setIntroVideoWatched(true);
    }

    const visitCount = localStorage.getItem("dashboardVisits");
    if (visitCount && parseInt(visitCount) > 1) {
      setIsFirstVisit(false);
    }

    localStorage.setItem(
      "dashboardVisits",
      String(parseInt(visitCount || "0") + 1)
    );
  }, []);

  /* ================= FETCH PROFILE ================= */
  const fetchProfile = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from("profiles")
      .select("is_paid")
      .eq("id", user.id)
      .single<{ is_paid: boolean }>();

    if (error) {
      console.error("Erro ao buscar profile:", error);
      return;
    }

    setIsPaid(data.is_paid);
  };

  /* ================= FETCH MODULES ================= */
  
  
  
const fetchModules = async () => {
  const { data, error } = await supabase
    .from("modules")
    .select("*")
    .order("order_index", { ascending: true });

  console.log("modules data:", data);
  console.log("modules error:", error);

  if (error) {
    console.error("Erro ao buscar módulos:", error);
    return;
  }

  setModules(data);
};


  /* ================= PASSO 3 — FETCH USER PROGRESS ================= */
  const fetchUserProgress = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from("user_progress")
      .select("module_id")
      .eq("user_id", user.id)
      .eq("completed", true);

    if (error) {
      console.error("Erro ao buscar progresso:", error);
      return;
    }

    const completedIds = data.map((item) => item.module_id);
    setCompletedModules(completedIds);
  };

  useEffect(() => {
    if (!user) return;

    fetchProfile();
    fetchModules();
    fetchUserProgress();
  }, [user]);

  /* ================= PROGRESS ================= */
  const moduleProgress = modules.length
    ? Math.round((completedModules.length / modules.length) * 100)
    : 0;

  /* ================= ACTIONS ================= */
  const markAsCompleted = async (moduleId: number) => {
  if (!user) return;
  if (completedModules.includes(moduleId)) return;

  const { error } = await supabase
    .from("user_progress")
    .upsert(
      {
        user_id: user.id,
        module_id: moduleId,
        completed: true,
      },
      {
        onConflict: "user_id,module_id",
      }
    );

  if (error) {
    console.error("Erro ao salvar progresso:", error);
    toast({
      title: "Erro",
      description: "Não foi possível salvar seu progresso.",
      variant: "destructive",
    });
    return;
  }

  setCompletedModules((prev) => [...prev, moduleId]);

  toast({
    title: "Aula concluída 🎉",
    description: "Seu progresso foi salvo com sucesso.",
  });

  setSelectedModule(null);
};


  const handleIntroVideoWatched = () => {
    setIntroVideoWatched(true);
    localStorage.setItem("introVideoWatched", "true");
    toast({
      title: "Vídeo assistido ✓",
      description: "Ótimo começo! Agora siga os próximos passos.",
    });
  };

  const handleStartFirstLesson = () => {
    if (modules[0]) setSelectedModule(modules[0].id);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  const activeModule = modules.find((m) => m.id === selectedModule);

  /* ================= CHECKLIST ================= */
  const checklistItems = [
    {
      id: "intro-video",
      title: "Assista ao vídeo de boas-vindas",
      description: "Entenda como a mentoria funciona e o que esperar.",
      completed: introVideoWatched,
      icon: <Video className="w-4 h-4" />,
    },
    {
      id: "first-lesson",
      title: "Complete sua primeira aula",
      description: "Comece pelo primeiro módulo.",
      completed: completedModules.length > 0,
      action: handleStartFirstLesson,
      actionLabel: "Assistir",
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      id: "join-group",
      title: "Entre no grupo de alunos",
      description: "Conecte-se com outros traders da mentoria.",
      completed: false,
      action: () =>
        window.open("https://wa.me/5511999999999", "_blank"),
      actionLabel: "Entrar",
      icon: <Users className="w-4 h-4" />,
    },
    {
      id: "meet-probot",
      title: "Conheça o ProBot",
      description: "Tire suas dúvidas com nosso assistente 24h.",
      completed: false,
      action: () => {
        const btn = document.querySelector(
          "[data-probot-toggle]"
        ) as HTMLButtonElement;
        btn?.click();
      },
      actionLabel: "Abrir",
      icon: <MessageCircle className="w-4 h-4" />,
    },
  ];

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Logo size="lg" />

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {user?.email}
            </span>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Sair</span>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {isFirstVisit && (
          <WelcomeBanner
            userName={userName}
            onStartFirstLesson={handleStartFirstLesson}
          />
        )}

        <IntroVideo
          onWatched={handleIntroVideoWatched}
          isWatched={introVideoWatched}
        />

        <ProgressChecklist items={checklistItems} />

        {/* ================= MODULES SECTION ================= */}
        <div className="mb-8">
          <div className="mb-6">
            <h2 className="font-semibold text-lg">Seus Módulos</h2>
            <p className="text-sm text-muted-foreground">
              {completedModules.length} de {modules.length} concluídos (
              {moduleProgress}%)
            </p>
          </div>

          <div className="h-2 bg-secondary rounded-full mb-6 overflow-hidden">
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${moduleProgress}%` }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((module) => {
              const completed = completedModules.includes(module.id);

              return (
                <div
                  key={module.id}
                  onClick={() => setSelectedModule(module.id)}
                  className={`relative bg-card border rounded-xl overflow-hidden cursor-pointer transition-all hover:scale-[1.02]
                    ${
                      completed
                        ? "border-primary/50 bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                >
                  {completed && (
                    <div className="absolute top-3 right-3 z-10">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                  )}

                  <div className="aspect-video relative">
                    {module.thumbnail && (
                      <img
                        src={module.thumbnail}
                        alt={module.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <h3 className="font-semibold text-sm">
                        {module.title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {module.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* ================= VIDEO MODAL ================= */}
      {selectedModule && activeModule && (
        <div className="fixed inset-0 bg-background/90 backdrop-blur z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-2xl w-full max-w-5xl overflow-hidden">
            <div className="aspect-video bg-secondary">
              {activeModule.video_url ? (
                <iframe
                  src={activeModule.video_url}
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title={activeModule.title}
                />
              ) : (
                <div className="h-full flex items-center justify-center text-muted-foreground">
                  Conteúdo em produção
                </div>
              )}
            </div>

            <div className="p-6 flex flex-col sm:flex-row gap-4 justify-between items-center border-t border-border">
              <div>
                <h3 className="font-semibold">{activeModule.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {activeModule.description}
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setSelectedModule(null)}
                >
                  Fechar
                </Button>

                {!completedModules.includes(activeModule.id) && (
                  <Button onClick={() => markAsCompleted(activeModule.id)}>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Concluir aula
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
