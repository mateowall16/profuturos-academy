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
    // 🔹 Title (aba do navegador)
    document.title =
      "Mentoria ProFuturos | Aprenda Cripto do Zero com Método";

    // 🔹 Meta description (SEO / Ads)
    const description =
      "Aprenda a operar o mercado futuro de criptomoedas com método, gestão de risco e acompanhamento real. Mentoria prática para iniciantes.";

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
