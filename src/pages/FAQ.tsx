import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const FAQ = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { toast } = useToast();

  const faqs = [
    {
      question: "Preciso ter experiência com criptomoedas?",
      answer:
        "Não. A mentoria foi criada justamente para quem está começando do zero. Você aprende desde os conceitos básicos até a execução prática, sempre com foco em clareza e gestão de risco.",
    },
    {
      question: "Vou perder dinheiro operando?",
      answer:
        "Todo mercado envolve risco. Por isso, o foco da mentoria é ensinar gestão de risco, controle emocional e tomada de decisão consciente — nunca prometer ganhos fáceis.",
    },
    {
      question: "A mentoria é sinal de trade?",
      answer:
        "Não. Você aprende a analisar o mercado e tomar suas próprias decisões. O objetivo é autonomia, não dependência de sinais.",
    },
    {
      question: "Quanto tempo por dia preciso dedicar?",
      answer:
        "Em média, de 30 minutos a 1 hora por dia. A mentoria foi pensada para quem trabalha ou estuda e não pode ficar o dia inteiro na frente do gráfico.",
    },
    {
      question: "As aulas ficam gravadas?",
      answer:
        "Sim. Todas as aulas ficam gravadas e disponíveis na plataforma para você assistir no seu ritmo, quantas vezes quiser.",
    },
    {
      question: "Existe acompanhamento ou suporte?",
      answer:
        "Sim. Você terá acesso a um grupo fechado de alunos e acompanhamento contínuo para tirar dúvidas e evoluir com mais segurança.",
    },
    {
      question: "Existe algum tipo de garantia?",
      answer:
        "Você tem um prazo inicial para conhecer a metodologia e decidir com tranquilidade se a mentoria faz sentido para você.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre a mentoria e entenda se ela faz sentido para
            você começar com mais segurança.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-foreground font-medium py-4 hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA após FAQ */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Se essas respostas fizeram sentido para você, o próximo passo é
              aprender com acompanhamento.
            </p>

            <Button variant="hero" size="lg" asChild>
              <a href="/mentoria">Quero entrar para a mentoria</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-card/50" id="contato">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fale <span className="text-primary">Conosco</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ainda ficou alguma dúvida? Entre em contato.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="p-6 rounded-xl bg-card border border-border">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
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

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Escreva sua mensagem..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-secondary border-border resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full">
                  Enviar mensagem
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>

            <p className="text-center text-muted-foreground mt-8">
              <Mail className="w-4 h-4 inline mr-2" />
              contato@JFNTrading.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
