export function BookMeta({book}){
    return(
    <div className="grid grid-cols-2 gap-4">
        <p>Tahun terbit: <span>{book.first_publish_date}</span></p>
        <p>Bahasa: <span>{book.languages?.[0]?.key.replace('/languages/', '')}</span></p>
    </div>
    )
}