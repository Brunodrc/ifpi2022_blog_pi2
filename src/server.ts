import express from 'express'
import routes from './routes'

const app = express()

app.use(express.json())

// teste do servidor
app.get('/',(req, res)=>{
    res.status(200).json({mensagem: "funcionou!!!"})
})

app.use(routes)

const port = 3333

app.listen(port, ()=>{
    console.log(`Server runing at http://localhost:${port}🚀`);
    
})