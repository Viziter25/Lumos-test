import { FC } from "react";

import styles from "./NameItem.module.scss";

interface IProps {
  name: string;
  selectedName: string;
  setSelectedName: (item: string) => void;
}

export const NameItem: FC<IProps> = ({
  name,
  setSelectedName,
  selectedName,
}) => {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedName(event.target.value);
  };

  return (
    <label className={styles.root}>
      <input
        type="radio"
        value={name}
        className={styles.radio}
        checked={selectedName === name}
        onChange={handleNameChange}
      />
      <div className={styles.customRadio}></div>
      {name}
    </label>
  );
};
