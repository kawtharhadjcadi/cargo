import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import React from 'react';
import { TextSmall } from '../../../../../../Style/TextStyle';

const Make = () => {
  React.useEffect(() => {}, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <TextSmall className="text-sm">Marque</TextSmall>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Sélectionner une marque" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="ford">Ford</SelectItem>
            <SelectItem value="bmw">BMW</SelectItem>
            <SelectItem value="audi">Audi</SelectItem>
            <SelectItem value="toyota">Toyota</SelectItem>
            <SelectItem value="mercedes">Mercedes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <TextSmall className="text-sm">Modèle</TextSmall>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Sélectionner un modèle" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="ford">Ford</SelectItem>
            <SelectItem value="bmw">BMW</SelectItem>
            <SelectItem value="audi">Audi</SelectItem>
            <SelectItem value="toyota">Toyota</SelectItem>
            <SelectItem value="mercedes">Mercedes</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    //     <div>
    //       <p>Marque</p>
    // <Select>
    //   <SelectTrigger className="w-full border-2 border-black rounded-lg h-12">
    //     <SelectValue placeholder="Sélectionner le statut" />
    //   </SelectTrigger>
    //   <SelectContent className="border-2 border-black rounded-lg">
    //     <SelectItem className="hover:bg-green-100 cursor-pointer" value="todo">À faire</SelectItem>
    //     <SelectItem className="hover:bg-green-100 cursor-pointer" value="in-progress">En cours</SelectItem>
    //     <SelectItem className="hover:bg-green-100 cursor-pointer" value="done">Terminé</SelectItem>
    //     <SelectItem className="hover:bg-green-100 cursor-pointer" value="cancelled">Annulé</SelectItem>
    //   </SelectContent>
    // </Select>
    //       <p>Modèle</p>
    //       <NativeSelect>
    //         <NativeSelectOption value="">Sélectionner le statut</NativeSelectOption>
    //         <NativeSelectOption value="todo">À faire</NativeSelectOption>
    //         <NativeSelectOption value="in-progress">En cours</NativeSelectOption>
    //         <NativeSelectOption value="done">Terminé</NativeSelectOption>
    //         <NativeSelectOption value="cancelled">Annulé</NativeSelectOption>
    //       </NativeSelect>
    //     </div>
  );
};

export default Make;
