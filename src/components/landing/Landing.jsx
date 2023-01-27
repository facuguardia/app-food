import React from "react";
import Img from "../../assets/pngegg.png"
import { useNavigate,Link } from "react-router-dom";


function Landing() {

let navigate = useNavigate;

const routeChange = () => {
let path='/login';
navigate(path);
}

    
    return (
        <div className=" bg-gradient-to-tr from-[#24282E] to-[#15181b] flex items-center flex-col h-screen w-screen">
            <h2 className="relative top-16 font-bold text-4xl text-[#E58326]">Food App</h2>
            <img src={Img} alt="a" className="relative top-32 scale-75"/>
            <h2 className="relative top-36 text-[#E58326] font-bold text-4xl">¡Delicious food at one click!</h2>
                <button onClick={routeChange} className="bg-[#E58326] shadow-sm shadow-[#15181b] hover:shadow-[#15181b] hover:shadow-lg rounded-xl py-4 px-12 fixed top-90% hover:top-89% transition-all duration-150 ">Get started</button>
        </div>
    )
}

export default Landing