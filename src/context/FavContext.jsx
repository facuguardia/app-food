import { useState ,createContext } from "react";

export const FavContext = createContext({})

export const FavProvider = ({children}) => {

    const [favs, setFavs] = useState([])

    return <FavContext.Provider value={[favs, setFavs]}> {children} </FavContext.Provider>
}