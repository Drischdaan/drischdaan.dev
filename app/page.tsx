import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";

import { FiBriefcase, FiGlobe, FiUser } from "react-icons/fi";

export default async function Home() {
  return (
    <div className="w-full h-full">
      <Modal />
      <div className="w-screen h-screen p-5 gap-5 grid grid-cols-1 lg:grid-cols-2 grid-rows-5 lg:grid-rows-3">
        <div className="lg:col-span-2">
          <Header />
        </div>
        <div className="flex flex-col justify-center items-center p-5">
          <div className="">
            <h1 className="text-5xl uppercase font-black text-black">
              drischdaan
            </h1>
            <ul className="flex justify-start items-center gap-3 bg-black text-white font-bold uppercase py-2 px-3">
              <li>
                <FiBriefcase className="inline mr-1" />
                Software Developer
              </li>
              <li>
                <FiUser className="inline mr-1" />
                19
              </li>
              <li>
                <FiGlobe className="inline mr-1" />
                Germany
              </li>
            </ul>
          </div>
        </div>
        <div className="p-5 row-span-3 lg:row-span-1"></div>
      </div>
    </div>
  );
}
