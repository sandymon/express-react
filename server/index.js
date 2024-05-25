import express from "express"
import cors from "cors"
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

app.use('/server', express.static(path.join(__dirname)));


app.use(express.json())

app.use(cors())

app.use(express.static(path.join(__dirname, '..', 'express-react', 'dist')));


app.get('/' ,(req,res) => {
    
    res.sendFile(express.static(path.join(__dirname, '..', 'express-react', 'dist', 'index.html')));
})

app.get('/test' ,(req,res) => {
    
    res.sendFile(path.join(__dirname, 'Robbie_render.png'));
})

app.listen(3000,() =>{
    console.log("Server is operational");

} )