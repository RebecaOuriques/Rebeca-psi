import React from 'react';
import whatsapp from '../../assets/whatsapp.png'

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
  showImage?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message,showImage  }) => {
  const formattedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
    {showImage && (
      <img src={whatsapp} alt="WhatsApp" className="w-8 mr-2" />
    )}
    <span></span>
  </a>
  );
};

export default WhatsAppButton;