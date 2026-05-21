import { create } from "zustand";

export type Toast = {
  id: string;
  title: string;
  description?: string;
};

type ToastState = {
  toasts: Toast[];
  push: (toast: Omit<Toast, "id">) => void;
  dismiss: (id: string) => void;
};

export const useToastStore = create<ToastState>((set, get) => ({
  toasts: [],
  push: (toast) => {
    const id = crypto.randomUUID();
    set({ toasts: [{ ...toast, id }, ...get().toasts].slice(0, 3) });
    setTimeout(() => get().dismiss(id), 4200);
  },
  dismiss: (id) => set({ toasts: get().toasts.filter((t) => t.id !== id) }),
}));

