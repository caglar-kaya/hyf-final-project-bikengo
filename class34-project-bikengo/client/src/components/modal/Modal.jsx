import React, { useState } from "react";
import PropType from "prop-types";
const Modal = ({ message, isOpen }) => {
  const [open, setOpen] = useState(isOpen);
  return (
    open && (
      <div className="fixed top-0 left-0 w-full h-full flex flex-col z-10 justify-center items-center">
        <div className="w-1/2 h-60 rounded-md overflow-hidden bg-gray-50 flex flex-col justify-between items-center border-gray-800 border-2">
          <div className="w-full bg-red-500 h-10"></div>
          <p className="mx-5 text-text text-lg">{message}</p>
          <button
            className="bg-red-500 w-1/2 text-white  hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

Modal.propTypes = {
  message: PropType.string.isRequired,
  isOpen: PropType.bool.isRequired,
};

export default Modal;
