import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  TrendingUp,
  Play,
  BookOpen,
  ShieldCheck,
  Brain,
  Video,
  LogOut,
  GraduationCap,
  MessageCircle,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import Logo from "@/components/Logo";

const Dashboard = () => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  // 🔹 Módulos (cenário)
  const modules = [
    {
      id: 1,
      title: "Introdução aos Futuros",
      description: "Fundamentos do mercado futuro e como a Binance funciona.",
      icon: BookOpen,
      thumbnail:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400",
      videoUrl: null, // depois só colocar o link
      locked: false,
    },
    {
      id: 2,
      title: "Estratégias e Setups",
      description: "Setups práticos de entrada e saída.",
      icon: TrendingUp,
      thumbnail:
        "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400",
      videoUrl: null,
      locked: true,
    },
    {
      id: 3,
      title: "Gestão de Risco",
      description: "Proteção de capital e controle emocional.",
      icon: ShieldCheck,
      thumbnail:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
      videoUrl: null,
      locked: true,
    },
    {
      id: 4,
      title: "Psicologia do Trader",
      description: "Mentalidade para consistência no mercado.",
      icon: Brain,
      thumbnail:
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400",
      videoUrl: null,
      locked: true,
    },
    {
      id: 5,
      title: "Operações ao Vivo",
      description: "Acompanhamento prático de operações reais.",
      icon: Video,
      thumbnail:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400",
      videoUrl: null,
      locked: true,
    },
  ];

  // Toast de boas-vindas
  useEffect(() => {
    const userName = user?.user_metadata?.full_name || "Aluno";
    toast({
      title: `🎓 Bem-vindo(a), ${userName}!`,
      description: "Seu acesso foi liberado. Comece pelo primeiro módulo.",
    });
  }, []);

  // Progresso (cenário)
  useEffect(() => {
    const completed = modules.filter((m) => !m.locked).length;
    setProgress(Math.round((completed / modules.length) * 100));
  }, []);

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Sessão encerrada",
      description: "Você saiu da sua conta com sucesso.",
    });
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-50">
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

      {/* Main */}
      <main className="container mx-auto px-4 py-10">
        {/* Welcome */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h1 className="text-2xl md:text-3xl font-bold">
              Área do Aluno
            </h1>
          </div>
          <p className="text-muted-foreground">
            Trilha guiada para aprender a operar com clareza e responsabilidade.
          </p>
        </div>

        {/* Progress */}
        <div className="bg-card border border-border rounded-xl p-6 mb-10">
          <div className="flex justify-between mb-2">
            <span className="font-medium">Progresso da trilha</span>
            <span className="text-primary font-semibold">{progress}%</span>
          </div>
          <Progress value={progress} className="h-3" />
          <p className="text-sm text-muted-foreground mt-3">
            Conteúdo liberado gradualmente para garantir melhor aprendizado.
          </p>
        </div>

        {/* Grupo VIP */}
        <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <MessageCircle className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-semibold">Grupo VIP de Alunos</h3>
              <p className="text-sm text-muted-foreground">
                Dúvidas, análises e acompanhamento.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-medium"
          >
            Acessar grupo
          </a>
        </div>

        {/* Módulos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <div
              key={module.id}
              onClick={() => {
                if (module.locked) {
                  toast({
                    title: "Conteúdo em breve",
                    description:
                      "Esse módulo será liberado nos próximos dias.",
                  });
                } else {
                  setSelectedModule(module.id);
                }
              }}
              className="relative bg-card border border-border rounded-xl overflow-hidden cursor-pointer hover:border-primary/50 transition"
            >
              {module.locked && (
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Lock className="w-4 h-4" />
                    Em breve
                  </div>
                </div>
              )}

              <div className="aspect-video overflow-hidden">
                <img
                  src={module.thumbnail}
                  alt={module.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <module.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">{module.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de vídeo (placeholder premium) */}
        {selectedModule && (
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedModule(null)}
          >
            <div
              className="bg-card border border-border rounded-2xl w-full max-w-4xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video flex flex-col items-center justify-center text-center p-8 bg-secondary">
                <Video className="w-16 h-16 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  Conteúdo em produção
                </h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  As aulas deste módulo estão sendo preparadas com foco em clareza,
                  responsabilidade e aplicação prática.
                </p>
              </div>

              <div className="p-6 flex justify-end">
                <Button variant="outline" onClick={() => setSelectedModule(null)}>
                  Fechar
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
