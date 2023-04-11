import React from "react";
import { ModalRef } from "./models";
import { useModal } from "./useModal";
import * as S from "native-base";

type Props = {};

export const modalRef = React.createRef<ModalRef>();

export default function Modal({}: Props) {
  const [Component, setShowComponent] = React.useState<React.FC>(() => <></>);

  const { isOpen, hide } = useModal({ setShowComponent, modalRef });
  return (
    <S.Modal isOpen={isOpen} onClose={hide}>
      {Component}
    </S.Modal>
  );
}

