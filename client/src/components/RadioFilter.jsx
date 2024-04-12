import React, { useState } from "react";

export default function RadioFilter() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="border sm:w-1/4 sm:p-5 sm:ml-3 lg:w-60 rounded-md p-10 mt-10 lg:ml-32 justify-items-start">
      <div className="font-bold">Document Type</div>
      <div className="flex items-start mt-2 flex-col">
        <label className="flex items-center">
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
            className="form-radio h-4 w-4 mb-2 text-blue-600"
          />
          <span className="ml-2 mb-2">Help articles</span>
        </label>
        <label className="flex items-start">
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
            className="form-radio h-4 w-4 mt-1 text-blue-600"
          />
          <span className="ml-2  mb-2">Technical support articles</span>
        </label>
        <label className="flex items-start">
          <input
            type="radio"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
            className="form-radio h-4 w-4 mt-1 text-blue-600"
          />
          <span className="ml-2 mb-2">Business resources</span>
        </label>
        <label className="flex items-start">
          <input
            type="radio"
            value="option4"
            checked={selectedOption === "option4"}
            onChange={handleOptionChange}
            className="form-radio h-4 w-4 mt-1.5 text-blue-600"
          />
          <span className="ml-2  mb-2">Developer resources</span>
        </label>
        <label className="flex items-start">
          <input
            type="radio"
            value="option5"
            checked={selectedOption === "option5"}
            onChange={handleOptionChange}
            className="form-radio h-4 w-4 mt-1 text-blue-600"
          />
          <span className="ml-2 mb-2">Paypal product information</span>
        </label>
        <label className="flex items-start">
          <input
            type="radio"
            value="option6"
            checked={selectedOption === "option6"}
            onChange={handleOptionChange}
            className="form-radio h-4 w-4 mt-1 text-blue-600"
          />
          <span className="ml-2 mb-2">Community posts</span>
        </label>
      </div>
    </div>
  );
}
