import * as React from "react";
import { FormControl, TextField } from "@mui/material";
import { Product } from "database";
import { NumberFormatCustom } from "@components";

export const FieldCost = ({
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
        sx={{ mt: 2 }}
        label="cost"
        value={newProduct?.cost ? newProduct?.cost / 100 : undefined}
        onChange={(e) => {
          setNewProduct((current) => ({
            ...current,
            cost: parseFloat(e.target.value) * 100,
          }));
        }}
        InputProps={{
          inputComponent: NumberFormatCustom as any,
        }}
        variant="outlined"
      />
    </FormControl>
  );
};
