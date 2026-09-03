import books from "../data/books";
import BookCard from "./BookCard";

function BookList() {
  return (
    <div className="book-grid">

      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
        />
      ))}

    </div>
  );
}

export default BookList;