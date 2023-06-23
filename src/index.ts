import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()

app.use(express.json()) // middleware que transforma la req.body a un json

const PORT = 3000

app.get("/", (_:any,res:any)=>{
     
     console.log('someone pinged here!!')
     res.sen('pong')
})


app.use("/api/diaries", diaryRouter)
app.listen(PORT, ()=>{
    console.log("Server running on port 3000")
})