import React from "react";
import { MdDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { GiSandsOfTime } from "react-icons/gi";
import { MdCurrencyRupee } from "react-icons/md";

function HeroSection() {
  // #fada50
  // #99A98C
  // #808080
  return (
    <div className="bg-gray-100 py-12 lg:py-24 px-4 lg:px-20 font-customFont">
      <div className="container mx-auto flex flex-col lg:flex-row">
        {/* Left Half */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-4">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
            Discover a Consultant's Appraoch to Problem Solving
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-6">
            Learn the proven approach used by top strategy consultants to tackle
            complex bussiness challenges effectively. Solve an MBB case study
            LIVE with Darsheel Savla to understand the concepts hands-on.
          </p>
          <div className="flex justify-center lg:justify-start space-x-6 mb-8">
            {/* Box 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-md shadow-lg mb-2 flex items-center justify-center flex-col">
                <MdDateRange className="text-4xl text-[#99A98C] fas fa-rocket" />
                <p className="text-center pt-4">15 Feb, 2024</p>
              </div>
            </div>
            {/* Box 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-md shadow-lg mb-2 flex items-center justify-center flex-col">
                <IoMdTime className="text-4xl text-[#99A98C] fas fa-rocket" />
                <p className="text-center pt-4">4PM Onwards</p>
              </div>
            </div>
            {/* Box 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-md shadow-lg mb-2 flex items-center justify-center flex-col">
                <GiSandsOfTime className="text-4xl text-[#99A98C] fas fa-rocket" />
                <p className="text-center pt-4">2hrs Remaining</p>
              </div>
            </div>
          </div>
          <button
            className="bg-[#fada50]
          text-black hover:bg-[#FFD800] tracking-wide font-bold py-4 px-8 rounded-lg w-full lg:w-auto mb-4"
            onClick={() => alert("Register Now at $499")}
          >
            Register Now at
            <MdCurrencyRupee className="inline" />
            499
          </button>
          <a href="#" className="text-[#808080] underline">
            Click here for discount
          </a>
        </div>

        {/* Right Half */}
        <div className="w-full lg:w-1/2 flex justify-center items-center flex-col px-4 mt-8 lg:mt-0 overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1553484771-0a615f264d58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Illustration"
            className="w-full max-w-md mx-auto rounded-lg"
          />
          <p className="text-gray-600 mt-4 text-center lg:text-left ">
            Instructed by <span className="font-bold"> Darsheel Savla</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
