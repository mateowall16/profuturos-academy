import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  TrendingUp,
  CreditCard,
  Lock,
  Shield,
  Check,
  ArrowRight,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });
  const [paymentMethod, setPaymentMethod] = useState<"card" | "pix">("card");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Processando pagamento...",
      description: "Aguarde enquanto processamos sua compra.",
    });

    setTimeout(() => {
      navigate("/obrigado");
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="flex items-center gap-2 w-fit">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Pro<span className="text-primary">Futuros</span>
            </span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Order Summary */}
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-2xl border border-border p-6 sticky top-8">
              <h2 className="font-display text-xl font-bold text-foreground mb-6">
                Resumo do Pedido
              </h2>

              <div className="flex gap-4 pb-6 border-b border-border">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">Mentoria JFN Trading </h3>
                  <p className="text-sm text-muted-foreground">Acesso vitalício</p>
                </div>
              </div>

              <ul className="py-6 space-y-3 border-b border-border">
                {[
                  "+50 aulas em vídeo HD",
                  "Grupo VIP no Telegram",
                  "Lives semanais",
                  "Suporte prioritário",
                  "Certificado",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="py-6 space-y-2">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="line-through">R$ 2.997,00</span>
                </div>
                <div className="flex justify-between text-primary">
                  <span>Desconto (67% OFF)</span>
                  <span>- R$ 2.000,00</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-foreground pt-4 border-t border-border">
                  <span>Total</span>
                  <span>R$ 997,00</span>
                </div>
                <p className="text-sm text-muted-foreground text-right">
                  ou 12x de R$ 99,70
                </p>
              </div>

              <div className="flex items-center gap-2 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm text-foreground">
                  Garantia incondicional de 7 dias
                </p>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="order-1 lg:order-2">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Finalize sua inscrição na Mentoria Binance Pro
            </h1>
            <p className="text-muted-foreground mb-4">
              Preencha seus dados para garantir sua vaga na mentoria.
            </p>
            <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30 mb-8">
              <p className="text-sm text-yellow-500">
                ⚠️ Simulação de checkout — este projeto é demonstrativo.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Data */}
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Dados Pessoais</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cpf">CPF</Label>
                    <Input
                      id="cpf"
                      name="cpf"
                      placeholder="000.000.000-00"
                      value={formData.cpf}
                      onChange={handleChange}
                      className="bg-secondary border-border"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-secondary border-border"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Forma de Pagamento</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      paymentMethod === "card"
                        ? "border-primary bg-primary/10"
                        : "border-border bg-secondary hover:border-primary/50"
                    }`}
                  >
                    <CreditCard className={`w-6 h-6 mx-auto mb-2 ${paymentMethod === "card" ? "text-primary" : "text-muted-foreground"}`} />
                    <span className={`text-sm font-medium ${paymentMethod === "card" ? "text-primary" : "text-foreground"}`}>
                      Cartão de Crédito
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("pix")}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      paymentMethod === "pix"
                        ? "border-primary bg-primary/10"
                        : "border-border bg-secondary hover:border-primary/50"
                    }`}
                  >
                    <svg
                      className={`w-6 h-6 mx-auto mb-2 ${paymentMethod === "pix" ? "text-primary" : "text-muted-foreground"}`}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.2 6.8l-1.4-1.4c-.4-.4-1-.4-1.4 0L8.8 7c-.4.4-.4 1 0 1.4l.6.6-1.6 1.6-.6-.6c-.4-.4-1-.4-1.4 0L4.2 11.6c-.4.4-.4 1 0 1.4l1.4 1.4c.4.4 1 .4 1.4 0l1.6-1.6c.4-.4.4-1 0-1.4l-.6-.6 1.6-1.6.6.6c.4.4 1 .4 1.4 0l1.6-1.6c.4-.4.4-1 0-1.4z" />
                    </svg>
                    <span className={`text-sm font-medium ${paymentMethod === "pix" ? "text-primary" : "text-foreground"}`}>
                      PIX
                    </span>
                  </button>
                </div>

                {paymentMethod === "card" && (
                  <div className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Número do Cartão</Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="0000 0000 0000 0000"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Nome no Cartão</Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        placeholder="NOME COMO ESTÁ NO CARTÃO"
                        value={formData.cardName}
                        onChange={handleChange}
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Validade</Label>
                        <Input
                          id="expiry"
                          name="expiry"
                          placeholder="MM/AA"
                          value={formData.expiry}
                          onChange={handleChange}
                          className="bg-secondary border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={handleChange}
                          className="bg-secondary border-border"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "pix" && (
                  <div className="p-6 rounded-lg bg-secondary border border-border text-center">
                    <p className="text-muted-foreground mb-4">
                      Ao clicar em "Finalizar Compra", você receberá o código PIX para pagamento.
                    </p>
                    <div className="text-2xl font-bold text-primary">R$ 997,00</div>
                    <p className="text-sm text-muted-foreground">à vista</p>
                  </div>
                )}
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full">
                <Lock className="w-4 h-4" />
                Concluir inscrição
                <ArrowRight className="w-4 h-4" />
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Seus dados estão protegidos com criptografia SSL 256-bit
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
