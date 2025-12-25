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
      question: "Como funciona a mentoria?",
      answer:
        "A mentoria é 100% online, com aulas gravadas que você pode assistir no seu ritmo, além de lives semanais para tirar dúvidas e acompanhar operações ao vivo. Você terá acesso ao grupo VIP e suporte direto.",
    },
    {
      question: "As aulas ficam gravadas?",
      answer:
        "Sim! Todas as aulas ficam gravadas e disponíveis na plataforma. Você pode assistir quantas vezes quiser, quando quiser, no seu próprio ritmo.",
    },
    {
      question: "Como entro no grupo VIP?",
      answer:
        "Assim que sua inscrição for confirmada, você receberá por e-mail o link de acesso ao grupo VIP do WhatsApp/Telegram, onde poderá interagir com outros alunos e mentores.",
    },
    {
      question: "Posso assistir no celular?",
      answer:
        "Sim! A plataforma é totalmente responsiva. Você pode assistir às aulas pelo celular, tablet ou computador, onde e quando preferir.",
    },
    {
      question: "Quando abrem novas turmas?",
      answer:
        "As turmas abrem periodicamente, geralmente a cada 2-3 meses. Para não perder a próxima abertura, cadastre-se em nossa lista de espera e seja avisado em primeira mão.",
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
            Tire suas dúvidas sobre a mentoria e saiba tudo que você precisa para começar sua jornada no mercado de futuros.
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
              Tem alguma dúvida? Entre em contato conosco.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            {/* Contact Form */}
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
              contato@JFN Trading.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
