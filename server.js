import express from "express";

const app = express();
const PORT = process.env.PORT || 2000;

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(index.html)
})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})