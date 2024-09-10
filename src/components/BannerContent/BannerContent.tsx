import { Title } from "@/components/Title";
import Image from "next/image";
import bannerImage from "@/assets/img/Banner.png";

import styles from "./BannerContent.module.scss";
import { CustomButton } from "@/components/CustomButton";
import { Trusted } from "@/components/Trusted/Trusted";
import { Info } from "@/components/Info/Info";
import Link from "next/link";

export const BannerContent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapperContent}>
        <Title tagName={"h3"} className={styles.title}>
          Access <span className={styles.span}>everything</span>
          <br />
          <span className={styles.span}>securely </span>with
          <br />
          VPN
        </Title>
        <Image src={bannerImage} alt={"MainBanner"} loading={"lazy"} />
        <CustomButton className={styles.buttonVPN}>
          <Title tagName={"h2"}>Get VPN</Title>
        </CustomButton>
      </div>
      <Trusted />
      <Info />
      <p className={styles.text}>
        {" "}
        VPN-your{" "}
        <Link href={"./"} className={styles.link}>
          ultimate
        </Link>{" "}
        solution for a private and secure online experience!
      </p>
    </div>
  );
};
