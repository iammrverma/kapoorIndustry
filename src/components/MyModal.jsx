import React, { createContext, useContext, useState } from "react";

import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";

import { Modal, Typography } from "@mui/material";

const ModalContext = createContext();
const MOB_NUMBER = 9873087374;
// Modal Context Provider
export const ModalProvider = ({ children }) => {
  const [variant, setVariant] = useState(undefined);

  const openModal = (variantType) => setVariant(variantType);
  const closeModal = () => setVariant(undefined);

  return (
    <ModalContext.Provider value={{ variant, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Hook to use the Modal Context in any component
export const useModal = () => useContext(ModalContext);

const MyModal = () => {
  const { variant, closeModal } = useModal();
  const title = variant === "query" ? "Have issues!" : "Place Order Now !";
  const content =
    variant === "query"
    ? "Dial or click the Number above to Ask your Query to our executive"
    : "Dial or click the number above to Book your order with our executive";

  return (
    <Modal open={!!variant} onClose={closeModal}>
      <ModalDialog variant={"soft"}>
        <div onClick={closeModal}>
          <ModalClose />
        </div>
        <DialogTitle>{title}</DialogTitle>
        <Typography variant="h6" color="var(--primary-bg-color)">
          <a href={`tel:${MOB_NUMBER}`}>{MOB_NUMBER}</a>
        </Typography>

        <DialogContent>{content}</DialogContent>
      </ModalDialog>
    </Modal>
  );
};

export default MyModal;
