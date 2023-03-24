import * as React from "react";
import { AxiosError } from "axios";
import { Button } from "@mui/material";
import { BuyResult } from "@types";
import { apiClient } from "@api";
import { Product } from "database";

export const FormSubmitBtn = ({
  setError,
  onAdd,
  onClose,
  newProduct,
  editProduct,
}: {
  setError: React.Dispatch<
    React.SetStateAction<AxiosError<unknown, any> | undefined>
  >;
  onAdd: () => {};
  onClose: () => void;
  newProduct: Partial<Product> | undefined;
  editProduct: boolean;
}) => {
  return (
    <Button
      onClick={async () => {
        try {
          if (editProduct && newProduct && newProduct.id)
            await apiClient.put<BuyResult>(
              `/products/${newProduct.id}`,
              newProduct
            );
          else await apiClient.post<BuyResult>("/products", newProduct);
          onAdd();
          onClose();
        } catch (e) {
          setError(e as AxiosError);
        }
      }}
      variant="outlined"
    >
      submit
    </Button>
  );
};
