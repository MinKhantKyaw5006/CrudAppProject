import express from 'express';
import { getUser, updateUser } from '../Controllers/UserControllers.js';


const router = express.Router();

router.get('/', async (req,res)=>{
    res.send("user route")
})


router.get('/:id', getUser)
router.put('/:id', updateUser)

export default router;