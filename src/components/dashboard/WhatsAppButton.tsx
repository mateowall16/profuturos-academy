import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
}

const WhatsAppButton = ({ phoneNumber = "5511999999999" }: WhatsAppButtonProps) => {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-foreground text-sm px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
        Precisa de ajuda?
      </span>
    </button>
  );
};

export default WhatsAppButton;
