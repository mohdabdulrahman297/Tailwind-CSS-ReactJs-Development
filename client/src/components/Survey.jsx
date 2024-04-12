import React from "react";

export default function Survey() {
  return (
    <div className="flex justify-center mt-20">
      <div className="bg-blue-100 rounded-lg px-20 py-10">
        <div className="flex items-center">
          <div>
            <p>How are we doing?</p>
            <p>
              Help improve the{" "}
              <span className="font-bold">PayPal Help Center experience</span>
            </p>
            <p>with some quick feedback</p>
          </div>
          <button className="bg-blue-800 px-6 py-2 rounded-3xl text-white ml-20">
            Take a survey
          </button>
        </div>
      </div>
    </div>
  );
}
