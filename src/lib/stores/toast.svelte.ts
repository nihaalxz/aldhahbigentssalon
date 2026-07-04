export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}

class ToastStore {
  // Use Svelte 5 reactive state
  toasts = $state<Toast[]>([]);

  add(message: string, type: 'success' | 'error' | 'info' = 'success', duration = 4000) {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: Toast = { id, message, type, duration };
    this.toasts = [...this.toasts, newToast];

    setTimeout(() => {
      this.remove(id);
    }, duration);
  }

  remove(id: string) {
    this.toasts = this.toasts.filter((t) => t.id !== id);
  }
}

export const toast = new ToastStore();
