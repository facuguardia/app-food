import { useState ,createContext } from "react";

export const FavContext = createContext(null)

export const FavProvider = ({children}) => {

    const [fav, setFav] = useState([])
    const [all, setAll] = useState([])

    return <FavContext.Provider value={[fav, setFav, all, setAll]}> {children} </FavContext.Provider>
}