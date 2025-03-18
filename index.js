const { error } = require('console');
const express = require('express')
const app = express()

let books = [
  ]
  
app.use(express.json())

//routes 


app.get('/whoami',(req,res)=>{
    
    try { 
        const studentNumber = 2662283;

        res.status(200).json({studentNumber});
        
    } catch (error) {
        res.status(404).json({error:'Student number not found'})
    }

});

app.get('/books',(req,res)=>{
    res.status(200).json(books);

});

app.get('/books/:id',(req,res)=>{
   
    const id = parseInt(req.params.id);
    const book = books.find(bk => bk.id === id);

    if(book){
        res.status(200).json(book);
    }
    else{
        res.status(404).json({message: 'Book is not found on the list '});
    }
});

app.post('/books',(req,res)=>{
    const {title , details} = req.body;
    //const details = req.body;

    if(!title || !details){
        res.status(400).json({error:'insert the title and the details'});
    }
    const addBook = {
       id: books.length + 1,
       title,
       details
    };
    books.push(addBook);
    res.status(200).json(addBook)
});

app.put('/books/:id',(req,res)=>{

})

app.delete('/books/:id',(req,res)=>{

    const id = parseInt(req.params.id);
    const bookcheck= books.find(bk => bk.id === id);

    if(bookcheck){
        // errors in deliting idk 
        
      books.splice(bookcheck);

      // needed the message to show that it was deleted othereise was running for too long.
      res.json({message:'deleted'})
    }
    else{
        res.status(404).json({error: 'Book is not found on the list '});
    }
});

app.post('/books/:id/details',(req,res)=>{
    
    const addDetails = {
        details 
    }
    
    books.push(addDetails);

});

app.delete('/books/:id/details',(req,res)=>{
    
    const addDetails = {
        
    }
    
    books.push(addDetails);

});

app.listen(3000,()=>{
    console.log("app is listening to port 3000")
});
