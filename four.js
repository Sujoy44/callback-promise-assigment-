function arrangeAlphabetically(books, callback) {
    const bookTitles = books.map(book => book.title);
    const sortedTitles = bookTitles.sort();
    callback(sortedTitles);
}

const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
];

arrangeAlphabetically(books, (sortedTitles) => {
    sortedTitles.forEach(title => console.log(title));
});

// Output:
// Harry Potter and the Sorcerer's Stone
// Pride and Prejudice
// The Lord of the Rings