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
        <div className="bg-white py-2 fixed top-0 left-0 right-0 shawdow-md">
            <div className="flex justify-start">
            <button className= "text-2xl ml-4 mt-4 flex-grow" onClick={() => setOpen(true)}> <BsList/> </button>
            <button className="self-end text-2xl mt-4 mr-4 hover:text-red-400 hover:border-b-2  hover:border-red-500 "> <BsCartDash/> </button>
            </div>
            <div className={`${!open && "hidden"}  bg-gray-500/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}  onClick={()=>setOpen(false)}></div>
            <div className={`${open ? "w-40" : "w-0" } transition-all duration-300 bg-gray-300 min-h-screen w-40 fixed top-0 left-0 `}>
                <div className={`${!open && "hidden"} pt-2 ml-1 mb-5`}>
                    <button className="ml-4 mt-5 mb-3 text-xl" onClick={()=>setOpen(false)} > <AiOutlineClose/> </button>
                    </div>
                    <div className={`${!open && "hidden"} flex flex-col ml-5`}>
                      <div className="flex-grow">
                          <button className=" text-base"><CgProfile/></button>
                          <button className=" hover:text-red-400 hover:border-b-2 hover:border-red-600 py-1 px-1">Perfil</button>
                      </div>
                      <div className="flex-grow">
                            <button className="text-base "> <BsCartDash/> </button>
                          <button className=" hover:text-red-400 hover:border-b-2 hover:border-red-600 py-1 px-1">Compras</button>
                      </div>
                      <div className="flex-grow ">
                          <button className="text-base "> <MdOutlineLocalOffer/> </button>
                          <button className=" hover:text-red-400 hover:border-b-2 hover:border-red-600 py-1 px-1">Ofertas</button>
                      </div>
                      <div className="flex-grow">
                          <button className="text-base "> <BiExit/> </button>
                          <button className=" hover:text-red-400 hover:border-b-2 hover:border-red-600 py-1 px-1">Cerrar sesion</button>
                          </div>
                    </div>
                
                </div>
        </div>
        
    )
}