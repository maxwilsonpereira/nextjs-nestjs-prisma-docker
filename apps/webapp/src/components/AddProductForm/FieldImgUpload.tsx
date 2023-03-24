// Temporary solution for this task.
// In production I would suggest to save the images on the cloud, for example, on AWS S3.

import * as React from "react";
import { FormControl } from "@mui/material";
import { Product } from "database";

export const FieldImgUpload = ({
  setNewProduct,
}: {
  setNewProduct: React.Dispatch<
    React.SetStateAction<Partial<Product> | undefined>
  >;
}) => {
  const processImage = (event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    if (imageUrl) {
      setNewProduct((current) => ({
        ...current,
        productImage: imageUrl,
      }));
    }
  };

  return (
    <FormControl>
      <input type="file" accept="image/*" onChange={processImage}></input>
    </FormControl>
  );
};
