import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Progress = () => {
  const [content, setContent] = useState("");

  return (
    <div className="w-full h-full bg-white/10 backdrop-blur-md p-2 overflow-y-auto">
      <div className="w-full min-h-full border border-white rounded-md p-1 flex flex-col">
        
        <div className="flex-grow p-2 h-1/2">
          <ReactQuill
            
            value={content}
            onChange={setContent}
            placeholder="Enter text here..."
          />
        </div>

        
        <div className="w-full h-44 border border-white bg-red-600 mt-2 rounded-md">
          
        </div>
      </div>
    </div>
  );
};

export default Progress;
