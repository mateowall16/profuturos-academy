import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  type: "user" | "bot";
  text: string;
}

const predefinedAnswers: Record<string, string> = {
  "o que é um contrato futuro": "Um contrato futuro é um acordo para comprar ou vender um ativo em uma data futura por um preço predeterminado. Na Binance, você pode operar futuros de criptomoedas como Bitcoin e Ethereum, apostando na alta ou na baixa do preço. 📈",
  "como funciona a alavancagem": "A alavancagem permite operar com mais capital do que você possui. Por exemplo, com alavancagem de 10x, você controla R$1.000 usando apenas R$100. ⚠️ Atenção: ela amplifica ganhos E perdas, então use com responsabilidade!",
  "quando acontecem as aulas ao vivo": "As aulas ao vivo acontecem toda terça e quinta às 20h (horário de Brasília). Você receberá um lembrete no grupo VIP antes de cada sessão! 📺",
  "como entrar no grupo vip": "Após a compra da mentoria, você recebe automaticamente o link do grupo VIP no seu e-mail e na área do aluno. Se tiver dúvidas, entre em contato pelo suporte! 💬",
  "onde vejo meu progresso": "Seu progresso está disponível no Dashboard da área do aluno. Lá você vê quantos módulos completou e qual é o próximo passo da sua jornada! 🎯",
};

const suggestedQuestions = [
  "O que é um contrato futuro?",
  "Como funciona a alavancagem?",
  "Quando acontecem as aulas ao vivo?",
  "Como entrar no grupo VIP?",
  "Onde vejo meu progresso?",
];

const ProBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "Olá! 👋 Sou o ProBot, seu assistente da ProFuturos Academy. Como posso ajudar você hoje?",
    },
  ]);
  const [input, setInput] = useState("");

  const findAnswer = (question: string): string => {
    const normalizedQuestion = question.toLowerCase().trim();
    
    for (const [key, value] of Object.entries(predefinedAnswers)) {
      if (normalizedQuestion.includes(key) || key.includes(normalizedQuestion)) {
        return value;
      }
    }
    
    return "Desculpe, não encontrei uma resposta específica para essa pergunta. 🤔 Tente perguntar sobre contratos futuros, alavancagem, aulas ao vivo, grupo VIP ou seu progresso. Ou entre em contato com nosso suporte!";
  };

  const handleSend = (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMessage: Message = { type: "user", text: messageText };
    const botResponse: Message = { type: "bot", text: findAnswer(messageText) };

    setMessages((prev) => [...prev, userMessage, botResponse]);
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Abrir chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold">ProBot</h3>
              <p className="text-xs opacity-80">Assistente JFN Trading</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 max-h-80 overflow-y-auto p-4 space-y-3 bg-background">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                    msg.type === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-muted text-foreground rounded-bl-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Suggested Questions */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 bg-muted/50 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">Perguntas frequentes:</p>
              <div className="flex flex-wrap gap-1">
                {suggestedQuestions.slice(0, 3).map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="text-xs bg-background border border-border px-2 py-1 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-border bg-card flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua pergunta..."
              className="flex-1 bg-background border border-border rounded-full px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button
              size="icon"
              onClick={() => handleSend()}
              className="rounded-full"
              disabled={!input.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProBot;
