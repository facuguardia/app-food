import React from "react";
import {RiHome2Line} from 'react-icons/ri'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import {BsCartDash, BsList} from 'react-icons/bs'


function MenuInferior(){
return(
       <div className="flex justify-evenly bg-[#24282E] h-0 w-screen ">
           <button className="text-xl text-white hover:text-secondary" >  <RiHome2Line/> </button>
           <button className="text-xl text-white hover:text-secondary" > <MdOutlineFavoriteBorder/> </button>
           <button className="text-xl text-white hover:text-secondary" > <BsCartDash/> </button>
           <button className="text-xl text-white hover:text-secondary "  > <BsList/> </button>
       </div>
    
)
}
export default MenuInferior;
