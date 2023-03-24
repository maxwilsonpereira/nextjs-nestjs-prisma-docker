import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { FormControl, Typography } from "@mui/material";
import { Product } from "database";
import { setWeekendsToFriday } from "@components";

export const FieldScheduling = ({
  product,
  setNewProduct,
}: {
  product: Partial<Product> | undefined;
  setNewProduct: Dispatch<SetStateAction<Partial<Product> | undefined>>;
}) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    if (product && product.expireDate)
      setSelectedDate(product.expireDate.substring(0, 10));
  }, [product]);

  const inputDateHandler = (event) => {
    setUserMessage("");
    const date = new Date(event.target.value);
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      const prevFriday = setWeekendsToFriday(date);
      setSelectedDate(prevFriday.toISOString().substring(0, 10));
      setNewProduct((prev) => ({
        ...prev,
        expireDate: prevFriday.toString(),
      }));
      setUserMessage(
        "Weekends are not allowed. Picking closest Friday instead."
      );
    } else {
      setSelectedDate(event.target.value);
      setNewProduct((prev) => ({
        ...prev,
        expireDate: date.toString(),
      }));
    }
  };

  return (
    <FormControl>
      <input
        id="input-scheduling"
        type="date"
        onChange={inputDateHandler}
        value={selectedDate}
      />
      <Typography
        mt={0.5}
        variant="caption"
        sx={{ height: 5, lineHeight: 1, color: "darkRed" }}
      >
        {userMessage}
      </Typography>
    </FormControl>
  );
};
