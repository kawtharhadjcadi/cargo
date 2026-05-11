import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

import AudiLogo from '../../../../Icons/AudiLogo';
import Autoplay from 'embla-carousel-autoplay';
import BmwLogo from '../../../../Icons/BmwLogo';
import FordLogo from '../../../../Icons/FordLogo';
import HyundaiLogo from '../../../../Icons/HyundaiLogo';
import KiaLogo from '../../../../Icons/KiaLogo';
import LandRoverLogo from '../../../../Icons/LandRoverLogo';
import MercedesLogo from '../../../../Icons/MercedesLogo';
import NissanLogo from '../../../../Icons/NissanLogo';
import React from 'react';
import SkodaLogo from '../../../../Icons/SkodaLogo';
import ToyotaLogo from '../../../../Icons/ToyotaLogo';
import VolsLogo from '../../../../Icons/VolsLogo';

const BrandFilter = () => {
  React.useEffect(() => {}, []);

  const plugin = React.useRef(
    Autoplay({
      delay: 1000,
      stopOnInteraction: false,
      playOnInit: true,
      speed: 500,
    }),
  );

  const carsLogo = [
    { key: 1, icon: '/images/car-logo1.png' },
    { key: 2, icon: '/images/car-logo2.png' },
    { key: 3, icon: '/images/car-logo3.png' },
    { key: 4, icon: '/images/car-logo4.png' },
    { key: 5, icon: '/images/car-logo5.png' },
    { key: 6, icon: '/images/car-logo6.png' },
    { key: 7, icon: '/images/car-logo7.png' },
    { key: 8, icon: '/images/car-logo8.png' },
  ];

  return (
    <section className="py-[36px]">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          loop: true,
          dragFree: true,
          align: 'start',
        }}
      >
        <CarouselContent>
          {carsLogo.map((item) => (
            <CarouselItem key={item.key} className="basis-1/2 pl-2 md:basis-1/6">
              <div className="p-1">
                {/* <span>{item.icon}</span> */}
                <img src={item.icon} alt="car" className="py-1 h-15 cursor-pointer" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default BrandFilter;
