import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { AxiosError } from "axios";
import { CurrencyRupee } from "@mui/icons-material";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Product } from "database";
import { ROLE } from "@constants";
import { BuyResult, User } from "@types";
import { apiClient } from "@api";
import { ShowErrors, UserContext, ProductUnit } from "@components";

export const ProductBuy = ({
  user,
  product,
  onBuy,
  setError,
}: {
  user: User;
  product: Product;
  onBuy: (_buyResylt: BuyResult) => void;
  setError: Dispatch<SetStateAction<AxiosError<unknown, any> | undefined>>;
}) => {
  const [amount, setAmount] = useState<number>(1);
  const prodExpired = new Date(product.expireDate) < new Date();

  return (
    <>
      {user?.role === ROLE.BUYER && (
        <>
          <TextField
            disabled={prodExpired}
            sx={{ ml: 4, mr: 2, width: { xs: 60, md: 90 } }}
            defaultValue={amount}
            label="amount"
            onChange={(event) => {
              setAmount(parseInt(event.target.value));
            }}
            type="number"
            InputProps={{
              inputProps: {
                min: product.amountAvailable > 0 ? 1 : 0,
                max: product.amountAvailable,
              },
            }}
          />
          <Button
            onClick={async () => {
              try {
                const { data: bought } = await apiClient.post("/buy", {
                  productId: product.id,
                  amount: amount,
                });
                onBuy(bought);
              } catch (e) {
                setError(e as AxiosError);
              }
            }}
            disabled={prodExpired}
            variant="contained"
            color="secondary"
            size="large"
          >
            {prodExpired ? "Expired" : "Buy"}
          </Button>
        </>
      )}
    </>
  );
};
