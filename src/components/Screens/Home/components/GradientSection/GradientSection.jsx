import { LabelHederGardianSection, Label_White, LogoWhite, TextSmallWhite } from '../../../../../Style/TextStyle';

import { Button } from '@/components/ui/button';
import React from 'react';

const GradientSection = () => {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden px-[45px] py-[50px]">
      <img src="/images/gardient_img.png" alt="car" className="absolute inset-0 w-full h-full object-cover" />

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(42,50,46,1) 0%, rgba(42,50,46,0.80) 50%, rgba(42,50,46,0) 100%)',
        }}
      />

      <div className="relative z-10 flex flex-col justify-center h-full">
        <LogoWhite>Arrêtez de rêver.</LogoWhite>
        <LabelHederGardianSection className="text-green-400 text-4xl md:text-6xl font-bold mb-6">
          Prenez le volant.
        </LabelHederGardianSection>
        <TextSmallWhite className="text-white">
          Financement flexible, transparence totale et livraison à domicile.
          <br /> La voiture de vos rêves est à portée de clic.
        </TextSmallWhite>
        <Button className="mt-8 w-fit outline-4 outline-offset-2 bg-[#005307] text-white text-[19px] p-5 hover:bg-[#C0392B] hover:text-black cursor-pointer">
          Découvrir notre sélection
        </Button>
      </div>
    </section>
  );
};

export default GradientSection;
