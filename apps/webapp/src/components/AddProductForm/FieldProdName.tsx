import * as React from "react";
import { FormControl, TextField } from "@mui/material";
import { Product } from "database";

export const FieldProdName = ({
  newProduct,
  setNewProduct,
}: {
  newProduct: Partial<Product> | undefined;
  setNewProduct: React.Dispatch<
    React.SetStateAction<Partial<Product> | undefined>
  >;
}) => {
  return (
    <FormControl>
      <TextField
        label="product name"
        value={newProduct?.productName}
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
