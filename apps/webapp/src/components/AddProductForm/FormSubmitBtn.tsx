import * as React from "react";
import { AxiosError } from "axios";
import { Button } from "@mui/material";
import { BuyResult } from "@types";
import { apiClient } from "@api";
import { Product } from "database";

export const FormSubmitBtn = ({
  setError,
  onAdd,
  newProduct,
}: {
  setError: React.Dispatch<
    React.SetStateAction<AxiosError<unknown, any> | undefined>
  >;
  onAdd: () => {};
  newProduct: Partial<Product> | undefined;
}) => {
  return (
    <Button
      onClick={async () => {
        try {
          await apiClient.post<BuyResult>("/products", newProduct);
          onAdd();
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
