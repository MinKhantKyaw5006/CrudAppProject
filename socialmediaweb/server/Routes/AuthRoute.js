import express from 'express';
import { registerUser } from '../Controllers/AuthControllers.js';

const router = express.Router()


// router.get('/', async(req,res)=>{res.send("Auth Route")})

//route for new user, login 

router.post('/register', registerUser)
export default router