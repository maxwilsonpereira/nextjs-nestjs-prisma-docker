import { Dispatch, SetStateAction } from "react";
import { AxiosError } from "axios";
import { IconButton } from "@mui/material";
import EditOutlined from "@mui/icons-material/EditOutlined";
import { apiClient } from "@api";

export const ProductEditBtn = ({
  productId,
  onDelete,
  setError,
}: {
  productId: string;
  onDelete: () => {};
  setError: Dispatch<SetStateAction<AxiosError<unknown, any> | undefined>>;
}) => {
  return (
    <IconButton
      onClick={async () => {
        try {
          await apiClient.delete(`/products/${productId}`);
          onDelete();
        } catch (e) {
          setError(e as AxiosError);
        }
      }}
      sx={{ ml: 2, backgroundColor: "#fff" }}
    >
      <EditOutlined color="primary" />
    </IconButton>
  );
};
