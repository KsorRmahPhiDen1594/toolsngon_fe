import { useState, useEffect } from "react";

const TOAST_LIMIT = 1;

let count = 0;
function generateId(): string {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

interface ToastProps {
  id?: string;
  title?: string;
  description?: string;
  duration?: number | typeof Infinity;
  dismiss?: () => void;
  [key: string]: any;
}

interface ToastState {
  toasts: ToastProps[];
}

type Listener = (state: ToastState) => void;

const toastStore = {
  state: {
    toasts: [],
  } as ToastState,
  listeners: [] as Listener[],

  getState(): ToastState {
    return toastStore.state;
  },

  setState(nextState: Partial<ToastState> | ((state: ToastState) => ToastState)) {
    if (typeof nextState === "function") {
      toastStore.state = nextState(toastStore.state);
    } else {
      toastStore.state = { ...toastStore.state, ...nextState };
    }
    toastStore.listeners.forEach((listener) => listener(toastStore.state));
  },

  subscribe(listener: Listener) {
    toastStore.listeners.push(listener);
    return () => {
      toastStore.listeners = toastStore.listeners.filter((l) => l !== listener);
    };
  },
};

export function toast(props: ToastProps) {
  const id = generateId();

  const update = (updateProps: Partial<ToastProps>) =>
    toastStore.setState((state) => ({
      ...state,
      toasts: state.toasts.map((t) => (t.id === id ? { ...t, ...updateProps } : t)),
    }));

  const dismiss = () =>
    toastStore.setState((state) => ({
      ...state,
      toasts: state.toasts.filter((t) => t.id !== id),
    }));

  toastStore.setState((state) => ({
    ...state,
    toasts: [{ ...props, id, dismiss }, ...state.toasts].slice(0, TOAST_LIMIT),
  }));

  return {
    id,
    dismiss,
    update,
  };
}

export function useToast() {
  const [state, setState] = useState<ToastState>(toastStore.getState());

  useEffect(() => {
    const unsubscribe = toastStore.subscribe((state) => {
      setState(state);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    state.toasts.forEach((toast) => {
      if (toast.duration === Infinity) {
        return;
      }
      const timeout = setTimeout(() => {
        toast.dismiss?.();
      }, toast.duration ?? 5000);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [state.toasts]);

  return {
    toast,
    toasts: state.toasts,
  };
}
