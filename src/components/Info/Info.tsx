import LocationMiniIcon from "@/assets/icons/LocationMiniIcon.svg";
import HierarchyIcon from "@/assets/icons/HierarchyIcon.svg";
import { Title } from "@/components/Title";

import styles from "./Info.module.scss";

export const Info = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <LocationMiniIcon />
        <div className={styles.wrapperText}>
          <Title tagName={"h2"}>50+</Title>
          <p className={styles.capture}>Locations</p>
        </div>
      </div>
      <span className={styles.line}></span>
      <div className={styles.wrapper}>
        <HierarchyIcon />
        <div className={styles.wrapperText}>
          <Title tagName={"h2"}>1000+</Title>
          <p className={styles.capture}>Servers</p>
        </div>
      </div>
    </div>
  );
};
