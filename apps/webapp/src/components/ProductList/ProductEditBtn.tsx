import { useState, Dispatch, SetStateAction } from "react";
import { AxiosError } from "axios";
import { IconButton } from "@mui/material";
import EditOutlined from "@mui/icons-material/EditOutlined";
import { Product } from "database";
import { apiClient } from "@api";
import { AddProductForm } from "@components";

export const ProductEditBtn = ({
  product,
  setProducts,
}: {
  product: Product;
  setProducts: (_data: Product[]) => void;
}) => {
  const [addProdFormModal, setAddProdFormModal] = useState<JSX.Element>();

  return (
    <>
      {addProdFormModal}
      <IconButton
        onClick={() =>
          setAddProdFormModal(
            <AddProductForm
              onAdd={async () => {
                setProducts((await apiClient.get("/products")).data);
              }}
              onClose={() => setAddProdFormModal(undefined)}
              product={product}
            />
          )
        }
        sx={{ ml: 2, backgroundColor: "#fff" }}
      >
        <EditOutlined color="primary" />
      </IconButton>
    </>
  );
};
