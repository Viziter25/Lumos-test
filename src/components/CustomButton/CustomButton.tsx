import classNames from "classnames";
import { FC, ReactNode } from "react";

import styles from "./CustomButton.module.scss";

interface IProps {
  children: ReactNode | string;
  type?: "button" | "submit" | "reset";
  className?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const CustomButton: FC<IProps> = ({
  children,
  type = "button",
  className,
  isDisabled = false,
  onClick,
}) => {
  return (
    <button
      className={classNames(styles.root, className)}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
