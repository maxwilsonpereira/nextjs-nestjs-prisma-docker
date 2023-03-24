import { useState, useEffect } from "react";
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
  product,
}: {
  onAdd: () => {};
  onClose: () => void;
  product?: Product;
}) => {
  const [newProduct, setNewProduct] = useState<Partial<Product>>();
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    if (product) setNewProduct(product);
  }, [product]);

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
      <DialogTitle sx={{ pt: 6 }}>
        {product ? "Edit" : "Add"} Product
      </DialogTitle>
      <DialogContent>
        <Stack gap={4}>
          <FieldCost newProduct={newProduct} setNewProduct={setNewProduct} />
          <FieldAmount newProduct={newProduct} setNewProduct={setNewProduct} />
          <FieldProdName
            newProduct={newProduct}
            setNewProduct={setNewProduct}
          />
          <FieldScheduling product={product} setNewProduct={setNewProduct} />
          <FieldImgUpload setNewProduct={setNewProduct} />
          <FormSubmitBtn
            setError={setError}
            onAdd={onAdd}
            onClose={onClose}
            newProduct={newProduct}
            editProduct={typeof product !== "undefined"}
          />
        </Stack>
        <ShowErrors error={error as AxiosError} />
      </DialogContent>
    </Dialog>
  );
};
