import express from 'express';
import { loginUser, registerUser } from '../Controllers/AuthControllers.js';

const router = express.Router()


router.get('/', async(req,res)=>{res.send("Auth Route")})

//route for new user, login 

router.post('/register', registerUser)
router.post('/login', loginUser)
export default router