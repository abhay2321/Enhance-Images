import React, { useState } from "react";
import ImageUpload from "./ImageUploaded";
import ImagePreview from "./ImagePreview";
import { enhancedImageAPI } from "../utils/EnhancedAPI";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fileHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
    // calling API to enhance the image
    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Error come from while enhanced the Image");
    }
  };
  // console.log(enhancedImage.image)

  return (
    <>
      <ImageUpload uploadfileHandler={fileHandler} />
      <ImagePreview
        loading={loading}
        enhancedImage={enhancedImage?.image}
        uploadImage={uploadImage}
      />
    </>
  );
};

export default Home;


