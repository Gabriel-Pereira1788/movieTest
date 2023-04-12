export interface AlertConfig {
  text: string;
  status?: "error" | "success" | "warning" | "info";
  isOpen: boolean;
}

export interface AlertRef {
  isOpen: boolean;
  hide: () => void;
  open: (config: AlertConfig) => void;
}

export interface AlertViewModel {
  alertConfig: AlertConfig;
  open: (config: AlertConfig) => void;
  hide: () => void;
}
