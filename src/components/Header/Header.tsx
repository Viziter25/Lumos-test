import Link from "next/link";

import LogoIcon from "@/assets/icons/LogoIcon.svg";

import styles from "./Header.module.scss";
import { Title } from "@/components/Title";
import { CustomButton } from "@/components/CustomButton";
import { Text } from "@/components/Text";
import { FC } from "react";

interface IProps {
  onGetVPNClick: () => void;
}

export const Header: FC<IProps> = ({ onGetVPNClick }) => {
  return (
    <div className={styles.root}>
      <Link href={"./"} className={styles.link}>
        <LogoIcon /> <Title tagName={"h3"}>VPN</Title>
      </Link>
      <CustomButton className={styles.headerButton} onClick={onGetVPNClick}>
        {" "}
        <Text>Get VPN</Text>
      </CustomButton>
    </div>
  );
};
