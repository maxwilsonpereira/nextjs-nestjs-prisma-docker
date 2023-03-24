import { Dispatch, SetStateAction, useContext } from "react";
import { AxiosError } from "axios";
import { CurrencyRupee } from "@mui/icons-material";
import {
  Box,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";
import { Product } from "database";
import { ROLE } from "@constants";
import { UserContext, ProductDeleteBtn, ProductEditBtn } from "@components";

export const ProductUnit = ({
  product,
  onDelete,
  setError,
}: {
  product: Product;
  onDelete: () => {};
  setError: Dispatch<SetStateAction<AxiosError<unknown, any> | undefined>>;
}) => {
  const { user } = useContext(UserContext);
  const prodExpired = new Date(product.expireDate) < new Date();

  return (
    <ListItemText
      sx={{
        p: 1,
        m: 0,
        width: { md: "300px", xs: "80px" },
        backgroundColor: prodExpired
          ? "rgba(0, 0, 0, 0.2)"
          : "rgba(0, 0, 0, 0.05)",
        borderRadius: 1,
      }}
      primary={
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <ListItemAvatar>
            <Avatar
              sx={{ color: "#000", backgroundColor: "#fff" }}
              src={product.productImage}
              alt={`${product.productName}-img`}
            />
          </ListItemAvatar>
          <Typography fontSize={20} sx={{ ml: "8px" }} mr="auto">
            {product.productName}
            <Typography ml={1} fontSize={15} component="span">
              ({product.amountAvailable})
            </Typography>

            {prodExpired && user?.role === ROLE.SELLER && (
              <Typography
                ml={2}
                fontSize={14}
                component="span"
                fontWeight="bold"
                color="darkRed"
              >
                EXPIRED
              </Typography>
            )}
          </Typography>

          <Typography
            fontSize={25}
            fontWeight="700"
            color="secondary"
            display="flex"
            alignItems="center"
            mr="auto"
          >
            <CurrencyRupee fontSize="large" sx={{ ml: "6px" }} />
            {`${product.cost / 100}`}
          </Typography>

          {user?.id === product.sellerId && (
            <>
              <ProductEditBtn
                productId={product.id}
                onDelete={onDelete}
                setError={setError}
              />
              <ProductDeleteBtn
                productId={product.id}
                onDelete={onDelete}
                setError={setError}
              />
            </>
          )}
        </Box>
      }
      secondary={<span></span>}
    />
  );
};
