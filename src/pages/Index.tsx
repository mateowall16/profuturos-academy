import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Mentor from "@/components/Mentor";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

const Index = () => {
  useEffect(() => {
    // 🔹 Título da aba
    document.title =
      "JFN Trading Academy | Mentoria em Cripto do Zero ao Profissional";

    // 🔹 Meta description (SEO / Ads / Google)
    const description =
      "Aprenda a operar o mercado futuro de criptomoedas com método, gestão de risco e acompanhamento real. Mentoria prática para iniciantes e traders em evolução.";

    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Mentor />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
