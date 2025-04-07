import React from "react";
import Loading from "./Loading";
import { TiArrowForward } from "react-icons/ti";

const downloadImage = (url, filename = "enhanced-image.jpg") => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const ImagePreview = (props) => {
  return (
    <div className="mt-5 flex flex-col md:flex-row items-center justify-center gap-2 w-full max-w-5xl mx-auto px-4">
      {/* Real Image Section */}
      <div className="flex flex-col items-center">
        <div className="bg-gray-800 text-white text-lg font-semibold px-4 py-1 rounded-lg mb-2 text-center w-full">
          Real Images
        </div>
        <div className="w-72 h-72 bg-white rounded-xl overflow-hidden flex items-center justify-center shadow-lg mb-0">
          {props.uploadImage ? (
            <img
              src={props.uploadImage}
              alt="Real"
              className="w-full h-full object-cover"
            />
          ) : (
            // <div className="text-gray-500 text-center px-2">No Image Selected</div>
            <div className="relative w-72 h-72 bg-white rounded-xl overflow-hidden shadow-lg">
            <img
              src="abhayreal.jpg"
              alt="Real"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-white text-black text-sm font-semibold px-3 py-1 rounded-full shadow">
            Before(Not any uploaded Image)
          </div>
          </div>
          )}
        </div>
      </div>

      <TiArrowForward size={72} />

      <div className="flex flex-col items-center">
        <h2 className="bg-slate-900 text-white text-lg font-semibold px-4 py-1 rounded-lg mb-2 text-center w-full">
          Enhanced Images
        </h2>

        {/* loading nahi hai to image show karo  */}
        <div className="w-72 h-72 bg-white rounded-xl overflow-hidden flex items-center justify-center shadow-lg">
          {props.loading ? (
            <Loading />
          ) : props.enhancedImage ? (
            <img
              src={props.enhancedImage}
              alt="Enhanced"
              className="w-full h-full object-cover"
              onClick={() => downloadImage(props.enhancedImage)}
            />
          ) : (
            // <div className="text-gray-500">No Enhanced Image</div>
            <div className="relative w-72 h-72 bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="abhay enhanced.jpg"
                alt="Real"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-white text-black text-sm font-semibold px-3 py-1 rounded-full shadow">
                After(No Enhance of Uploaded Image)
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
