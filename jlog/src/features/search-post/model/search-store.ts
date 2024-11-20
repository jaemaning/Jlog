import { create } from 'zustand';
import { SearchState } from './model';

export const useSearchStore = create<SearchState>((set) => ({
    isSearchOpen: false,
    toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),
}));