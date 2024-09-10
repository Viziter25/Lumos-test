import RightIcon from "@/assets/icons/RightIcon.svg";
import LeftIcon from "@/assets/icons/LeftIcon.svg";
import { Text } from "@/components/Text";
import styles from "./Trusted.module.scss";

export const Trusted = () => {
  return (
    <div className={styles.root}>
      <LeftIcon />
      <div className={styles.wrapper}>
        <p className={styles.capture}>Trusted by</p>
        <Text>50M+ Users</Text>
      </div>
      <RightIcon />
    </div>
  );
};
