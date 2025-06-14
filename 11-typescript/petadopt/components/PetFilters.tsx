"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";

interface PetFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filters: {
    species: string;
    size: string;
    age: string;
  };
  onFilterChange: (key: string, value: string) => void;
  onClearFilters: () => void;
}

export default function PetFilters({
  searchTerm,
  onSearchChange,
  filters,
  onFilterChange,
  onClearFilters,
}: PetFiltersProps) {
  const hasActiveFilters =
    searchTerm || filters.species || filters.size || filters.age;

  const handleFilterChange = (key: string, value: string) => {
    // Convert "all" back to empty string for the store
    const filterValue = value === "all" ? "" : value;
    onFilterChange(key, filterValue);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search pets by name, breed, or description..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Select
            value={filters.species || "all"}
            onValueChange={(value) => handleFilterChange("species", value)}
          >
            <SelectTrigger className="w-full sm:w-[140px]">
              <SelectValue placeholder="Species" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Species</SelectItem>
              <SelectItem value="dog">Dogs</SelectItem>
              <SelectItem value="cat">Cats</SelectItem>
              <SelectItem value="rabbit">Rabbits</SelectItem>
              <SelectItem value="bird">Birds</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={filters.size || "all"}
            onValueChange={(value) => handleFilterChange("size", value)}
          >
            <SelectTrigger className="w-full sm:w-[120px]">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sizes</SelectItem>
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="large">Large</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={filters.age || "all"}
            onValueChange={(value) => handleFilterChange("age", value)}
          >
            <SelectTrigger className="w-full sm:w-[120px]">
              <SelectValue placeholder="Age" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Ages</SelectItem>
              <SelectItem value="young">Young (0-2)</SelectItem>
              <SelectItem value="adult">Adult (3-7)</SelectItem>
              <SelectItem value="senior">Senior (8+)</SelectItem>
            </SelectContent>
          </Select>

          {hasActiveFilters && (
            <Button
              variant="outline"
              onClick={onClearFilters}
              className="flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Clear
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
