const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "MombieStreetAssign",
  password: "@Admin1235",
  port: 1235,
});

const getAllAuthor = (req, res) => {
  pool.query('SELECT * FROM library.author', (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).send(result.rows);
  })
}

const createNewAuthor = (req, res) => {
  const {
    first_name,
    family_name,
    date_of_birth,
    date_of_death,
    name,
    lifespan,
    url,
  } = req.body;

  pool.query('INSERT INTO library.author (first_name, family_name, date_of_birth, date_of_death, name, lifespan, url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *' 
  , [first_name, family_name, date_of_birth, date_of_death, name, lifespan, url], 
  (error,result)=> {
    if(error) {
        throw error;
    }
    res.status(201).send(`Author added with ID: ${result.rows[0].author_id}`);
  } )
};

const getAuthorFromID = (req,res) =>{
  const author_id_inp = req.params.authorid;
  pool.query('SELECT * FROM library.author WHERE author_id = $1', [author_id_inp] , (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).send(result.rows);
})
};

const updateAuthor = (req,res) =>{
  const author_id_inp = req.params.authorid;
  const {
    first_name,
    family_name,
    date_of_birth,
    date_of_death,
    name,
    lifespan,
    url,
  } = req.body;
  pool.query('UPDATE library.author SET first_name = $1, family_name = $2, date_of_birth = $3, date_of_death = $4, name = $5, lifespan = $6, url = $7 WHERE author_id = $8', 
              [first_name, family_name, date_of_birth, date_of_death, name, lifespan, url,author_id_inp], 
              (error,result)=> {
                if(error) {
                    throw error;
                }
                res.status(200).send(`Author with ID ${author_id_inp} was updated successfully`);
              } )
}

const deleteAuthorFromID = (req, res) => {
  const author_id_inp = req.params.authorid;
  pool.query('DELETE FROM library.author WHERE author_id = $1', [author_id_inp], (error,results)=>{
    if(error) {
      throw error;
    }
    res.status(200).send(`Author with ID ${author_id_inp} was deleted successfully`);
  })
}




//BOOKS API




const getAllBook = (req, res) => {
  pool.query('SELECT * FROM library.book', (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).send(result.rows);
  })
}

const createNewBook = (req, res) => {
  const {
    title,
    author_id,
    summary,
    ISBN,
    url,
  } = req.body;

  pool.query('INSERT INTO library.book (title, author_id, summary, "ISBN", url) VALUES ($1, $2, $3, $4, $5) RETURNING *' 
  , [title, author_id, summary, ISBN, url], 
  (error,result)=> {
    if(error) {
        throw error;
    }
    res.status(201).send(`Book added with ID: ${result.rows[0].book_id}`);
  } )
};

const getBookFromID = (req,res) =>{
  const book_id_inp = req.params.bookid;
  pool.query('SELECT * FROM library.book WHERE book_id = $1', [book_id_inp] , (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).send(result.rows);
})
};

const updateBook = (req,res) =>{
  const book_id_inp = req.params.bookid;
  const {
    title,
    author_id,
    summary,
    ISBN,
    url,
  } = req.body;
  pool.query('UPDATE library.book SET title = $1, author_id = $2, summary = $3, "ISBN" = $4, url = $5 WHERE book_id = $6', 
              [title, author_id, summary, ISBN, url,book_id_inp], 
              (error,result)=> {
                if(error) {
                    throw error;
                }
                res.status(200).send(`Book with ID ${book_id_inp} was updated successfully`);
              } )
}

const deleteBookFromID = (req, res) => {
  const book_id_inp = req.params.bookid;
  pool.query('DELETE FROM library.book WHERE book_id = $1', [book_id_inp], (error,results)=>{
    if(error) {
      throw error;
    }
    res.status(200).send(`Book with ID ${book_id_inp} was deleted successfully`);
  })
}



module.exports ={
  createNewAuthor,
  getAllAuthor,
  getAuthorFromID,
  updateAuthor,
  deleteAuthorFromID,

  //////

  createNewBook,
  getAllBook,
  getBookFromID,
  updateBook,
  deleteBookFromID,
}

