import { FC, ReactNode } from "react";
import styles from "./Text.module.scss";
import classNames from "classnames";

interface IProps {
  className?: string;
  children: ReactNode | string;
}

export const Text: FC<IProps> = ({ children, className }) => {
  return (
    <div className={classNames(styles.textDescription, className)}>
      {children}
    </div>
  );
};
