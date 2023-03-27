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
    if (imageFile && imageFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onload = () => {
        const imageUrl = reader.result;
        if (imageUrl) {
          setNewProduct((current) => ({
            ...current,
            productImage: imageUrl.toString(),
          }));
        }
      };
    }
  };

  return (
    <FormControl>
      <input type="file" accept="image/*" onChange={processImage}></input>
    </FormControl>
  );
};
