import React from "react";
import { AlertConfig, AlertRef, AlertViewModel } from "./model";

interface HookAlertProps {
  alertRef: React.RefObject<AlertRef>;
}

export function useAlert({ alertRef }: HookAlertProps): AlertViewModel {
  const [alertConfig, setAlertConfig] = React.useState<AlertConfig>({
    text: "",
    status: "success",
    isOpen: false,
  });

  function open(config: AlertConfig) {
    setAlertConfig((prev) => ({ ...prev, ...config }));
  }

  function hide() {
    setAlertConfig({
      text: "",
      isOpen: false,
    });
  }

  React.useImperativeHandle(alertRef, () => ({
    open,
    hide,
    isOpen: alertConfig.isOpen,
  }));

  React.useEffect(() => {
    setTimeout(() => {
      hide();
    }, 3000);
  }, []);

  return { alertConfig, open, hide };
}

