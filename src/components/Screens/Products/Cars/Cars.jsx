import React, { useState } from 'react';

import AllCars from './AllCars';
import { X } from 'lucide-react';
import carsData from '../../../../data/dataCars.json';

const activeFilters = ['BMW', 'Hybride', 'Paris, FR'];

const Cars = ({ search, isMobile }) => {
  const [filters, setFilters] = useState(activeFilters);
  const [sort, setSort] = useState('Recommandé');

  const filteredCars = carsData.filter((car) => car.name.toLowerCase().includes((search ?? '').toLowerCase()));

  return (
    <section className="w-full">
      {/* Mobile: car count + sort */}
      {isMobile && (
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-800">{filteredCars.length}</span> véhicules trouvés
          </p>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-green-600"
          >
            <option>Recommandé</option>
            <option>Prix croissant</option>
            <option>Prix décroissant</option>
            <option>Plus récent</option>
          </select>
        </div>
      )}

      {/* Filter chips */}
      {filters.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mb-4">
          {filters.map((f) => (
            <span
              key={f}
              className="flex items-center gap-1 bg-white border border-gray-200 text-sm text-gray-700 rounded-full px-3 py-1 shadow-sm"
            >
              {f}
              <button onClick={() => setFilters(filters.filter((x) => x !== f))}>
                <X className="w-3 h-3 text-gray-400 hover:text-red-500" />
              </button>
            </span>
          ))}
          <button onClick={() => setFilters([])} className="text-sm text-green-700 font-medium hover:underline">
            Effacer tout
          </button>
        </div>
      )}

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => <AllCars key={car.id} car={car} />)
        ) : (
          <div className="col-span-full text-center py-20">
            <p className="text-muted-foreground font-medium">No cars found</p>
            <p className="text-sm text-gray-500 mt-1">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-1 mt-8">
        {['‹', '1', '2', '3', '...', '124', '›'].map((p, i) => (
          <button
            key={i}
            className={`w-8 h-8 rounded-lg text-sm font-medium transition ${
              p === '1'
                ? 'bg-green-700 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-green-500'
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Cars;
