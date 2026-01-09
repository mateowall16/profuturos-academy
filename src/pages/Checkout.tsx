import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Unlock } from "lucide-react";
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

      // ⏳ Simula ativação de acesso (UX)
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const { error } = await supabase
        .from("profiles")
        .update({ has_access: true })
        .eq("id", user.id);

      if (error) {
        throw error;
      }

      // 🔄 Redireciona já com acesso liberado
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
        {/* ================= ESQUERDA ================= */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Acesso gratuito por tempo limitado
          </span>

          <h1 className="text-3xl md:text-4xl font-bold">
            Mentoria ProFuturos
          </h1>

          <p className="text-muted-foreground text-lg">
            Ative agora seu acesso à mentoria e comece a aprender como operar
            mercado futuro com método, gestão de risco e clareza.
          </p>

          <ul className="space-y-3">
            {[
              "Acesso completo à plataforma",
              "Aulas gravadas organizadas",
              "Materiais de apoio",
              "Gestão de risco aplicada",
              "Atualizações contínuas",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-lg border p-4 bg-card">
            <p className="font-semibold mb-1">
              🔓 Liberação imediata
            </p>
            <p className="text-sm text-muted-foreground">
              Assim que você confirmar, o acesso é liberado automaticamente.
            </p>
          </div>
        </div>

        {/* ================= DIREITA ================= */}
        <Card className="sticky top-10">
          <CardHeader>
            <CardTitle>Resumo do acesso</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total hoje</span>
              <span className="text-primary">R$ 0,00</span>
            </div>

            <Button
              size="xl"
              className="w-full gap-2"
              onClick={handleCheckout}
              disabled={loading}
            >
              {loading ? (
                "Ativando seu acesso..."
              ) : (
                <>
                  <Unlock className="w-4 h-4" />
                  Liberar acesso gratuito
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Nenhum pagamento será realizado.
              <br />
              Ao continuar, você concorda com nossos termos de uso.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Checkout;
