import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "237600000000"; // Replace with actual number
  const message = encodeURIComponent(
    "Bonjour Wentouch ! Je souhaite faire une demande d'achat."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium hidden sm:inline">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
