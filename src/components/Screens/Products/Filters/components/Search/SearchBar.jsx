import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SearchBar = ({ placeholder = 'Rechercher une voiture...', onSearch }) => {
  const [query, setQuery] = useState('');

  const handleClear = () => {
    setQuery('');
    onSearch?.('');
    onSearch?.(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full border border-input rounded-full px-4 py-2 gap-2 bg-white shadow-sm focus-within:ring-2 focus-within:ring-ring transition"
    >
      <Search className="w-4 h-4 text-muted-foreground shrink-0" />

      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="border-0 shadow-none focus-visible:ring-0 p-0 h-auto flex-1"
      />

      {query && (
        <button type="button" onClick={handleClear} className="text-muted-foreground hover:text-foreground transition">
          <X className="w-4 h-4" />
        </button>
      )}

      <Button type="submit" size="sm" className="rounded-full bg-green-600 hover:bg-green-700 text-white px-4">
        Rechercher
      </Button>
    </form>
  );
};

export default SearchBar;
