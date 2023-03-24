import * as React from "react";
import { AxiosError } from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Product } from "database";
import {
  ShowErrors,
  FieldCost,
  FieldAmount,
  FieldProdName,
  FieldImgUpload,
  FieldScheduling,
  FormSubmitBtn,
} from "@components";

export const AddProductForm = ({
  onAdd,
  onClose,
}: {
  onAdd: () => {};
  onClose: () => void;
}) => {
  const [newProduct, setNewProduct] = React.useState<Partial<Product>>();
  const [error, setError] = React.useState<AxiosError>();

  return (
    <Dialog
      open={true}
      onClose={onClose}
      PaperProps={{
        style: { width: "80%", maxWidth: 600 },
      }}
    >
      <IconButton
        sx={{ position: "absolute", top: 10, right: 15 }}
        color="inherit"
        onClick={onClose}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
      <DialogTitle sx={{ p: 3, pt: 6 }}>Add Product</DialogTitle>
      <DialogContent>
        <Stack gap={4}>
          <FieldCost newProduct={newProduct} setNewProduct={setNewProduct} />
          <FieldAmount newProduct={newProduct} setNewProduct={setNewProduct} />
          <FieldProdName setNewProduct={setNewProduct} />
          <FieldScheduling setNewProduct={setNewProduct} />
          <FieldImgUpload setNewProduct={setNewProduct} />
          <FormSubmitBtn
            setError={setError}
            onAdd={onAdd}
            newProduct={newProduct}
          />
        </Stack>
        <ShowErrors error={error as AxiosError} />
      </DialogContent>
    </Dialog>
  );
};
