import { Label_BlackBold, TextExtraSmallBlack } from '../../Style/TextStyle';

import Facebook from '../Icons/Facebook';
import Instagram from '../Icons/Instagram';
import Mail from '../Icons/Mail';
import Phone from '../Icons/Phone';
import React from 'react';
import TikTok from '../Icons/TikTok';
import Whatsup from '../Icons/Whatsup';

const Contact = () => {
  return (
    <div className="bg-gray-100">
      {/* ── Top Header ── */}
      <div className="px-[45px] pt-10">
        <Label_BlackBold>Trouver nous</Label_BlackBold>
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <span className="text-gray-400">📍</span> Siège social · Zone Logistique Oran Ouest
          </span>
          <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">🏢 Centre régionale</span>
          <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
            🕐 Opérations 24h/24 et 7/7
          </span>
        </div>
      </div>
      <br />

      {/* ── Google Maps ── */}
      <div className="w-full h-[220px] md:h-[300px]">
        <iframe
          title="DZ Cargo Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.0!2d-0.6!3d35.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQyJzAwLjAiTiAwwrAzNicwMC4wIlc!5e0!3m2!1sfr!2sdz!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* ── Bottom Section ── */}
      <div className="px-[45px] py-10">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left — Contact info */}
          <div className="flex-1">
            <Label_BlackBold>Contactez le service client</Label_BlackBold>
            <br />
            <TextExtraSmallBlack className="text-sm text-gray-500 leading-relaxed max-w-3xl">
              Notre équipe d'experts est disponible pour vous accompagner dans vos projets de transport et de logistique
              automobile. Que vous soyez un professionnel ou un particulier, nous garantissons une réponse sous 24h pour
              toutes vos demandes.
            </TextExtraSmallBlack>

            {/* Contact cards */}
          </div>

          {/* Right — Social icons */}
          <div className="flex flex-col items-start md:items-end justify-start gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Suivez nous</p>
            <div className="flex gap-2">
              {[
                { icon: <Whatsup className="w-4 h-4" />, bg: '#25D366' },
                { icon: <Facebook className="w-4 h-4" />, bg: '#1877F2' },
                { icon: <TikTok className="w-4 h-4" />, bg: '#000000' },
                { icon: <Instagram className="w-4 h-4" />, bg: '#E1306C' },
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white transition hover:opacity-80"
                  style={{ backgroundColor: s.bg }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-end gap-3 mt-6 px-[45px] pb-[50px]">
        {/* Phone 1 */}
        <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 min-w-[160px]">
          <div className="p-2 rounded-full" style={{ backgroundColor: '#E8F5EE' }}>
            <Phone className="w-4 h-4" style={{ color: '#2A5C3F' }} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">+213 555 123 456</p>
          </div>
        </div>

        {/* Phone 2 */}
        <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 min-w-[160px]">
          <div className="p-2 rounded-full" style={{ backgroundColor: '#E8F5EE' }}>
            <Phone className="w-4 h-4" style={{ color: '#2A5C3F' }} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">+213 777 987 654</p>
          </div>
        </div>

        {/* Email */}
        <div
          className="flex items-center gap-3 rounded-2xl px-4 py-3 min-w-[160px]"
          style={{ backgroundColor: '#C0392B' }}
        >
          <div className="p-2 rounded-full bg-white/20">
            <Mail className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-white">contact@dzcargo.dz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
