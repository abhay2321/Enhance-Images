import React from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-400 py-2 px-4">
     
        <div className="text-center mb-0 b border-gray-700 rounded-lg p-6 hover:border-blue-400 transition-all">
          <h2 className="text-3xl font-bold text-gray-800">
            AI Image Enhancer
          </h2>
          <p className="mt-2 text-sm gap-10">
            Enhance, Upscale, and Improve Image Quality with AI.
          </p>
        </div>

        <Home />

        <Footer />
     
    </div>
  );
};

export default App;
