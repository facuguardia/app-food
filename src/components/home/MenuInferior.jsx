import React from "react";
import {RiHome2Line} from 'react-icons/ri'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineReload} from 'react-icons/ai'

function MenuInferior(){
return(
       <div className="flex justify-evenly bg-[#24282E] h-0 w-screen ">
           <button className="text-xl text-white hover:text-[#E58326] " >  <RiHome2Line/> </button>
           <button className="text-xl text-white hover:text-[#E58326] " > <MdOutlineFavoriteBorder/> </button>
           <button className="text-xl text-white hover:text-[#E58326] " > <CgProfile/> </button>
           <button className="text-xl text-white hover:text-[#E58326]" > <AiOutlineReload/> </button>
       </div>
    
)
}
export default MenuInferior;