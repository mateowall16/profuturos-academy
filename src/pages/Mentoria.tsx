import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Mentoria = () => {
  return (
    <>
      <Header />

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-28 bg-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <span className="inline-block mb-6 px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Mentoria em Mercado Futuro
          </span>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Aprenda a operar no mercado de futuros com{" "}
            <span className="text-primary">
              método, gestão de risco e acompanhamento
            </span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl mb-10">
            Uma mentoria prática para quem quer parar de operar no achismo,
            entender o mercado e evoluir com mais clareza e responsabilidade.
          </p>

          <Button size="lg" variant="hero" asChild>
            <a href="/checkout">Entrar para a mentoria</a>
          </Button>

          <p className="mt-4 text-sm text-muted-foreground">
            Sem promessas irreais • Conteúdo estruturado • Acesso imediato
          </p>
        </div>
      </section>

      {/* ================= O PROBLEMA ================= */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Por que a maioria das pessoas{" "}
            <span className="text-primary">perde dinheiro</span> no mercado?
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Não é falta de inteligência. É falta de método, gestão de risco e
            controle emocional. Sem um caminho claro, o iniciante pula de
            estratégia em estratégia, opera por impulso e toma decisões sem
            contexto.
          </p>
        </div>
      </section>

      {/* ================= PARA QUEM É ================= */}
      <section className="py-28 bg-card/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-14">
            Essa mentoria é <span className="text-primary">para você</span> se:
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-lg">
            <ul className="space-y-4 text-muted-foreground">
              <li>✔️ Está começando do zero no mercado cripto</li>
              <li>✔️ Já tentou operar e se sentiu perdido</li>
              <li>✔️ Quer aprender gestão de risco de verdade</li>
              <li>✔️ Busca autonomia, não sinais prontos</li>
            </ul>

            <ul className="space-y-4 text-muted-foreground">
              <li>❌ Não é para quem busca lucro rápido</li>
              <li>❌ Não é promessa de dinheiro fácil</li>
              <li>❌ Não é robô ou fórmula mágica</li>
              <li>❌ Não é aposta</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= O QUE VOCÊ VAI APRENDER ================= */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-14">
            O que você vai <span className="text-primary">aprender</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-lg text-muted-foreground">
            <ul className="space-y-4">
              <li>📌 Fundamentos do mercado futuro</li>
              <li>📌 Funcionamento da Binance Futures</li>
              <li>📌 Leitura de gráfico e contexto</li>
              <li>📌 Estratégias com lógica clara</li>
            </ul>

            <ul className="space-y-4">
              <li>📌 Gestão de risco aplicada</li>
              <li>📌 Controle emocional</li>
              <li>📌 Disciplina operacional</li>
              <li>📌 Construção de plano de trade</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= COMO FUNCIONA ================= */}
      <section className="py-28 bg-card/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-14">
            Como funciona a <span className="text-primary">mentoria</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              {
                title: "Acesso",
                text: "Entre na plataforma e acesse a área do aluno.",
              },
              {
                title: "Aulas",
                text: "Consuma o conteúdo no seu ritmo, quando quiser.",
              },
              {
                title: "Comunidade",
                text: "Participe do grupo fechado de alunos.",
              },
              {
                title: "Evolução",
                text: "Aprenda com acompanhamento e método.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-background border border-border"
              >
                <p className="text-lg font-semibold mb-2">{item.title}</p>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* ================= GARANTIA / RISCO ZERO ================= */}
<section className="py-28 bg-card/50">
  <div className="container mx-auto px-4 max-w-4xl">
    <div className="rounded-2xl border border-border bg-background p-10 text-center shadow-sm">
      <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
        Garantia de Tranquilidade
      </span>

      <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
        Entre com <span className="text-primary">segurança</span> e tranquilidade
      </h2>

      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        Você terá um período inicial para conhecer a metodologia, entender como
        funciona a mentoria e decidir com calma se ela realmente faz sentido para
        você.
      </p>

      <p className="text-muted-foreground text-lg leading-relaxed mb-10">
        A proposta aqui não é prender ninguém, mas oferecer um ambiente sério,
        responsável e estruturado para quem quer aprender de verdade.
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center text-sm text-muted-foreground">
        <span>✔️ Sem promessas irreais</span>
        <span>✔️ Método claro e estruturado</span>
        <span>✔️ Decisão consciente</span>
      </div>
    </div>
  </div>
</section>

      {/* ================= CTA FINAL ================= */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Aprender com método é melhor do que tentar sozinho
          </h2>

          <p className="text-muted-foreground text-lg mb-10">
            Dê o próximo passo com mais clareza, responsabilidade e
            acompanhamento.
          </p>

          <Button size="lg" variant="hero" asChild>
            <a href="/checkout">Acessar a mentoria agora</a>
          </Button>

          <p className="mt-6 text-sm text-muted-foreground">
            Acesso imediato • Conteúdo contínuo • Suporte ao aluno
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Mentoria;
