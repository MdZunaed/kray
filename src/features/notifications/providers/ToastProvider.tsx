"use client";

import { Bell, CheckCircle, TriangleAlert, X, XCircle } from "lucide-react";
import { createContext, useCallback, useContext, useMemo, useState } from "react";

export type ToastStatus = "general" | "success" | "warning" | "error";

type ToastInput = {
  title: string;
  description?: string;
  status?: ToastStatus;
  duration?: number;
};

type ToastItem = ToastInput & {
  id: string;
  status: ToastStatus;
};

type ToastContextValue = {
  showToast: (toast: ToastInput) => void;
  dismissToast: (id: string) => void;
};

const DEFAULT_DURATION = 3200;

const ToastContext = createContext<ToastContextValue | null>(null);

const toastStyles: Record<ToastStatus, { container: string; icon: string; Icon: typeof Bell }> = {
  general: {
    container: "border-primary-200 bg-white text-primary-950",
    icon: "bg-primary-100 text-primary-700",
    Icon: Bell,
  },
  success: {
    container: "border-emerald-200 bg-emerald-50 text-emerald-950",
    icon: "bg-emerald-100 text-emerald-700",
    Icon: CheckCircle,
  },
  warning: {
    container: "border-amber-200 bg-amber-50 text-amber-950",
    icon: "bg-amber-100 text-amber-700",
    Icon: TriangleAlert,
  },
  error: {
    container: "border-rose-200 bg-rose-50 text-rose-950",
    icon: "bg-rose-100 text-rose-700",
    Icon: XCircle,
  },
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    ({ title, description, status = "general", duration = DEFAULT_DURATION }: ToastInput) => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

      setToasts((currentToasts) => [
        ...currentToasts,
        { id, title, description, status, duration },
      ]);

      window.setTimeout(() => {
        dismissToast(id);
      }, duration);
    },
    [dismissToast]
  );

  const value = useMemo(
    () => ({
      showToast,
      dismissToast,
    }),
    [dismissToast, showToast]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed inset-x-4 top-4 z-[100] flex flex-col gap-3 sm:left-auto sm:right-4 sm:w-full sm:max-w-sm">
        {toasts.map((toast) => {
          const { Icon, container, icon } = toastStyles[toast.status];

          return (
            <div
              key={toast.id}
              className={`pointer-events-auto rounded-2xl border px-4 py-3 shadow-lg backdrop-blur-sm transition ${container}`}
              role="status"
              aria-live="polite"
            >
              <div className="flex items-start gap-3">
                <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${icon}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">{toast.title}</p>
                  {toast.description ? (
                    <p className="mt-1 text-sm/5 opacity-80">{toast.description}</p>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={() => dismissToast(toast.id)}
                  className="rounded-full p-1 opacity-60 transition hover:bg-black/5 hover:opacity-100"
                  aria-label="Dismiss notification"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}
