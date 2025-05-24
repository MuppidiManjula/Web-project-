
function showSlide(slideId) {
    
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = 'none');
    
    const activeSlide = document.getElementById(slideId);
    if (activeSlide) {
        activeSlide.style.display = 'block';
    }
}
let books = [];
function addBook() {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('author').value;
    const price = parseFloat(document.getElementById('price').value);
    if (title && author && !isNaN(price)) {
        const book = {
            id: books.length + 1,
            title: title,
            author: author,
            price: price 
        };
        books.push(book);
        displayBooks();
        document.getElementById('addBookMessage').innerText = 'Book added successfully!';
    } else {
        document.getElementById('addBookMessage').innerText = 'Please fill in all fields correctly.';
    }

    document.getElementById('addBookForm').reset();
}
function displayBooks() {
    const bookListElement = document.getElementById('bookList');
    const registeredBookListElement = document.getElementById('registeredBookList');
    
    bookListElement.innerHTML = '';
    registeredBookListElement.innerHTML = '';

    books.forEach(book => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `ID: ${book.id} | Title: ${book.title} | Author: ${book.author} | Price: ${book.price.toFixed(2)}`;
        bookListElement.appendChild(listItem);

        const regListItem = document.createElement('li');
        regListItem.innerHTML = `${book.title} by ${book.author} - Price: ${book.price.toFixed(2)}`;
        registeredBookListElement.appendChild(regListItem);
    });
}
function editBook() {
    const bookId = document.getElementById('editBookId').value;
    const newTitle = document.getElementById('newTitle').value;
    const newAuthor = document.getElementById('newAuthor').value;
    const newPrice = parseFloat(document.getElementById('newPrice').value); // Get new price value
    const book = books.find(b => b.id === parseInt(bookId));
    if (book) {
        book.title = newTitle || book.title;
        book.author = newAuthor || book.author;
        book.price = !isNaN(newPrice) ? newPrice : book.price; 
        displayBooks();
        document.getElementById('editBookMessage').innerText = 'Book updated successfully!';
    } else {
        document.getElementById('editBookMessage').innerText = 'Book ID not found.';
    }
    document.getElementById('editBookForm').reset();
}
function issueBook() {
    const bookId = document.getElementById('issueBookId').value;
    const book = books.find(b => b.id === parseInt(bookId));

    if (book) {
        document.getElementById('issueBookMessage').innerText = `Book "${book.title}" issued successfully. Price: ${book.price.toFixed(2)}`;
    } else {
        document.getElementById('issueBookMessage').innerText = 'Book ID not found.';
    }
    document.getElementById('issueBookForm').reset();
}
function deleteBook() {
    const bookId = document.getElementById('deleteBookId').value;
    const bookIndex = books.findIndex(b => b.id === parseInt(bookId));
    if (bookIndex > -1) {
        books.splice(bookIndex, 1);
        displayBooks();
        document.getElementById('deleteBookMessage').innerText = 'Book deleted successfully.';
    } else {
        document.getElementById('deleteBookMessage').innerText = 'Book ID not found.';
    }
    document.getElementById('deleteBookForm').reset();
}
document.addEventListener('DOMContentLoaded', () => {
    showSlide('Home'); 
});
