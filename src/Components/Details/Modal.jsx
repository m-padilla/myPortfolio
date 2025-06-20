import React from 'react'
import Slider from './Slider'
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Modal({ show, onClose, children }) {

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg relative w-full max-w-3xl min-h-3xl  flex justify-end">
        <span
          onClick={onClose}
          className="absolute right-3 top-2 hover:text-sky-400 text-gray-500 text-3xl font-bold hover:cursor-pointer z-50 "
        >
          <IoIosCloseCircleOutline />
        </span>

        <div className="text-black pl-3 py-3 w-full">

          {children}

        </div>
      </div>
    </div>
  )
}
