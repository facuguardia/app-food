import React from "react";
import {BsList, BsCartDash} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineLocalOffer} from 'react-icons/md'
import {BiExit} from 'react-icons/bi'
import {useState} from "react";


export default function sideBar(){
    const [open, setOpen]= useState(false)
    
    return (
        <div className="bg-[#24282E] py-2 fixed w-screen top-0 left-0 right-0 shadow">
          <div className="flex justify-between items-center">
            <button className= "text-white text-2xl ml-3 mt-2  hover:text-[#E58326]" onClick={() => setOpen(true)}> <BsList/> </button>
            <button className= "text-white  text-2xl mt-3 mr-4  hover:text-[#E58326] "> <BsCartDash/> </button>
          </div>
              <div className={`${!open && "hidden"}  bg-gray-600/80 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}  onClick={()=>setOpen(false)}></div>
                <div className={`${open ? "w-40" : "w-0" } transition-all  bg-gray-500 min-h-screen w-40 fixed top-0 left-0 `}>
                  <div className={`${!open && "hidden"} pt-2 ml-1 mb-5`}>
                       <button className="ml-4 mt-3 mb-3 text-xl" onClick={()=>setOpen(false)} > <AiOutlineClose/> </button>
                  </div>
                    <div className={`${!open && "hidden"} flex flex-col ml-5`}>
                         <button className="hover:text-[#E58326]  hover:border-[#E58326] py-1 px-1 flex items-center text-base"><CgProfile/>Perfil</button>
                         <button className="hover:text-[#E58326]  hover:border-[#E58326] py-1 px-1 flex items-center text-base"> <BsCartDash/> Compras </button>
                         <button className="hover:text-[#E58326]  hover:border-[#E58326] py-1 px-1 flex items-center text-base"> <MdOutlineLocalOffer/>Ofertas </button>
                         <div className="flex flex-col justify-end">
                             <button className="hover:text-[#E58326]  hover:border-[#E58326] py-1 px-1 flex items-center text-base"> <BiExit/> Cerrar sesion</button> 
                         </div>  
                    </div> 
                </div>
        </div>
        
    )
}