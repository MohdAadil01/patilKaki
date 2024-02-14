import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
function ResponsiveComponent() {
  return (
    <div className="container mx-auto py-12 px-4 lg:px-20 mt-4 font-customFont">
      <div className="flex flex-col lg:flex-row">
        {/* Left Container */}
        <div className="w-full lg:w-2/3 lg:pr-8 lg:pl-20">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Program Details
            </h2>
            <ul className="list-disc pl-4 text-[1.1rem]">
              <li className="mb-2">
                Learn the toolkits of professionals in just 3 Hours.
              </li>
              <li className="mb-2">
                Enjoy the discount price of{" "}
                <MdCurrencyRupee className="inline" />
                299
              </li>
              <li className="mb-2">
                The launch offer expires soon, grab your seat NOW!
              </li>
            </ul>
          </div>
        </div>
        {/* Right Container */}
        <div className="w-full lg:w-1/3 lg:pl-8">
          <div className="bg-gray-200 p-6 rounded-lg mb-8">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">
              Price of the Program
            </h3>
            <p className="text-2xl lg:text-3xl text-black font-bold mb-4">
              <MdCurrencyRupee className="inline" />
              199
            </p>
            <button
              onClick={() => alert("Register Now at $499")}
              className="bg-[#fada50] hover:bg-[#FFD800] text-black tracking-wide font-bold py-2 px-4 rounded-full w-full"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveComponent;
