import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import React from 'react';

const Sort = () => {
  React.useEffect(() => {}, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Sélectionner l'ordre de tri" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="ford">Prix le plus élevé</SelectItem>
            <SelectItem value="bmw">Prix le plus bas</SelectItem>
            <SelectItem value="audi">Récemment ajouté</SelectItem>
            <SelectItem value="toyota">Kilométrage le plus faible</SelectItem>
            <SelectItem value="mercedes">Kilométrage le plus élevé</SelectItem>
            <SelectItem value="toyota">Année la plus récente</SelectItem>
            <SelectItem value="mercedes">Année la plus ancienne</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Sort;