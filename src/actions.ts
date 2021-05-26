import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { User } from './entities/User'
import { Exception } from './utils'
import { Personaje } from './entities/Personaje'
import { Planeta } from './entities/Planeta'
import jwt from 'jsonwebtoken'

export const createUser = async (req: Request, res:Response): Promise<Response> =>{

	if(!req.body.Nombre) throw new Exception("Por favor introduzca su nombre")
	if(!req.body.Apellido) throw new Exception("Por favor introduzca su apellido")
	if(!req.body.Correo) throw new Exception("Por favor ingrese su correo electrónico")
	if(!req.body.Contraseña) throw new Exception("Por favor ingrese su contraseña")

	const userRepo = getRepository(User)
	const user = await userRepo.findOne({ where: {Correo: req.body.Correo }})
	if(user) throw new Exception("El correo que ha ingresado ya está registrado")

	const newUser = getRepository(User).create(req.body); //Creo un usuario nuevo
	const results = await getRepository(User).save(newUser); //Guardo el usuario nuevo
	return res.json(results);
}

export const getUsers = async (req: Request, res: Response): Promise<Response> =>{
		const user = await getRepository(User).find();
		return res.json(user);
}

export const updateUser = async (req: Request, res:Response): Promise<Response> =>{
    const user = await getRepository(User).findOne(req.params.id);
	if(user) {
        getRepository(User).merge(user, req.body);
        const results = await getRepository(User).save(user);
        return res.json(results);
    }
	return res.status(404).json({msg: "Usuario no registrado"});
}

export const deleteUsers = async (req: Request, res: Response): Promise<Response> =>{
    const users = await getRepository(User).findOne(req.params.id);
    if(!users) {
        return res.json({ msg :"Este usuario no existe"});
    }else {
    const users = await getRepository(User).delete(req.params.id);
		return res.json(users);
    }	
}

export const createPeople = async (req: Request, res:Response): Promise<Response> =>{

	if(!req.body.Nombre) throw new Exception("Por favor ingrese un nombre")
	if(!req.body.Estatura) throw new Exception("Por favor indique estatura")
	if(!req.body.Fecha_Nacimiento) throw new Exception("Por favor ingrese fecha de nacimiento")
    if(!req.body.Color_de_ojos) throw new Exception("Por favor indique color de ojos")
        
	const nuevoPers = getRepository(Personaje).create(req.body);  
	const results = await getRepository(Personaje).save(nuevoPers);
	return res.json(results);
}

export const getPeople = async (req: Request, res: Response): Promise<Response> =>{
		const people = await getRepository(Personaje).find();
		return res.json(people);
}

export const getPeoplePorId = async (req: Request, res: Response): Promise<Response> =>{
        const people = await getRepository(Personaje).findOne(req.params.id);
        if(!people) throw new Exception("No se encuentra personaje con esa Id");
		return res.json(people);
}

export const updatePeople = async (req: Request, res:Response): Promise<Response> =>{
    const PersRepo = getRepository(Personaje) 
	const pers = await PersRepo.findOne(req.params.id);
	if(!pers) throw new Exception("El personaje con esa Id no existe");
	
	PersRepo.merge(pers, req.body); 
	const results = await PersRepo.save(pers);
	return res.json(results);
}

export const createPlanetas = async (req: Request, res:Response): Promise<Response> =>{

	if(!req.body.Nombre) throw new Exception("Por favor ingrese un nombre")
	if(!req.body.Rotación) throw new Exception("Por favor ingrese un valor de rotación")
    if(!req.body.Diámetro) throw new Exception("Por favor introduzca diámetro")
    if(!req.body.Gravedad) throw new Exception("Por favor introduzca valor referente a la gravedad")
        
	const nuevoPlaneta = getRepository(Planeta).create(req.body);  
	const results = await getRepository(Planeta).save(nuevoPlaneta);
	return res.json(results);
}

export const getPlanets = async (req: Request, res: Response): Promise<Response> =>{
		const planeta = await getRepository(Planeta).find();
		return res.json(planeta);
}

export const getPlanetaPorId = async (req: Request, res: Response): Promise<Response> =>{
        const planeta = await getRepository(Planeta).findOne(req.params.id);
        if(!planeta) throw new Exception("No existe un planeta con esa Id");
		return res.json(planeta);
}

export const updatePlanetas = async (req: Request, res:Response): Promise<Response> =>{
    const planetaRepo = getRepository(Planeta) 
	const planeta = await planetaRepo.findOne(req.params.id);
	if(!planeta) throw new Exception("No existe un planeta con esa Id");
	
	planetaRepo.merge(planeta, req.body); 
	const results = await planetaRepo.save(planeta);
	return res.json(results);
}

export const login = async (req: Request, res: Response): Promise<Response> =>{
		
	if(!req.body.Correo) throw new Exception("Introduzca un correo electrónico", 400)
	if(!req.body.Contraseña) throw new Exception("Por favor introduzca una contraseña", 400)

	const userRepo = await getRepository(User)

	const user = await userRepo.findOne({ where: { Correo: req.body.Correo, Contraseña: req.body.Contraseña }})
	if(!user) throw new Exception("Usuario o contraseña incorrectos", 401)

	const token = jwt.sign({ user }, process.env.JWT_KEY as string, { expiresIn: 60 * 60 });
	
	return res.json({ user, token });
}







