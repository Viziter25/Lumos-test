import classNames from "classnames";
import { FC, ReactNode } from "react";

import styles from "./Title.module.scss";

interface IProps {
  tagName: "h1" | "h2" | "h3" | "h4";
  children?: ReactNode | string;
  className?: string;
}

export const Title: FC<IProps> = ({ tagName, children, className }) => {
  const Tag = tagName;

  return (
    <Tag className={classNames(styles.root, styles[tagName], className)}>
      {children}
    </Tag>
  );
};
