import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/234XXXXXXXXXX" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-4 right-4 bg-green-500 hover:bg-green-600 rounded-full drop-shadow-2xl p-2 
      flex items-center justify-center transition-colors duration-200"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-white w-7 h-7" />
    </a>
  );
}