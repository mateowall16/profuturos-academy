import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Play,
  BookOpen,
  ShieldCheck,
  Brain,
  Video,
  LogOut,
  GraduationCap,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const modules = [
    {
      id: 1,
      title: "Introdução aos Futuros",
      description: "Aprenda os fundamentos do mercado de futuros e como a Binance funciona.",
      icon: BookOpen,
      thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=225&fit=crop",
      videoUrl: "#",
      completed: false,
    },
    {
      id: 2,
      title: "Estratégias e Setups",
      description: "Descubra os melhores setups de entrada e saída para maximizar seus ganhos.",
      icon: TrendingUp,
      thumbnail: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&h=225&fit=crop",
      videoUrl: "#",
      completed: false,
    },
    {
      id: 3,
      title: "Gestão de Risco",
      description: "Proteja seu capital com técnicas profissionais de gestão de risco.",
      icon: ShieldCheck,
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=225&fit=crop",
      videoUrl: "#",
      completed: false,
    },
    {
      id: 4,
      title: "Psicologia do Trader",
      description: "Domine suas emoções e desenvolva a mentalidade de um trader consistente.",
      icon: Brain,
      thumbnail: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=225&fit=crop",
      videoUrl: "#",
      completed: false,
    },
    {
      id: 5,
      title: "Operações ao Vivo",
      description: "Acompanhe operações reais e aprenda na prática com o mentor.",
      icon: Video,
      thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=225&fit=crop",
      videoUrl: "#",
      completed: false,
    },
  ];

  // Show welcome toast on mount
  useEffect(() => {
    toast({
      title: "🎓 Bem-vindo(a)!",
      description: "Comece pelo módulo 'Introdução aos Futuros'.",
    });
  }, []);

  // Simulated progress
  useEffect(() => {
    const completedModules = modules.filter(m => m.completed).length;
    setProgress((completedModules / modules.length) * 100);
  }, [modules]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg text-foreground">
              Pro<span className="text-primary">Futuros</span>
            </span>
          </Link>

          <Link
            to="/login"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm">Sair</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
        {/* Welcome Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
              Bem-vindo à sua área de aprendizado
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Continue sua jornada rumo à consistência nos Futuros
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-card border border-border rounded-xl p-6 mb-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-foreground font-medium">Seu progresso</span>
            <span className="text-primary font-semibold">{progress}%</span>
          </div>
          <Progress value={progress} className="h-3" />
          <p className="text-sm text-muted-foreground mt-3">
            {progress === 0 
              ? "Comece sua jornada assistindo ao primeiro módulo!"
              : `Continue assim! Você está ${progress}% mais perto de dominar os futuros.`
            }
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <div
              key={module.id}
              onClick={() => setSelectedModule(module.id)}
              className="group bg-card border border-border rounded-xl overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-300 hover:shadow-[0_4px_20px_hsl(153_100%_39%/0.15)]"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={module.thumbnail}
                  alt={module.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-[0_4px_20px_hsl(153_100%_39%/0.4)]">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
                  Módulo {module.id}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <module.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-semibold text-foreground">
                    {module.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {module.description}
                </p>
                <Button variant="link" className="p-0 h-auto mt-3 text-primary">
                  Assistir aulas →
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal Placeholder */}
        {selectedModule && (
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedModule(null)}
          >
            <div 
              className="bg-card border border-border rounded-2xl w-full max-w-4xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-secondary flex items-center justify-center relative">
                <div className="text-center">
                  <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-foreground font-medium">
                    Vídeo do {modules.find(m => m.id === selectedModule)?.title}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    (Placeholder - Integre seu player de vídeo aqui)
                  </p>
                </div>
              </div>
              <div className="p-6 flex justify-between items-center">
                <div>
                  <h3 className="font-display font-semibold text-foreground">
                    {modules.find(m => m.id === selectedModule)?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {modules.find(m => m.id === selectedModule)?.description}
                  </p>
                </div>
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
