import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  TrendingUp,
  ShieldCheck,
  Brain,
  Video,
  LogOut,
  GraduationCap,
  MessageCircle,
  Lock,
  CheckCircle,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import Logo from "@/components/Logo";

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
  const [progress, setProgress] = useState(0);

  const { toast } = useToast();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

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

  /* ================= LOAD COMPLETED ================= */
  useEffect(() => {
    const saved = localStorage.getItem("completedModules");
    if (saved) {
      setCompletedModules(JSON.parse(saved));
    }

    const userName = user?.user_metadata?.full_name || "Aluno";
    toast({
      title: `🎓 Bem-vindo(a), ${userName}!`,
      description: "Continue sua trilha de aprendizado.",
    });
  }, [toast, user?.user_metadata?.full_name]);

  /* ================= CALC PROGRESS ================= */
  useEffect(() => {
    const percent = Math.round(
      (completedModules.length / modules.length) * 100
    );
    setProgress(percent);
  }, [completedModules, modules.length]);

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

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  const activeModule = modules.find((m) => m.id === selectedModule);

  return (
    <div className="min-h-screen bg-background">
      {/* ================= HEADER ================= */}
      <header className="border-b border-border bg-card/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Logo size="lg" />

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {user?.email}
            </span>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Sair</span>
            </button>
          </div>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="container mx-auto px-4 py-10">
        {/* Progress */}
        <div className="bg-card border border-border rounded-xl p-6 mb-10">
          <div className="flex justify-between mb-2">
            <span className="font-medium">Progresso da trilha</span>
            <span className="text-primary font-semibold">{progress}%</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        {/* Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => {
            const completed = completedModules.includes(module.id);

            return (
              <div
                key={module.id}
                onClick={() => {
                  if (!module.locked) setSelectedModule(module.id);
                }}
                className={`relative bg-card border rounded-xl overflow-hidden cursor-pointer transition
                  ${
                    completed
                      ? "border-primary"
                      : "border-border hover:border-primary/50"
                  }`}
              >
                {completed && (
                  <div className="absolute top-3 right-3 z-10">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                )}

                {module.locked && (
                  <div className="absolute inset-0 bg-background/80 backdrop-blur z-10 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-muted-foreground" />
                  </div>
                )}

                <div className="aspect-video">
                  <img
                    src={module.thumbnail}
                    alt={module.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-semibold">{module.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {module.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= MODAL ================= */}
        {selectedModule && activeModule && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur z-50 flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-2xl w-full max-w-5xl overflow-hidden">
              <div className="aspect-video bg-black">
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

              <div className="p-6 flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setSelectedModule(null)}
                >
                  Fechar
                </Button>

                {!completedModules.includes(activeModule.id) && (
                  <Button onClick={() => markAsCompleted(activeModule.id)}>
                    Marcar como concluída
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
