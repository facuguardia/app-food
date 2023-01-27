import {BsCartDash, BsList} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineLocalOffer, MdOutlineFavoriteBorder} from 'react-icons/md'
import {BiExit} from 'react-icons/bi'
import React, {useState} from "react";
import { useAuth } from "../../context/AuthContext";


 const SideBar =()=> {
    const [open, setOpen] = useState(false);
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
    
    return (
        <div className="bg-primary py-2 w-screen top-0 left-0 right-0 shadow">
          <div className="flex justify-between items-center">
            <button className= "text-white text-2xl ml-3 mt-2  hover:text-secondary" onClick={() => setOpen(true)}> <BsList/> </button>
            <button className= "text-white text-2xl mt-3 mr-4  hover:text-secondary"> <BsCartDash/> </button>
          </div>
       
              <div className={`${!open && "hidden"}  bg-gray-600/80 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}  onClick={()=>setOpen(false)}></div>
                <div className={`${open ? "w-40" : "w-0" } transition-all  bg-gray-500 min-h-screen w-40 fixed top-0 left-0 `}>
                  <div className={`${!open && "hidden"} flex  pt-2 ml-1 mb-5`}>
                       <button className="ml-4 mt-3 mb-3 text-xl" onClick={()=>setOpen(false)} > <AiOutlineClose/> </button>
                  </div>
                    <div className={`${!open && "hidden"} flex flex-col items-center `}>
                      <div>
                         <button className="hover:text-secondary  hover:border-secondary py-1 px-1 flex items-center text-base"><CgProfile/>Perfil</button>
                         <button className="hover:text-secondary  hover:border-secondary py-1 px-1 flex items-center text-base"> <BsCartDash/> Compras </button>
                         <button className="hover:text-secondary  hover:border-secondary py-1 px-1 flex items-center text-base"> <MdOutlineLocalOffer/>Ofertas </button>
                         <button className="hover:text-secondary  hover:border-secondary py-1 px-1 flex items-center text-base"> <MdOutlineFavoriteBorder/>Favoritos </button>
                      </div>
                         <div>
                             <button onClick={handleLogout} className="hover:text-secondary  hover:border-secondary bg-slate-400 hover:bg-slate-600 rounded-full py-1 px-1 flex items-center text-base"> <BiExit/> Cerrar sesion</button> 
                         </div>  
                    </div> 
                </div>
              </div>
        
    )
}
export default SideBar;