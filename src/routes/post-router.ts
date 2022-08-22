import { Router } from "express";
import { AuthMiddleware } from "../middlewares/authmiddlewares";

const postRoutes = Router()
const nome = 'Rogério'

postRoutes.use(AuthMiddleware)

postRoutes.get('/', (req, res) => res.json({posts:[]}))

postRoutes.post('/', (req, res) =>{
    res.status(201).json({post:{id:1, título: "meu primeiro post"}})
})

export {postRoutes, nome}