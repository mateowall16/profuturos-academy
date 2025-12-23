import { useState } from "react";
import { Link } from "react-router-dom";
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
import { Mail, MessageCircle, Phone, Send, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const FAQ = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const faqs = [
    {
      question: "O que é a Mentoria ProFuturos?",
      answer:
        "A Mentoria ProFuturos é um programa completo de formação em trading de futuros de criptomoedas na Binance. Inclui mais de 50 aulas em vídeo, material complementar, grupo VIP no Telegram, lives semanais e suporte prioritário.",
    },
    {
      question: "Preciso ter experiência para participar?",
      answer:
        "Não! O programa foi desenvolvido para iniciantes completos. Começamos do zero, explicando todos os conceitos básicos antes de avançar para estratégias mais complexas.",
    },
    {
      question: "Quanto tempo tenho de acesso?",
      answer:
        "O acesso é vitalício! Você poderá assistir às aulas quantas vezes quiser, quando quiser, e ainda terá acesso a todas as atualizações futuras do conteúdo.",
    },
    {
      question: "Como funciona a garantia?",
      answer:
        "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, basta enviar um e-mail e devolvemos 100% do seu investimento, sem perguntas.",
    },
    {
      question: "Qual o valor do investimento?",
      answer:
        "O investimento é de R$ 997,00 à vista ou 12x de R$ 99,70. Comparado ao retorno potencial e ao valor de mentorias similares no mercado (que costumam passar de R$ 5.000), é um investimento muito acessível.",
    },
    {
      question: "Quando começo a ter resultados?",
      answer:
        "Isso depende da sua dedicação. Alunos que seguem o método e praticam diariamente costumam ver os primeiros resultados consistentes entre 2 a 3 meses. Lembre-se: trading é uma habilidade que leva tempo para desenvolver.",
    },
    {
      question: "Vocês dão sinais de operação?",
      answer:
        "O foco da mentoria é ensinar você a operar de forma independente. Não fornecemos sinais prontos, pois isso criaria dependência. Nosso objetivo é formar traders autônomos e consistentes.",
    },
    {
      question: "Como faço para tirar dúvidas?",
      answer:
        "Você pode tirar dúvidas no grupo VIP do Telegram, nas lives semanais ao vivo ou pelo suporte via WhatsApp. Nossa equipe está sempre disponível para ajudar.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
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

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Não encontrou o que procurava?
            </p>
            <Link to="/mentoria">
              <Button variant="hero" size="lg">
                Falar com Especialista
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-card/50" id="contato">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entre em <span className="text-primary">Contato</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar você. Escolha o melhor canal de atendimento.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">E-mail</h3>
                    <a
                      href="mailto:suporte@profuturos.com.br"
                      className="text-muted-foreground hover:text-primary"
                    >
                      suporte@profuturos.com.br
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Respondemos em até 24 horas úteis.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      (11) 99999-9999
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Atendimento de segunda a sexta, das 9h às 18h.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Telefone</h3>
                    <span className="text-muted-foreground">(11) 3333-3333</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Central de atendimento ao cliente.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Envie uma Mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Como podemos ajudar?"
                    value={formData.subject}
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
                  Enviar Mensagem
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
