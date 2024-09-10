import React from "react";
import styles from "./Modal.module.scss";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<IProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return <div className={styles.modalOverlay}>{children}</div>;
};
