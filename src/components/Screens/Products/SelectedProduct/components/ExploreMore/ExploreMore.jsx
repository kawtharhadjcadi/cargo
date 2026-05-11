import CarCard from './CarCard';
import { Label_Black } from '../../../../../../Style/TextStyle';
import React from 'react';
import cars from '../../../../../../data/data.json';
const ExploreMore = () => {
  return (
    <section className="pt-[50px] pb-[100px]">
      <Label_Black className="mb-6">D'autres voitures qui pourraient vous plaire</Label_Black>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default ExploreMore;
