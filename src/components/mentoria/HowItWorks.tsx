const steps = [
  "Acesso imediato à plataforma",
  "Aulas gravadas + lives semanais",
  "Grupo fechado de alunos",
  "Acompanhamento e suporte",
];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-12">
          Como funciona a mentoria
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <span className="text-primary font-bold">Passo {i + 1}</span>
              <p className="mt-2">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
