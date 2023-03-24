import { useContext, useEffect, useState } from "react";
import { AxiosError } from "axios";
import { List, ListItem, Stack, Typography } from "@mui/material";
import { Product } from "database";
import { BuyResult } from "@types";
import { apiClient } from "@api";
import { ShowErrors, UserContext, ProductUnit, ProductBuy } from "@components";

type Props = {
  products: Product[];
  setProducts: (_data: Product[]) => void;
  onBuy: (_buyResylt: BuyResult) => void;
  refetchProducts: () => {};
};

export const ProductList = ({
  products,
  setProducts,
  onBuy,
  refetchProducts,
}: Props) => {
  const [error, setError] = useState<AxiosError>();
  const { user } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      try {
        setProducts((await apiClient.get("/products")).data);
        setError(undefined);
      } catch (e) {
        setError(e as AxiosError);
      }
    })();
  }, [setProducts]);

  if (!user) return null;

  if (products.length === 0) {
    return <Typography>There are currently no products.</Typography>;
  }

  return (
    <Stack alignItems="center" gap={3} display="flex" width="100%">
      <List
        sx={{
          pt: 2,
          pb: 4,
          width: "100%",
          maxWidth: "800px",
          bgcolor: "background",
          m: "0 auto",
        }}
      >
        {products?.map((product) =>
          product.amountAvailable > 0 ? (
            <ListItem key={product.id} sx={{ p: 0.5 }}>
              <ProductUnit
                product={product}
                setProducts={setProducts}
                refetchProducts={refetchProducts}
                setError={setError}
              />
              <ProductBuy
                user={user}
                product={product}
                onBuy={onBuy}
                setError={setError}
              />
            </ListItem>
          ) : null
        )}
      </List>
      <ShowErrors error={error as AxiosError} />
    </Stack>
  );
};
