import express from 'express';
import { getUser } from '../Controllers/UserControllers.js';


const router = express.Router();

router.get('/', async (req,res)=>{
    res.send("user route")
})


router.get('/:id', getUser)

export default router;