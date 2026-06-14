export function BookSynopsis({book}){

    const description = typeof book.description === 'string' ? 
    book.description : 
    book.description?.value

    return(
        <div>
            <h2>
                Sinopsis
            </h2>

            <div>
                {description || "sinopsis tidak tersedia"}
            </div>

        </div>
    )
}