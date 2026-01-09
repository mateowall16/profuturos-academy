import { Link } from "react-router-dom";
import { Instagram, Youtube, MessageCircle } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Logo size="md" />
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Mentoria educacional focada em mercado futuro de criptomoedas,
              com método, gestão de risco e responsabilidade.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/mentoria"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Mentoria
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/faq#contato"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Suporte
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/login"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Área do Aluno
                </Link>
              </li>
              <li>
                <Link
                  to="/termos"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  to="/privacidade"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/julia.jfn/?hl=pt-br"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.youtube.com/@JuliaJfn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} JFN Trading. Todos os direitos reservados.
            </p>

            <div className="flex gap-6">
              <Link
                to="/termos"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Termos de Uso
              </Link>
              <Link
                to="/privacidade"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
