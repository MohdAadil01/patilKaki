import React from "react";
import { GrNotes } from "react-icons/gr";
import { CgNotes } from "react-icons/cg";
import { FaPenAlt } from "react-icons/fa";
import { TbBulbFilled } from "react-icons/tb";
import { FaChartLine } from "react-icons/fa";

function ResponsiveBoxes() {
  return (
    <div className="container mx-auto py-12 font-customFont">
      <h1 className="text-3xl lg:text-5xl font-bold mb-8 lg:mb-36 text-center">
        Why should you connect with Us ?
      </h1>
      <div className="flex flex-wrap justify-center -mx-4 lg:px-[10rem] p-4">
        {/* Box 1 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-8 rounded-full mb-4">
              <GrNotes className="text-4xl text-[#99A98C] fas fa-heart" />
            </div>
            <p className="text-center">
              Learn to look at the challenges through a different lens.
            </p>
          </div>
        </div>
        {/* Box 2 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-8 rounded-full mb-4">
              <CgNotes className="text-4xl text-[#99A98C] fas fa-heart" />
            </div>
            <p className="text-center">
              Develop a deep understanding of modern marketing.
            </p>
          </div>
        </div>
        {/* Box 3 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-8 rounded-full mb-4">
              <FaPenAlt className="text-4xl text-[#99A98C] fas fa-heart"></FaPenAlt>
            </div>
            <p className="text-center">Understand time tested principles</p>
          </div>
        </div>
        {/* Box 4 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-8 rounded-full mb-4">
              <TbBulbFilled className="text-4xl text-[#99A98C] fas fa-camera"></TbBulbFilled>
            </div>
            <p className="text-center">
              Incorporate a creative and innovative thought process.
            </p>
          </div>
        </div>
        {/* Box 5 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-8 rounded-full mb-4">
              <FaChartLine className="text-4xl text-[#99A98C] fas fa-rocket"></FaChartLine>
            </div>
            <p className="text-center">Become a strategic thinker.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveBoxes;
