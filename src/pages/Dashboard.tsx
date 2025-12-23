import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Play,
  Lock,
  CheckCircle,
  Clock,
  BookOpen,
  MessageCircle,
  LogOut,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedModule, setExpandedModule] = useState(0);

  const modules = [
    {
      title: "Módulo 1: Fundamentos",
      progress: 100,
      lessons: [
        { title: "Bem-vindo à ProFuturos", duration: "5 min", completed: true },
        { title: "Introdução ao Mercado de Futuros", duration: "15 min", completed: true },
        { title: "Como Funciona a Binance", duration: "20 min", completed: true },
        { title: "Alavancagem e Margem", duration: "18 min", completed: true },
        { title: "Tipos de Ordens", duration: "22 min", completed: true },
      ],
    },
    {
      title: "Módulo 2: Análise Técnica",
      progress: 60,
      lessons: [
        { title: "Candlesticks e Padrões", duration: "25 min", completed: true },
        { title: "Suporte e Resistência", duration: "20 min", completed: true },
        { title: "Indicadores Essenciais", duration: "30 min", completed: true },
        { title: "Fibonacci e Pivôs", duration: "28 min", completed: false, current: true },
        { title: "Price Action Avançado", duration: "35 min", completed: false },
      ],
    },
    {
      title: "Módulo 3: Estratégias",
      progress: 0,
      lessons: [
        { title: "Scalping Profissional", duration: "30 min", completed: false, locked: true },
        { title: "Day Trade Avançado", duration: "35 min", completed: false, locked: true },
        { title: "Swing Trade", duration: "25 min", completed: false, locked: true },
        { title: "Operando Tendências", duration: "28 min", completed: false, locked: true },
      ],
    },
    {
      title: "Módulo 4: Gestão de Risco",
      progress: 0,
      lessons: [
        { title: "Calculando Posição", duration: "20 min", completed: false, locked: true },
        { title: "Stop Loss Inteligente", duration: "18 min", completed: false, locked: true },
        { title: "Gerenciamento Emocional", duration: "22 min", completed: false, locked: true },
        { title: "Diário de Trading", duration: "15 min", completed: false, locked: true },
      ],
    },
  ];

  const totalProgress = Math.round(
    modules.reduce((acc, m) => acc + m.progress, 0) / modules.length
  );

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-card border-r border-border transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-20"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b border-border">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              {sidebarOpen && (
                <span className="font-display font-bold text-lg text-foreground">
                  Pro<span className="text-primary">Futuros</span>
                </span>
              )}
            </Link>
          </div>

          {/* Progress */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Progresso</span>
              <span className="text-sm font-semibold text-primary">{totalProgress}%</span>
            </div>
            <Progress value={totalProgress} className="h-2" />
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {modules.map((module, moduleIndex) => (
              <div key={moduleIndex}>
                <button
                  onClick={() => setExpandedModule(expandedModule === moduleIndex ? -1 : moduleIndex)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                    expandedModule === moduleIndex
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-sm font-medium">{module.title}</span>
                  </div>
                  {expandedModule === moduleIndex ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>

                {expandedModule === moduleIndex && (
                  <div className="ml-4 mt-2 space-y-1">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <button
                        key={lessonIndex}
                        className={`w-full flex items-center gap-3 p-2 rounded-lg text-left text-sm transition-colors ${
                          lesson.current
                            ? "bg-primary/10 text-primary"
                            : lesson.locked
                            ? "text-muted-foreground cursor-not-allowed"
                            : "text-foreground hover:bg-secondary"
                        }`}
                        disabled={lesson.locked}
                      >
                        {lesson.completed ? (
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        ) : lesson.locked ? (
                          <Lock className="w-4 h-4 flex-shrink-0" />
                        ) : (
                          <Play className="w-4 h-4 flex-shrink-0" />
                        )}
                        <span className="flex-1 truncate">{lesson.title}</span>
                        <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border space-y-2">
            <a
              href="#"
              className="flex items-center gap-3 p-3 rounded-lg text-foreground hover:bg-secondary transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">Grupo VIP</span>
            </a>
            <Link
              to="/"
              className="flex items-center gap-3 p-3 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Sair</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b border-border flex items-center justify-between px-4 lg:px-8 bg-card/50">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-secondary rounded-lg"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div>
              <h1 className="font-display font-semibold text-foreground">Fibonacci e Pivôs</h1>
              <p className="text-sm text-muted-foreground">Módulo 2: Análise Técnica</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Clock className="w-4 h-4" />
            28 min
          </div>
        </header>

        {/* Video Player */}
        <div className="flex-1 p-4 lg:p-8">
          <div className="aspect-video bg-secondary rounded-xl overflow-hidden relative group">
            <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
              <button className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-[0_4px_20px_hsl(153_100%_39%/0.3)] hover:scale-105 transition-transform">
                <Play className="w-8 h-8 text-primary-foreground ml-1" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
              <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-0 bg-primary" />
              </div>
              <span className="text-sm text-foreground">0:00 / 28:00</span>
            </div>
          </div>

          {/* Lesson Info */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Fibonacci e Pivôs
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nesta aula você vai aprender a usar as retrações de Fibonacci e os pontos de pivô 
                para identificar níveis importantes de suporte e resistência. Essas ferramentas são 
                essenciais para qualquer trader que deseja operar com precisão no mercado de futuros.
              </p>
              <div className="flex gap-4">
                <Button variant="hero">
                  Marcar como Concluída
                  <CheckCircle className="w-4 h-4" />
                </Button>
                <Button variant="outline">Próxima Aula</Button>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4">Recursos</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    PDF: Guia de Fibonacci
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    Planilha de Cálculo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
