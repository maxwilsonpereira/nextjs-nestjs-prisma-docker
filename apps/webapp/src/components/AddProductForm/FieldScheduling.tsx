import * as React from "react";
import { FormControl, Typography } from "@mui/material";
import { Product } from "database";
import { setWeekendsToFriday } from "@components";

export const FieldScheduling = ({
  setNewProduct,
}: {
  setNewProduct: React.Dispatch<
    React.SetStateAction<Partial<Product> | undefined>
  >;
}) => {
  const [selectedDate, setSelectedDate] = React.useState("");
  const [userMessage, setUserMessage] = React.useState("");
  const inputDateHandler = (event) => {
    setUserMessage("");
    console.log("event.target.value: ", event.target.value);
    const date = new Date(event.target.value);
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      const prevFriday = setWeekendsToFriday(date);
      setSelectedDate(prevFriday.toISOString().substring(0, 10));
      setNewProduct((current) => ({
        ...current,
        expireDate: prevFriday,
      }));
      setUserMessage(
        "Weekends are not allowed. Picking closest Friday instead."
      );
    } else {
      setSelectedDate(event.target.value);
      setNewProduct((current) => ({
        ...current,
        expireDate: date,
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
