import * as React from "react";
import { AxiosError } from "axios";
import { Box, Stack, TextField, Typography } from "@mui/material";
import { Product } from "database";
import {
  ShowErrors,
  FieldCost,
  FieldAmount,
  FieldProdName,
  FormSubmitBtn,
} from "@components";

export const AddProductForm = ({ onAdd }: { onAdd: () => {} }) => {
  const [newProduct, setNewProduct] = React.useState<Partial<Product>>();
  const [error, setError] = React.useState<AxiosError>();

  return (
    <Box sx={{ width: "300px" }}>
      <Typography mb={5} variant="h4">
        Add Product
      </Typography>

      <Stack gap={4}>
        <FieldCost newProduct={newProduct} setNewProduct={setNewProduct} />
        <FieldAmount newProduct={newProduct} setNewProduct={setNewProduct} />
        <FieldProdName setNewProduct={setNewProduct} />
        <FormSubmitBtn
          setError={setError}
          onAdd={onAdd}
          newProduct={newProduct}
        />
      </Stack>
      <ShowErrors error={error as AxiosError} />
    </Box>
  );
};
