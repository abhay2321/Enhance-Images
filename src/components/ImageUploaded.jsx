import React from "react";
import { ImFolderUpload } from "react-icons/im";

const ImageUploaded = (props) => {
  const showImageHandler = (e) => {
    //  console.log (e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      props.uploadfileHandler(file);
    }
  };

  return (
    <div className="bg-slate-200 shadow-lg rounded-2xl p-4 w-[60%] max-w-md">
      <label
        htmlFor="fileInput"
        className="block w-full coursor-pointer border-2 border-dashed border-gray-700 rounded-lg p-2 text-center hover:border-blue-400 transition-all"
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={showImageHandler}
        />

        <div className="flex flex-col items-center gap-0">
          <ImFolderUpload size={30} className="text-gray-700" />
          <span className="text-sm sm:text-base font-medium text-gray-600">
            Click and Drag to upload your image
          </span>
        </div>
      </label>
    </div>
  );
};

export default ImageUploaded;
