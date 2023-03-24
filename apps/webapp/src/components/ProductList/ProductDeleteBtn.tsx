import { Dispatch, SetStateAction } from "react";
import { AxiosError } from "axios";
import { IconButton } from "@mui/material";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import { apiClient } from "@api";

export const ProductDeleteBtn = ({
  productId,
  refetchProducts,
  setError,
}: {
  productId: string;
  refetchProducts: () => {};
  setError: Dispatch<SetStateAction<AxiosError<unknown, any> | undefined>>;
}) => {
  return (
    <IconButton
      onClick={async () => {
        try {
          await apiClient.delete(`/products/${productId}`);
          refetchProducts();
        } catch (e) {
          setError(e as AxiosError);
        }
      }}
      sx={{ ml: 2, backgroundColor: "#fff" }}
    >
      <DeleteOutline color="error" />
    </IconButton>
  );
};
