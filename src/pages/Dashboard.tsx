import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  TrendingUp,
  ShieldCheck,
  Brain,
  Video,
  LogOut,
  GraduationCap,
  Lock,
  CheckCircle,
  BookOpen,
  Users,
  MessageCircle,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import Logo from "@/components/Logo";
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import IntroVideo from "@/components/dashboard/IntroVideo";
import ProgressChecklist from "@/components/dashboard/ProgressChecklist";

/* ================= TYPES ================= */
type Module = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  thumbnail: string;
  videoUrl: string | null;
  locked: boolean;
};

const Dashboard = () => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [introVideoWatched, setIntroVideoWatched] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  const { toast } = useToast();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const userName = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "Aluno";

  /* ================= MÓDULOS ================= */
  const modules: Module[] = [
    {
      id: 1,
      title: "Apresentação da Mentoria",
      description: "Boas-vindas e visão geral da metodologia.",
      icon: GraduationCap,
      thumbnail:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
      videoUrl:
        "https://drive.google.com/file/d/1ANxz2tgNhdM3hNxW9l_0EdEPeDhHPp5I/preview",
      locked: false,
    },
    {
      id: 2,
      title: "TradingView + Futuros na Teoria",
      description: "Entendendo o TradingView e o mercado futuro.",
      icon: TrendingUp,
      thumbnail:
        "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800",
      videoUrl:
        "https://drive.google.com/file/d/1DDr03aWbqb0176RWp4De1CRb_JEV0NMJ/preview",
      locked: false,
    },
    {
      id: 3,
      title: "Gestão de Risco",
      description: "Proteção de capital e controle emocional.",
      icon: ShieldCheck,
      thumbnail:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
      videoUrl: null,
      locked: true,
    },
    {
      id: 4,
      title: "Psicologia do Trader",
      description: "Mentalidade para consistência no mercado.",
      icon: Brain,
      thumbnail:
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800",
      videoUrl: null,
      locked: true,
    },
    {
      id: 5,
      title: "Operações ao Vivo",
      description: "Acompanhamento prático de operações reais.",
      icon: Video,
      thumbnail:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800",
      videoUrl: null,
      locked: true,
    },
  ];

  /* ================= LOAD STATE ================= */
  useEffect(() => {
    const savedCompleted = localStorage.getItem("completedModules");
    if (savedCompleted) {
      setCompletedModules(JSON.parse(savedCompleted));
    }

    const savedIntroWatched = localStorage.getItem("introVideoWatched");
    if (savedIntroWatched === "true") {
      setIntroVideoWatched(true);
    }

    const visitCount = localStorage.getItem("dashboardVisits");
    if (visitCount && parseInt(visitCount) > 1) {
      setIsFirstVisit(false);
    }
    localStorage.setItem("dashboardVisits", String((parseInt(visitCount || "0") + 1)));
  }, []);

  /* ================= CALC PROGRESS ================= */
  const moduleProgress = Math.round(
    (completedModules.length / modules.length) * 100
  );

  /* ================= ACTIONS ================= */
  const markAsCompleted = (id: number) => {
    if (completedModules.includes(id)) return;

    const updated = [...completedModules, id];
    setCompletedModules(updated);
    localStorage.setItem("completedModules", JSON.stringify(updated));

    toast({
      title: "Aula concluída 🎉",
      description: "Seu progresso foi atualizado.",
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
    setSelectedModule(1);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  const activeModule = modules.find((m) => m.id === selectedModule);

  /* ================= CHECKLIST ITEMS ================= */
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
      description: "Comece pelo módulo 'Apresentação da Mentoria'.",
      completed: completedModules.includes(1),
      action: () => setSelectedModule(1),
      actionLabel: "Assistir",
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      id: "join-group",
      title: "Entre no grupo de alunos",
      description: "Conecte-se com outros traders da mentoria.",
      completed: false,
      action: () => window.open("https://wa.me/5511999999999", "_blank"),
      actionLabel: "Entrar",
      icon: <Users className="w-4 h-4" />,
    },
    {
      id: "meet-probot",
      title: "Conheça o ProBot",
      description: "Tire suas dúvidas com nosso assistente 24h.",
      completed: false,
      action: () => {
        const probotButton = document.querySelector('[data-probot-toggle]') as HTMLButtonElement;
        if (probotButton) probotButton.click();
      },
      actionLabel: "Abrir",
      icon: <MessageCircle className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* ================= HEADER ================= */}
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

      {/* ================= MAIN ================= */}
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Welcome Banner - First Visit */}
        {isFirstVisit && (
          <WelcomeBanner 
            userName={userName} 
            onStartFirstLesson={handleStartFirstLesson} 
          />
        )}

        {/* Intro Video */}
        <IntroVideo 
          onWatched={handleIntroVideoWatched} 
          isWatched={introVideoWatched} 
        />

        {/* Progress Checklist */}
        <ProgressChecklist items={checklistItems} />

        {/* Modules Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-semibold text-lg">Seus Módulos</h2>
              <p className="text-sm text-muted-foreground">
                {completedModules.length} de {modules.length} concluídos ({moduleProgress}%)
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-2 bg-secondary rounded-full mb-6 overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${moduleProgress}%` }}
            />
          </div>

          {/* Module cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((module) => {
              const completed = completedModules.includes(module.id);
              const ModuleIcon = module.icon;

              return (
                <div
                  key={module.id}
                  onClick={() => {
                    if (!module.locked) setSelectedModule(module.id);
                  }}
                  className={`relative bg-card border rounded-xl overflow-hidden cursor-pointer transition-all hover:scale-[1.02]
                    ${completed
                      ? "border-primary/50 bg-primary/5"
                      : module.locked 
                        ? "border-border opacity-60 cursor-not-allowed"
                        : "border-border hover:border-primary/50"
                    }`}
                >
                  {completed && (
                    <div className="absolute top-3 right-3 z-10">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                  )}

                  {module.locked && (
                    <div className="absolute inset-0 bg-background/60 backdrop-blur-sm z-10 flex items-center justify-center">
                      <div className="text-center">
                        <Lock className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                        <span className="text-xs text-muted-foreground">Em breve</span>
                      </div>
                    </div>
                  )}

                  <div className="aspect-video relative">
                    <img
                      src={module.thumbnail}
                      alt={module.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <ModuleIcon className="w-4 h-4 text-primary" />
                      <h3 className="font-semibold text-sm">{module.title}</h3>
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
          <div className="bg-card border border-border rounded-2xl w-full max-w-5xl overflow-hidden animate-scale-in">
            <div className="aspect-video bg-secondary">
              {activeModule.videoUrl ? (
                <iframe
                  src={activeModule.videoUrl}
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
                <p className="text-sm text-muted-foreground">{activeModule.description}</p>
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
