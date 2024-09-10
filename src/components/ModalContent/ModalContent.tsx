import React, { FC } from "react";
import { Title } from "@/components/Title";
import * as yup from "yup";

import CloseIcon from "@/assets/icons/CloseIcon.svg";
import styles from "./ModalContent.module.scss";
import { CustomButton } from "@/components/CustomButton";
import { CustomInput } from "@/components/CustomInput/CustomInput";
import { useFormik } from "formik";

interface IProps {
  name: string;
  onClose: () => void;
}

export const ModalContent: FC<IProps> = ({ name, onClose }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .matches(
          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
          "Invalid email",
        )
        .required("Required field"),
    }),
    onSubmit: (data) => {
      console.log(data.email);
      onClose();
    },
  });

  return (
    <div className={styles.root}>
      <button className={styles.closeButton} onClick={onClose}>
        ✖
      </button>
      <Title tagName={"h1"} className={styles.title}>
        Your name
      </Title>
      <p>{name}</p>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.wrapper}>
          <CustomInput
            name={"email"}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
            id={"email"}
            placeholder={"Enter your email"}
            type={"email"}
          />
          <div className={styles.wrapperText}>
            <CloseIcon /> Your information is 100% secure. We don’t share your
            personal information.
          </div>
        </div>
        <CustomButton type="submit" className={styles.btn}>
          <Title tagName={"h2"}>Continue</Title>
        </CustomButton>
      </form>
    </div>
  );
};
