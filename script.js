// Declare empty array for library


// Object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function() {
   //     return (title + author + ", " + pages + ", " + read);
   // }
   // }

// Adding a new book to the array/library

function addBookToLibrary(Title, Author, Pages, Read) {
    let book = new Book(Title, Author, Pages, Read);
    myLibrary.push(book);
    
}

const theHobbit = new Book("The Hobbit", " by J.R.R. Tolkien", "295 pages", "not read yet")
console.log(theHobbit.info());