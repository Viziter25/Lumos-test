import { Benefits } from "@/components/BenefitsContent/components/Benefits";

import styles from "./BenefitsInfo.module.scss";
import { TempInfoBenefits } from "@/temp/tempContent";

export const BenefitsInfo = () => {


  return (
    <div className={styles.root}>
      {TempInfoBenefits.map((item) => (
        <Benefits
          key={item.id}
          icon={item.icon}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
};
