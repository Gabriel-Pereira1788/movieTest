import React from "react";
import { ModalRef, ModalViewModel } from "./models";

type Props = {
  modalRef: React.RefObject<ModalRef>;
  setShowComponent: React.Dispatch<React.SetStateAction<React.FC>>;
};

export function useModal({
  modalRef,
  setShowComponent,
}: Props): ModalViewModel {
  const [isOpen, setisOpen] = React.useState(false);

  function hide() {
    setisOpen(false);
  }

  function show(Comp: React.FC) {
    setShowComponent(Comp);
    setisOpen(true);
  }

  React.useImperativeHandle(modalRef, () => ({ show, hide, isOpen }));

  return { isOpen, hide };
}

