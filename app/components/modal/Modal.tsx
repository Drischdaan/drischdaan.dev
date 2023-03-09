"use client";

import { useState } from "react";
import "./modal.scss";

export default function Modal() {
  const [modalState, setModelState] = useState(true);
  return modalState ? (
    <div className="modal-container">
      <div className="modal">
        <div className="p-3">
          <h1 className="uppercase font-black text-4xl text-purple-500">
            attention
          </h1>
          <div className="mt-2">
            This website is still in development. Please come back at a later
            point in time to see the full version.
          </div>
          <div className="mt-5 flex justify-end items-center">
            <button
              onClick={() => setModelState(false)}
              className="py-2 px-5 bg-purple-500 text-white hover:bg-purple-700 transition-colors duration-200"
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="hidden"></div>
  );
}
