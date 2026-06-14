export function BookSubjects({book}){
    return(
        <>
        {book.subjects?.map((subject) => (
        <span className="badge" key={subject}>
            {subject}
        </span>
        ))}
        </>
    )
}