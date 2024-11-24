import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const app = express()
app.use(cors())
const prisma = new PrismaClient()

app.use(express.json())
/**
	Criando API

	- Criar um usuário
	- Listar todos os usuários
	- Editar um usuário
	- Deletar um usuário
*/

app.post('/users', async (req, res) =>{
	await prisma.user.create({
		data:{
			email: req.body.email,
			name: req.body.name,
			age: req.body.age
		}
	})
	res.status(201).json(req.body)
})

app.get('/users', async (req, res) =>{

	let user = []
	if (req.query){
		user = await prisma.user.findMany({
			where: {
				name: req.query.name,
				email: req.query.email,
				age: req.query.age
			}
		})
	}
	const users = await prisma.user.findMany()
	 res.status(200).json(users)
})

app.put('/users/:id', async (req, res) =>{
	await prisma.user.update({
		where:{
			id: req.params.id
		},
		data:{
			email: req.body.email,
			name: req.body.name,
			age: req.body.age
		}
	})
	res.status(201).json(req.body)
})

app.delete('/users/:id', async (req, res) =>{
	await prisma.user.delete({
		where:{
			id: req.params.id
		}
	})
	res.status(200).json({message: 'Usuário deletado com sucesso!'})
})

app.listen(3000)
