import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WelcomeBannerProps {
  userName: string;
  onStartFirstLesson: () => void;
}

const WelcomeBanner = ({ userName, onStartFirstLesson }: WelcomeBannerProps) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30 p-6 md:p-8 mb-8">
      {/* Glow effect */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 text-primary mb-3">
          <Sparkles className="w-5 h-5" />
          <span className="text-sm font-medium uppercase tracking-wide">Primeiro acesso</span>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Bem-vindo(a), {userName}! 🎓
        </h1>
        
        <p className="text-muted-foreground max-w-xl mb-6">
          Sua jornada para a consistência no mercado de futuros começa agora. 
          Preparamos um caminho simples para você dar os primeiros passos.
        </p>
        
        <Button 
          onClick={onStartFirstLesson}
          className="group shadow-button"
        >
          Começar minha primeira aula
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default WelcomeBanner;
