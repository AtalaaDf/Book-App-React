import { createContext, useState, useContext } from "react";
const SearchContext = createContext()

export function SearchProvider({children}){
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen)
    }

    return(
        <SearchContext.Provider value={{isSearchOpen, toggleSearch}}>
            {children}
        </SearchContext.Provider>
    )

}

export const useSearch = () => useContext(SearchContext)