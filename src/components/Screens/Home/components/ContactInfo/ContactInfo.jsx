import { Label_Black, TextExtraSmallBlack } from '../../../../../Style/TextStyle';

import { Button } from '@/components/ui/button';
import Facebook from '../../../../Icons/Facebook';
import Instagram from '../../../../Icons/Instagram';
import Mail from '../../../../Icons/Mail';
import Phone from '../../../../Icons/Phone';
import React from 'react';
import TikTok from '../../../../Icons/TikTok';
import Whatsup from '../../../../Icons/Whatsup';

const ContactInfo = () => {
  React.useEffect(() => {}, []);

  return (
    <div className="bg-gray-100 px-[45px] py-[50px]">
      {/* Social media row */}
      <div className="flex justify-end items-center gap-3 mb-4">
        <TextExtraSmallBlack>Suivez-nous</TextExtraSmallBlack>
        <a href="#" className="text-white rounded-full p-2">
          <Facebook className="w-4 h-4" />
        </a>
        <a href="#" className="text-white rounded-full p-2">
          <Instagram className="w-4 h-4" />
        </a>
        <a href="#" className="text-white rounded-full p-2">
          {/* TikTok */}
          <TikTok className="w-4 h-4 fill-white" viewBox="0 0 24 24" />
        </a>
        <a href="#" className="text-white rounded-full p-2">
          {/* WhatsApp */}
          <Whatsup className="w-4 h-4 fill-white" viewBox="0 0 24 24" />
        </a>
      </div>

      <hr className="border-1 border-black mb-6" />

      {/* Title */}
      <Label_Black>Service client d'excellence</Label_Black>
      <br />
      {/* Description */}
      <TextExtraSmallBlack className="text-sm text-gray-600 mb-6 max-w-4xl">
        Notre service clientèle vous fournira toutes les informations et l'assistance dont vous avez besoin. N'hésitez
        pas à demander des détails spécifiques sur nos véhicules, à envoyer des réclamations ou à faire des suggestions
        pour améliorer notre service.
      </TextExtraSmallBlack>

      {/* Contact buttons */}
      <div className="flex flex-wrap justify-end gap-3">
        <Button className="bg-[#005307] hover:bg-[#003705] text-white rounded-full gap-2">
          <Phone className="w-4 h-4" />
          0551838999
        </Button>
        <Button className="bg-[#005307] hover:bg-[#003705] text-white rounded-full gap-2">
          <Phone className="w-4 h-4" />
          0771153929
        </Button>
        <a href="mailto:contact@cazoo.dz">
          <Button className="bg-[#005307] hover:bg-[#003705] text-white rounded-full gap-2">
            <Mail className="w-4 h-4" />
            contact@cazoo.dz
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
