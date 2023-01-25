import React from "react";
import Random from "../../assets/pexels-cottonbro-studio-5082578.jpg"

function Landing() {
    return (
        <div className="bg-[#24282E] flex items-center flex-col h-screen w-screen">
            <h2 className="relative top-16 font-bold text-4xl text-[#E58326]">PHOLDER</h2>
            <button className="bg-[#E58326] shadow-sm shadow-[#15181b] hover:shadow-[#15181b] hover:shadow-lg rounded-xl py-4 px-12 fixed top-90% hover:top-89% transition-all duration-150 ">Get started</button>
        </div>
    )
}

export default Landing