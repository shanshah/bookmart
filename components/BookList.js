import BookCard from "./BookCard";

export default function BookList({ books }) {
    return books.map(book => (
        <BookCard
            key={book.fields.title}
            book={book}
        />
    ));
}
