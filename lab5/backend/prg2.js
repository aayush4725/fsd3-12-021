import express from 'express'
import path from 'path'
import { fileURLToPath } from 'node:url';  

const app = express();

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
app.get("/",(req,res)=>{
    res.sendFile(path.join(dirname,'Pages','product.html'));

});

app.get("/contact",(req,res)=>{
    res.sendFile(path.join(dirname,'Pages','contactUs.html'));
});

// This route must be last 
app.use((req,res)=>{
    res.status(404).send("<h1>Page not found </h1>");
});

app.listen(4444,()=>console.log('prg1 is running at 4444'));