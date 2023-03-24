import * as React from "react";
import { FormControl, TextField } from "@mui/material";
import { Product } from "database";

export const FieldProdName = ({
  setNewProduct,
}: {
  setNewProduct: React.Dispatch<
    React.SetStateAction<Partial<Product> | undefined>
  >;
}) => {
  return (
    <FormControl>
      <TextField
        label="product name"
        onChange={(event) => {
          setNewProduct((current) => ({
            ...current,
            productName: event.target.value,
          }));
        }}
        type="text"
      />
    </FormControl>
  );
};
