import { FC, ReactNode } from "react";
import { Title } from "@/components/Title";

import styles from "./Benefits.module.scss";

interface IProps {
  icon: ReactNode;
  title: string;
  text: string;
}

export const Benefits: FC<IProps> = ({ icon, title, text }) => {
  const titleWords = title.split(" ");
  const firstWord = titleWords[0];
  const remainingWords = titleWords.slice(1).join(" ");

  return (
    <div className={styles.root}>
      {icon}
      <Title tagName={"h1"} className={styles.title}>
        {" "}
        <span className={styles.orange}>{firstWord}</span>
        <br /> {remainingWords}
      </Title>
      <Title tagName={"h4"} className={styles.text}>
        {text}
      </Title>
    </div>
  );
};
