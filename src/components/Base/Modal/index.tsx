import { ReactNode } from "react";
import style from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { Button } from "../Button";
import { CloseIcon } from "@/components/Icons";

interface ModalProps {
  show: boolean;
  title: string;
  children?: ReactNode;
  onClose: () => void;
  onYes: () => void;
}

export const Modal = ({ show, title, children, onClose, onYes }: ModalProps) => {
  const modalPortal = document.getElementById("modal-portal") as Element;
  return (
    show &&
    createPortal(
      <div className={style.modal} onClick={onClose}>
        <div
          className={style["modal-content"]}
          // onClick={e => e.stopPropagation()}
        >
          <div className={style["modal-header"]}>
            <h4 className={style["modal-title"]}>{title}</h4>
            <Button variant={"none"} onClick={onClose}>
              <CloseIcon width={16} height={16} />
            </Button>
          </div>
          <div className={style["modal-body"]}>{children}</div>
          <div className={style["modal-footer"]}>
            <Button variant={"filled"} onClick={onYes}>
              Да
            </Button>
            <Button variant={"outlined"} onClick={onClose}>
              Нет
            </Button>
          </div>
        </div>
      </div>,
      modalPortal
    )
  );
};
