import { createContext, useState, useContext, useEffect } from "react";
const SavedBooksContext = createContext()

export function SaveBookProvider({children}){
    const stored = localStorage.getItem('savedBooks')
    const [savedBooks, setSavedBook] = useState(
        stored ? JSON.parse(stored) : []
    )

    useEffect(() => {
        localStorage.setItem('savedBooks', JSON.stringify(savedBooks))
    },[savedBooks])

    function addBook(book){
    setSavedBook(prev => {
        return [...prev, book]
    }) 
    }

    function removeBook(id){
        setSavedBook(prev => {
            return prev.filter((book) => {
                return book.key !== id 
            })
        })
    }

    function isBookSaved(id){
        return savedBooks.some((book) => book.key === id)
    }

    return(
        <SavedBooksContext.Provider value={{savedBooks, addBook, removeBook, isBookSaved}}>
            {children}
        </SavedBooksContext.Provider>
    )

}

export const useSavedBooks = () => useContext(SavedBooksContext)