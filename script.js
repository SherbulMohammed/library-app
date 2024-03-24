// Create library array
const myLibrary = [];

// Object Constructor
function Book(Title, Author, Pages, Read) {
    this.Title = Title;
    this.Author = Author;
    this.pages = Pages;
    this.read = Read;
}

// Function to add a book to the library array
function addBookToLibrary(Title, Author, Pages, Read) {
    let book = new Book(Title, Author, Pages, Read);
    myLibrary.push(book); // Add the new book object to the library array
}

// Function to display books on the page
function displayBooks() {
    const bookList = document.getElementById("bookList");

    // Clear previous content
    bookList.innerHTML = '';

    // Loop through the array of books and display books on their own card
    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
            <h3>${book.Title}</h3>
            <p><strong>Author:</strong> ${book.Author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Read:</strong> ${book.read}</p>
        `;
        bookList.appendChild(bookCard); // Append the book card to the bookList element
    });
}

// Call the function to add a placeholder book to the library array
addBookToLibrary("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 352, "Read");

// Call the function to display the books
displayBooks();

