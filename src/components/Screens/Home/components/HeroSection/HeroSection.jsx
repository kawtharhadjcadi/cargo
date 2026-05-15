import { LabelHederGardianSection, LogoGreen, TextSmall } from '../../../../../Style/TextStyle';

import { Button } from '@/components/ui/button';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full md:h-[80vh] lg:h-[70vh] sm:py-[6px] overflow-hidden px-[45px] flex items-center bg-gray-100">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6 lg:gap-10">
        {/* Left — Text */}
        <div className="flex flex-col justify-center w-full lg:max-w-[580px] z-10">
          {/* Title row */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <LogoGreen className="text-xl md:text-2xl">Bienvenue sur</LogoGreen>
            <LabelHederGardianSection className="text-2xl md:text-4xl font-medium">DZ Cargo</LabelHederGardianSection>
            {/* <div className="flex items-center gap-1">
              <img src="https://flagcdn.com/w40/dz.png" alt="Algeria" className="w-6 h-5 rounded-full object-cover" />
              <img src="https://flagcdn.com/w40/cn.png" alt="China" className="w-6 h-5 rounded-full object-cover" />
            </div> */}
          </div>

          <TextSmall>
            Votre intermédiaire commercial pour l'achat et l'expédition de voitures chinoises vers l'Algérie
          </TextSmall>

          <Button className="mt-8 w-fit outline-4 outline-offset-2 bg-[#005307] text-white text-[19px] p-5 hover:bg-[#C0392B] hover:text-black cursor-pointer">
            Chercher mon véhicule
          </Button>
        </div>

        <div className="w-full lg:w-[55%] flex items-center justify-center lg:justify-end">
          <img
            src="images/home-car2.png"
            alt="car"
            className="w-full object-contain"
            style={{
              maxHeight: 'clamp(200px, 40vw, 460px)',
              filter: 'drop-shadow(0px 40px 15px rgba(0,0,0,0.25))',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
