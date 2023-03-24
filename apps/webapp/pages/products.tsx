import {
  Box,
  Dialog,
  DialogTitle,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import { Product } from "database";
import Head from "next/head";
import { useContext, useState } from "react";

import {
  AddProductForm,
  RupeeChange,
  ProductList,
  UserContext,
} from "@components";
import { apiClient } from "@api";
import { ROLE } from "@constants";
import { BuyResult } from "@types";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [buyResult, setBuyResult] = useState<BuyResult>();
  const [addProdFormModal, setAddProdFormModal] = useState<JSX.Element>();
  const { user, setUser } = useContext(UserContext);

  const showEditFormProdModal = () => {
    setAddProdFormModal(
      <AddProductForm
        onAdd={async () => {
          setProducts((await apiClient.get("/products")).data);
        }}
        onClose={() => setAddProdFormModal(undefined)}
      />
    );
  };

  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid justifyContent="center" width="100%">
        {user?.role === ROLE.SELLER && (
          <>
            <Button
              variant="outlined"
              sx={{ ml: 4 }}
              onClick={showEditFormProdModal}
            >
              Add Product
            </Button>
            {addProdFormModal}
          </>
        )}
        <Grid item width="100%" md={8} sm={12}>
          <Box display="flex" width="100%" justifyContent="center">
            <ProductList
              onBuy={async (buyResult: BuyResult) => {
                setBuyResult(buyResult);
                setShowResult(true);
                setProducts((await apiClient.get("/products")).data);
                setUser?.((await apiClient.get("/auth/me")).data);
              }}
              refetchProducts={async () => {
                setProducts((await apiClient.get("/products")).data);
              }}
              products={products}
              setProducts={setProducts}
            />
          </Box>
        </Grid>
      </Grid>
      <Dialog open={showResult} onClose={() => setShowResult(false)}>
        <DialogTitle>you bought {buyResult?.product.productName}!</DialogTitle>

        {buyResult && (
          <Box p={3}>
            <RupeeChange change={buyResult.change} />
            <Typography mt={4}>
              total spent: {buyResult.totalSpent / 100}
            </Typography>
          </Box>
        )}
      </Dialog>
    </>
  );
};

export default Products;
