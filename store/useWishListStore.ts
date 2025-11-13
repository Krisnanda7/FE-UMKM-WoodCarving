import { create } from "zustand";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface WishlistState {
  wishlist: WishlistItem[];
  toggleWishlist: (item: WishlistItem) => void;
  isInWishlist: (id: number) => boolean;
}

export const useWishlistStore = create<WishlistState>((set, get) => ({
  wishlist: [],

  toggleWishlist: (item) => {
    const exists = get().wishlist.some((p) => p.id === item.id);
    if (exists) {
      set({ wishlist: get().wishlist.filter((p) => p.id !== item.id) });
    } else {
      set({ wishlist: [...get().wishlist, item] });
    }
  },

  isInWishlist: (id) => get().wishlist.some((p) => p.id === id),
}));
