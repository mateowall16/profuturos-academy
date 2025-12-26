import { CheckCircle, Circle, ArrowRight, Users, BookOpen, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  action?: () => void;
  actionLabel?: string;
  icon: React.ReactNode;
}

interface ProgressChecklistProps {
  items: ChecklistItem[];
}

const ProgressChecklist = ({ items }: ProgressChecklistProps) => {
  const completedCount = items.filter(item => item.completed).length;
  const progressPercent = Math.round((completedCount / items.length) * 100);

  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-semibold text-lg">Seus Primeiros Passos</h2>
          <p className="text-sm text-muted-foreground">
            Complete para aproveitar ao máximo a mentoria
          </p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-primary">{completedCount}/{items.length}</span>
          <p className="text-xs text-muted-foreground">concluídos</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-secondary rounded-full mb-6 overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Checklist items */}
      <div className="space-y-3">
        {items.map((item, index) => (
          <div 
            key={item.id}
            className={`flex items-start gap-4 p-4 rounded-xl border transition-all ${
              item.completed 
                ? "bg-primary/5 border-primary/30" 
                : "bg-secondary/30 border-border hover:border-primary/30"
            }`}
          >
            {/* Status icon */}
            <div className="flex-shrink-0 mt-0.5">
              {item.completed ? (
                <CheckCircle className="w-6 h-6 text-primary" />
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-muted-foreground/50 flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">{index + 1}</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-muted-foreground">{item.icon}</span>
                <h3 className={`font-medium ${item.completed ? "text-primary" : ""}`}>
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>

            {/* Action button */}
            {!item.completed && item.action && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={item.action}
                className="flex-shrink-0 group"
              >
                {item.actionLabel || "Fazer"}
                <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressChecklist;
