import { ChevronLeft, ChevronRight, MoreHorizontalIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription } from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import DeleteDialog from './DeleteDialog/DeleteDialog';
import { Input } from '@/components/ui/input';
import ViewModal from './ViewModal/ViewModal';
import initialCars from '../../../../../data/dataCars';

const fuelColours = {
  Essence: 'bg-blue-100 text-blue-700',
  Diesel: 'bg-yellow-100 text-yellow-700',
  Hybride: 'bg-green-100 text-green-700',
  Électrique: 'bg-emerald-100 text-emerald-700',
};

const ITEMS_PER_PAGE = 10;

const Gestion = () => {
  const [data, setData] = useState(initialCars);
  const [viewCar, setViewCar] = useState(null);
  const [deleteCar, setDeleteCar] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    year: '',
    mileage: '',
    fuel: '',
    transmission: '',
    engine: '',
    bodyType: '',
    doors: '',
    seats: '',
    colour: '',
    features: '',
  });

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = data.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const resetForm = () => {
    setFormData({
      name: '',
      price: '',
      year: '',
      mileage: '',
      fuel: '',
      transmission: '',
      engine: '',
      bodyType: '',
      doors: '',
      seats: '',
      colour: '',
      features: '',
    });
    setEditingId(null);
  };

  const handleFormChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleAddCar = () => {
    if (!formData.name || !formData.price) {
      alert('Veuillez remplir au moins le nom et le prix');
      return;
    }

    const newCar = {
      reference: Math.max(...data.map((c) => c.reference), 0) + 1,
      ...formData,
      price: Number(formData.price),
      year: Number(formData.year) || null,
      mileage: Number(formData.mileage) || 0,
      doors: Number(formData.doors) || null,
      seats: Number(formData.seats) || null,
      features: formData.features
        ? formData.features
            .split(',')
            .map((f) => f.trim())
            .filter(Boolean)
        : [],
      images: ['https://via.placeholder.com/200x150?text=No+Image'],
      addedAgo: "à l'instant",
    };

    setData((prev) => [...prev, newCar]);
    resetForm();
    // Go to last page to see the new car
    const newTotalPages = Math.ceil((data.length + 1) / ITEMS_PER_PAGE);
    setCurrentPage(newTotalPages);
  };

  const handleEditCar = (car) => {
    setEditingId(car.reference);
    setFormData({
      name: car.name,
      price: car.price,
      year: car.year,
      mileage: car.mileage,
      fuel: car.fuel,
      transmission: car.transmission,
      engine: car.engine,
      bodyType: car.bodyType,
      doors: car.doors,
      seats: car.seats,
      colour: car.colour,
      features: car.features?.join(', ') || '',
    });
  };

  const handleSaveEdit = () => {
    setData((prev) =>
      prev.map((c) =>
        c.reference === editingId
          ? {
              ...c,
              ...formData,
              price: Number(formData.price),
              year: Number(formData.year) || null,
              mileage: Number(formData.mileage) || 0,
              doors: Number(formData.doors) || null,
              seats: Number(formData.seats) || null,
              features: formData.features
                ? formData.features
                    .split(',')
                    .map((f) => f.trim())
                    .filter(Boolean)
                : [],
            }
          : c,
      ),
    );
    resetForm();
  };

  const handleDelete = (reference) => {
    setData((prev) => prev.filter((c) => c.reference !== reference));
    if (paginatedData.length === 1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDuplicate = (car) => {
    const newRef = Math.max(...data.map((c) => c.reference), 0) + 1;
    setData((prev) => [...prev, { ...car, reference: newRef, addedAgo: "à l'instant" }]);
  };

  const fields = [
    { key: 'name', label: 'Nom', type: 'text' },
    { key: 'price', label: 'Prix (£)', type: 'number' },
    { key: 'year', label: 'Année', type: 'number' },
    { key: 'mileage', label: 'Kilométrage (km)', type: 'number' },
    { key: 'fuel', label: 'Type de carburant', type: 'text' },
    { key: 'transmission', label: 'Transmission', type: 'text' },
    { key: 'engine', label: 'Moteur', type: 'text' },
    { key: 'bodyType', label: 'Type de carrosserie', type: 'text' },
    { key: 'doors', label: 'Portes', type: 'number' },
    { key: 'seats', label: 'Sièges', type: 'number' },
    { key: 'colour', label: 'Couleur', type: 'text' },
  ];

  return (
    <>
      {/* TABLE */}
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10">#</TableHead>
              <TableHead>Véhicule</TableHead>
              <TableHead>Année</TableHead>
              <TableHead>Kilométrage</TableHead>
              <TableHead>Carburant</TableHead>
              <TableHead>Transmission</TableHead>
              <TableHead>Carrosserie</TableHead>
              <TableHead>Couleur</TableHead>
              <TableHead>Prix</TableHead>
              <TableHead>Ajouté</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((car) => (
                <TableRow key={car.reference} className="cursor-pointer" onClick={() => setViewCar(car)}>
                  <TableCell className="text-muted-foreground text-sm">{car.reference}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img src={car.images[0]} alt={car.name} className="h-10 w-14 rounded-md object-cover" />
                      <div>
                        <p className="font-medium leading-tight">{car.name}</p>
                        <p className="text-muted-foreground text-xs">{car.engine}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{car.year}</TableCell>
                  <TableCell>{car.mileage.toLocaleString()} km</TableCell>
                  <TableCell>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${fuelColours[car.fuel] ?? 'bg-gray-100 text-gray-700'}`}
                    >
                      {car.fuel}
                    </span>
                  </TableCell>
                  <TableCell>{car.transmission}</TableCell>
                  <TableCell>{car.bodyType}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5">
                      <span
                        className="inline-block h-3 w-3 rounded-full border border-gray-200"
                        style={{ background: car.colour.toLowerCase() }}
                      />
                      {car.colour}
                    </div>
                  </TableCell>
                  <TableCell className="font-semibold">£{car.price.toLocaleString()}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{car.addedAgo}</TableCell>
                  <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8">
                          <MoreHorizontalIcon />
                          <span className="sr-only">Ouvrir le menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setViewCar(car)}>Voir</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleEditCar(car)}>Modifier</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDuplicate(car)}>Dupliquer</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive" onClick={() => setDeleteCar(car)}>
                          Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="11" className="text-center py-8 text-muted-foreground">
                  Aucune voiture trouvée
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-muted-foreground">
          Affichage {startIdx + 1} à {Math.min(startIdx + ITEMS_PER_PAGE, data.length)} sur {data.length} voitures
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className="min-w-10"
              >
                {page}
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* ADD/EDIT FORM */}
      <div className="mt-8 p-6 border rounded-lg">
        <h2 className="text-lg font-semibold mb-4">
          {editingId ? `Modifier la voiture #${editingId}` : 'Ajouter une nouvelle voiture'}
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {fields.map(({ key, label, type }) => (
            <div key={key} className="flex flex-col gap-1.5">
              <label htmlFor={key} className="text-xs font-medium">
                {label}
              </label>
              <Input
                id={key}
                type={type}
                placeholder={label}
                value={formData[key]}
                onChange={(e) => handleFormChange(key, type === 'number' ? e.target.value : e.target.value)}
                className="h-9"
              />
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-1.5">
          <label className="text-xs font-medium">Caractéristiques (séparées par des virgules)</label>
          <Input
            placeholder="ex: Toit ouvrant, Sièges en cuir, GPS"
            value={formData.features}
            onChange={(e) => handleFormChange('features', e.target.value)}
            className="h-9"
          />
        </div>

        <div className="flex gap-2 mt-6">
          {editingId ? (
            <>
              <Button onClick={handleSaveEdit} className="bg-green-600 hover:bg-green-700">
                Enregistrer les modifications
              </Button>
              <Button variant="outline" onClick={resetForm}>
                Annuler
              </Button>
            </>
          ) : (
            <Button onClick={handleAddCar} className="bg-blue-600 hover:bg-blue-700">
              Ajouter une voiture
            </Button>
          )}
        </div>
      </div>

      {/* MODALS */}
      {viewCar && (
        <ViewModal
          car={viewCar}
          onClose={() => setViewCar(null)}
          onEdit={(car) => {
            setViewCar(null);
            handleEditCar(car);
          }}
        />
      )}
      {deleteCar && <DeleteDialog car={deleteCar} onClose={() => setDeleteCar(null)} onConfirm={handleDelete} />}
    </>
  );
};

export default Gestion;
