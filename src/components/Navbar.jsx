import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-500 p-4 lg:px-20">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img
            src="https://patilkaki.com/assets/pk-logo-min-21a39d3c.png"
            alt="Logo"
            className="h-12"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
