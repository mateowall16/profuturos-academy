const ForWho = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Essa mentoria é para você se…
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ul className="space-y-4">
            {[
              "Quer renda extra além do salário",
              "Não quer promessas irreais",
              "Tem pouco tempo disponível",
              "Quer aprender gestão de risco",
            ].map((item, i) => (
              <li key={i} className="text-foreground">✅ {item}</li>
            ))}
          </ul>

          <ul className="space-y-4 text-muted-foreground">
            {[
              "Busca dinheiro fácil",
              "Não quer estudar ou praticar",
              "Quer sinais milagrosos",
              "Não aceita riscos do mercado",
            ].map((item, i) => (
              <li key={i}>❌ {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
