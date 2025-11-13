import { create } from "zustand";

interface FilterState {
  filteredData: any[];
  filter: string;
  setFilter: (filter: string) => void;
  setFilteredData: (data: any[]) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  filter: "",
  filteredData: [],
  setFilteredData: (data: any[]) => set({ filteredData: data }),
  setFilter: (filter: string) => set({ filter }),
}));
