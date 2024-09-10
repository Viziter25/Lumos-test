import { Header } from "@/components/Header";
import { BannerContent } from "@/components/BannerContent";

import styles from "./MainPageContent.module.scss";
import { BenefitsInfo } from "@/components/BenefitsContent";
import { Title } from "@/components/Title";
import { ChooseName } from "@/components/ChooseName";
import { useRef } from "react";

export const MainPageContent = () => {
  const chooseNameRef = useRef<HTMLDivElement | null>(null);

  const scrollToChooseName = () => {
    if (chooseNameRef.current) {
      const offset = 90;
      const top = chooseNameRef.current.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.root}>
      <Header onGetVPNClick={scrollToChooseName} />
      <div className={styles.contentWrapper}>
        <BannerContent />
        <BenefitsInfo />
        <Title tagName={"h2"} className={styles.title}>
          Millions of people trust us!
        </Title>
        <div ref={chooseNameRef} className={styles.wrapperRef}>
          <ChooseName />
        </div>
      </div>
    </div>
  );
};
