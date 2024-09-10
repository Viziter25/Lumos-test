import classNames from "classnames";
import { ChangeEvent, FC } from "react";

import styles from "./CustomInput.module.scss";

interface IProps {
  value: string;
  id?: string;
  name?: string;
  type?: "text" | "email";
  placeholder?: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInput: FC<IProps> = ({
  value,
  id,
  name,
  type = "text",
  placeholder = "Placeholder",
  error,
  onChange,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.inputWrapper}>
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={classNames(styles.input, { [styles.error]: error })}
        />
      </div>
      {error && (
        <div className={styles.errorWrapper}>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
