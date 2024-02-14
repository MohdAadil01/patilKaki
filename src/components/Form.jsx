// Form.js

import React, { useState, useEffect } from "react";
import "./Form.css"; // Import CSS file
import { IoMdClose } from "react-icons/io";

function Form() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 15000); // Show form after 15 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <div className={`font-customFont form-container ${showForm ? "show" : ""}`}>
      <form>
        <input type="tel" placeholder="Phone" />
        <input type="email" placeholder="Email" />
        <button
          type="submit"
          className="bg-[#fada50] hover:bg-[#FFD800]"
          onClick={() => alert("Register Now at $499")}
        >
          Register
        </button>
      </form>
      <button className="close-button" onClick={handleClose}>
        <IoMdClose></IoMdClose>
      </button>
    </div>
  );
}

export default Form;
