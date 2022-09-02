const express = require('express');
const bodyparser = require('body-parser');
const library = require('./query'); 
const { application } = require('express');

const PORT = 3236;

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send({"message": "Hello, world!"});
})


app.post('/api/authors', library.createNewAuthor)
app.get('/api/authors', library.getAllAuthor)
app.get('/api/authors/:authorid', library.getAuthorFromID)
app.put('/api/authors/:authorid', library.updateAuthor)
app.delete('/api/authors/:authorid', library.deleteAuthorFromID);

/////////

app.post('/api/books', library.createNewBook)
app.get('/api/books', library.getAllBook)
app.get('/api/books/:bookid', library.getBookFromID)
app.put('/api/books/:bookid', library.updateBook)
app.delete('/api/books/:bookid', library.deleteBookFromID);


app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});