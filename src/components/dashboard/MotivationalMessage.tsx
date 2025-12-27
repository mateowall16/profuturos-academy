import { Sparkles, Trophy, Rocket } from "lucide-react";

interface MotivationalMessageProps {
  progressPercent: number;
}

const MotivationalMessage = ({ progressPercent }: MotivationalMessageProps) => {
  const getMessage = () => {
    if (progressPercent === 100) {
      return {
        icon: <Trophy className="w-5 h-5 text-yellow-500" />,
        title: "Parabéns, você é um vencedor! 🏆",
        description: "Você completou todos os módulos. Continue praticando e evoluindo!"
      };
    }
    if (progressPercent >= 50) {
      return {
        icon: <Rocket className="w-5 h-5 text-primary" />,
        title: "Você está voando! 🚀",
        description: "Mais da metade concluída. Falta pouco para dominar tudo!"
      };
    }
    return {
      icon: <Sparkles className="w-5 h-5 text-primary" />,
      title: "Sua jornada começou! ✨",
      description: "Cada aula te aproxima do seu objetivo. Continue assim!"
    };
  };

  const message = getMessage();

  return (
    <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-xl p-4 mb-6 flex items-center gap-4">
      <div className="p-2 bg-primary/10 rounded-lg">
        {message.icon}
      </div>
      <div>
        <p className="font-semibold text-sm">{message.title}</p>
        <p className="text-xs text-muted-foreground">{message.description}</p>
      </div>
    </div>
  );
};

export default MotivationalMessage;
