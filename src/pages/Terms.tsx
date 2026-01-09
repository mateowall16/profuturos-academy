import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="font-display text-4xl font-bold mb-8">
          Termos de Uso
        </h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Ao acessar e utilizar a plataforma <strong>JFN Trading Academy</strong>,
            você concorda com os termos e condições descritos abaixo. Caso não
            concorde com algum ponto, recomendamos que não utilize nossos
            serviços.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">
            1. Objetivo da Plataforma
          </h2>
          <p>
            A JFN Trading Academy tem como objetivo fornecer conteúdo educacional
            sobre mercado financeiro, especificamente mercado futuro de
            criptomoedas. Não se trata de recomendação de investimento,
            consultoria financeira ou promessa de resultados.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">
            2. Responsabilidade do Usuário
          </h2>
          <p>
            O usuário reconhece que toda operação no mercado financeiro envolve
            riscos. As decisões tomadas a partir do conteúdo da plataforma são
            de inteira responsabilidade do próprio usuário.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">
            3. Acesso à Plataforma
          </h2>
          <p>
            O acesso à área do aluno é pessoal e intransferível. É proibido
            compartilhar login, senha ou qualquer conteúdo da plataforma sem
            autorização prévia.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">
            4. Conteúdo
          </h2>
          <p>
            Todo o conteúdo disponibilizado (vídeos, materiais, textos e
            documentos) é protegido por direitos autorais. O uso é exclusivo
            para fins educacionais e pessoais.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">
            5. Atualizações
          </h2>
          <p>
            A plataforma pode ser atualizada, modificada ou aprimorada a qualquer
            momento, visando sempre melhorar a experiência do usuário.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">
            6. Contato
          </h2>
          <p>
            Em caso de dúvidas, entre em contato pelo e-mail:
            <strong> contato@JFNTrading.com</strong>
          </p>

          <p className="text-sm text-muted-foreground">
            Última atualização: Janeiro de 2026
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
