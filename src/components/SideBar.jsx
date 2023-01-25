import React from "react";
import {BsList} from 'react-icons/bs'

export default function sideBar(){
    return (
        <div>
            <button className= "text-xl ml-5 mt-4  hover:text-red-400 hover:border-b-2  hover:border-red-600" > <BsList/> </button>
        </div>
       
    )
}