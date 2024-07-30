import React from "react";

const CustomizeCheckBox = ({ customizedCheckBox, setCustomizedCheckBox }) => {
  return (
    <div className="bg-slate-100 flex items-center justify-center h-20">
      <div className="py-2 px-4 bg-white shadow-lg mt-1 flex gap-2 leading-5">
        <input
          type="checkbox"
          id="floating-checkbox"
          value={customizedCheckBox}
          onChange={(e) => setCustomizedCheckBox(e.target.checked)}
        />
        <label htmlFor="floating-checkbox">
          Enable Customize <br /> News Feed
        </label>
      </div>
    </div>
  );
};

export default CustomizeCheckBox;
