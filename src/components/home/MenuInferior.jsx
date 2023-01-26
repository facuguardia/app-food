import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineReload } from "react-icons/ai";

function MenuInferior() {
  return (
    <div>
      <div className="flex justify-evenly ">
        <button className="text-xl hover:text-red-400 hover:border-b-2">
          {" "}
          <RiHome2Line />{" "}
        </button>
        <button className="text-xl hover:text-red-400 hover:border-b-2">
          {" "}
          <MdOutlineFavoriteBorder />{" "}
        </button>
        <button className="text-xl hover:text-red-400 hover:border-b-2">
          {" "}
          <CgProfile />{" "}
        </button>
        <button className="text-xl hover:text-red-400 hover:border-b-2">
          {" "}
          <AiOutlineReload />{" "}
        </button>
      </div>
    </div>
  );
}
export default MenuInferior;
