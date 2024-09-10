import { Title } from "@/components/Title";

import styles from "./ChooseName.module.scss";
import { NameItem } from "@/components/ChooseName/components";
import { useEffect, useState } from "react";
import { CustomButton } from "@/components/CustomButton";
import { fetchUsers } from "@/pages/api/featchUsers";
import { User } from "@/types/typesProject";
import { Modal } from "@/components/Modal";
import { ModalContent } from "@/components/ModalContent";

export const ChooseName = () => {
  const [selectedName, setSelectedName] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.root}>
      <Title tagName={"h1"} className={styles.title}>
        Choose <span className={styles.span}>your name</span>
      </Title>
      <div className={styles.wrapper}>
        {users.map((item) => (
          <NameItem
            key={item.name.first}
            name={`${item.name.first} ${item.name.first}`}
            selectedName={selectedName}
            setSelectedName={setSelectedName}
          />
        ))}
        <CustomButton onClick={handleOpenModal} isDisabled={!selectedName}>
          <Title tagName={"h2"}>Get VPN</Title>
        </CustomButton>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalContent name={selectedName} onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};
