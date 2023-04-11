export interface ModalRef {
  hide: () => void;
  show: (Comp: React.FC) => void;
  isOpen: boolean;
}

export interface ModalViewModel {
  isOpen: boolean;
  hide: () => void;
}
