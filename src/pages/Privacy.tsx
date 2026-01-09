import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="font-display text-4xl font-bold mb-8">
          Política de Privacidade
        </h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            A sua privacidade é importante para nós. Esta Política de
            Privacidade explica como coletamos, utilizamos e protegemos seus
            dados ao utilizar a plataforma <strong>JFN Trading Academy</strong>.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">
            1. Coleta de Informações
          </h2>
          <p>
            Coletamos informações fornecidas diretamente pelo usuário, como nome
            e e-mail, no momento do cadastro. Também utilizamos cookies e
            tecnologias similares para melhorar a experiência na plataforma.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">
            2. Uso das Informações
          </h2>
          <p>
            As informações coletadas são utilizadas para:
          </p>
          <ul className="list-disc pl-6">
            <li>Gerenciar o acesso à plataforma</li>
            <li>Oferecer suporte ao usuário</li>
            <li>Melhorar nossos serviços e conteúdos</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground">
            3. Compartilhamento de Dados
          </h2>
          <p>
            Não vendemos, alugamos ou compartilhamos seus dados pessoais com
            terceiros, exceto quando necessário para cumprimento legal ou
            funcionamento da plataforma.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">
            4. Segurança
          </h2>
          <p>
            Adotamos medidas técnicas e organizacionais para proteger os dados
            dos usuários contra acesso não autorizado, perda ou uso indevido.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">
            5. Direitos do Usuário
          </h2>
          <p>
            O usuário pode solicitar a atualização ou exclusão de seus dados a
            qualquer momento, entrando em contato conosco.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">
            6. Alterações
          </h2>
          <p>
            Esta política pode ser atualizada periodicamente. Recomendamos a
            revisão regular deste documento.
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

export default Privacy;
