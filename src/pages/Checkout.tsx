import { CheckCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Checkout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-xl w-full bg-card border border-border rounded-2xl p-8 shadow-lg">
        
        {/* Título */}
        <h1 className="text-3xl font-bold text-center mb-4">
          Finalize sua inscrição na{" "}
          <span className="text-primary">Mentoria Cripto</span>
        </h1>

        <p className="text-center text-muted-foreground mb-8">
          Acesso imediato ao conteúdo e acompanhamento.
        </p>

        {/* O que está incluso */}
        <div className="space-y-4 mb-8">
          {[
            "Aulas gravadas passo a passo",
            "Lives semanais de acompanhamento",
            "Grupo fechado de alunos",
            "Método focado em gestão de risco",
            "Suporte direto durante a mentoria",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="text-primary w-5 h-5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Preço */}
        <div className="bg-background border border-border rounded-xl p-6 text-center mb-8">
          <p className="text-muted-foreground mb-2">Investimento</p>
          <p className="text-4xl font-bold text-primary">
            R$ 497
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            ou em até 12x no cartão
          </p>
        </div>

        {/* Botão de pagamento */}
        <Button
          variant="hero"
          size="xl"
          className="w-full mb-6"
          onClick={() => {
            // integração com pagamento aqui
            alert("Integração de pagamento");
          }}
        >
          Garantir minha vaga agora
        </Button>

        {/* Segurança */}
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span>
            Compra segura • Conteúdo responsável • Sem promessas irreais
          </span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
