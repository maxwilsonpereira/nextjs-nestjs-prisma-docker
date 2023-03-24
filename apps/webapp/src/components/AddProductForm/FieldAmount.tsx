import * as React from "react";
import { FormControl, TextField } from "@mui/material";
import { Product } from "database";

export const FieldAmount = ({
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
        fullWidth
        label="amount available"
        value={newProduct?.amountAvailable}
        onChange={(event) => {
          setNewProduct((current) => ({
            ...current,
            amountAvailable: parseInt(event.target.value),
          }));
        }}
        type="number"
        InputProps={{ inputProps: { min: 1 } }}
      />
    </FormControl>
  );
};
