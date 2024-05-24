import express from "express"

const app = express()

app.get('/' ,(res,req) => {

    req.json("Server is operational")
})

app.listen(3000,() =>{
    console.log("Server is operational");

} )