import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Lock } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const handleCheckout = async () => {
    if (!user) {
      window.location.href = "/login";
      return;
    }

    try {
      setLoading(true);

      // ⏳ simula processamento de pagamento
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const { error } = await supabase
        .from("profiles")
        .update({ has_access: true })
        .eq("id", user.id);

      if (error) {
        throw error;
      }

      // 🔄 força reload para sincronizar profile + ProtectedRoute
      window.location.href = "/dashboard";
    } catch (err) {
      console.error("Erro ao liberar acesso:", err);
      alert("Não foi possível liberar o acesso. Tente novamente.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* COLUNA ESQUERDA */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            Mentoria ProFuturos
          </h1>

          <p className="text-muted-foreground text-lg">
            Aprenda a operar mercado futuro com método, gestão de risco
            e acompanhamento real.
          </p>

          <ul className="space-y-3">
            {[
              "Acesso completo à plataforma",
              "Aulas gravadas + lives semanais",
              "Grupo fechado de alunos",
              "Gestão de risco profissional",
              "Atualizações contínuas",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-lg border p-4 bg-card">
            <p className="font-semibold mb-1">🔒 Garantia incondicional</p>
            <p className="text-sm text-muted-foreground">
              Se em até 7 dias você achar que não é para você,
              basta pedir reembolso.
            </p>
          </div>
        </div>

        {/* COLUNA DIREITA */}
        <Card className="sticky top-10">
          <CardHeader>
            <CardTitle>Resumo da compra</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="flex justify-between items-center">
              <span>Mentoria ProFuturos</span>
              <span className="font-semibold">R$ 497,00</span>
            </div>

            <div className="border-t pt-4 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>R$ 497,00</span>
            </div>

            <Button
              size="xl"
              className="w-full gap-2"
              onClick={handleCheckout}
              disabled={loading}
            >
              {loading ? (
                "Processando pagamento..."
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  Finalizar compra
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Ao finalizar, você concorda com nossos termos de uso
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Checkout;
