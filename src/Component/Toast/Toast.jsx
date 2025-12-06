import React from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa"; 

export default function Toast({ show, type, message }) {
  return (
     <div
      className={`
        fixed top-6 right-6 w-80 sm:w-96 max-w-full px-5 py-3 rounded-2xl
        shadow-xl backdrop-blur-md text-white flex items-center gap-3 transition-all duration-500 z-50
        ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
        ${type === "success" ? "bg-green-500/90" : "bg-red-500/90"}
      `}
    >
      <span className="text-xl">
        {type === "success" ? <FaCheckCircle /> : <FaExclamationCircle />}
      </span>
      <p className="text-sm sm:text-base font-medium truncate">{message}</p>
    </div>
  );
}
