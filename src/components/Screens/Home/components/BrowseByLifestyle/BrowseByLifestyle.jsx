import { Label_Black } from '../../../../../Style/TextStyle';
import React from 'react';
const BrowseByLifestyle = () => {
  React.useEffect(() => {}, []);

  const bodyCar = [
    { key: 1, icon: 'images/car-elec.png', title: 'VE' },
    { key: 2, icon: 'images/car-suv.png', title: 'SUV' },
    { key: 3, icon: 'images/car-sedan.png', title: 'Camion' },
    { key: 4, icon: 'images/car-hybride.png', title: 'Sedan' },
    // { key: 5, icon: 'images/hybrid.png', title: 'Hybrid' },
  ];

  return (
    <section className="px-[45px] py-[50px] flex flex-col justify-center items-center gap-9">
      <div className="flex gap-12 overflow-x-auto">
        {bodyCar.map((item) => (
          <div key={item.key}>
            {/* <Label_Black>{item.title}</Label_Black> */}
            <img src={item.icon} alt="car" className="py-1 cursor-pointer" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseByLifestyle;
