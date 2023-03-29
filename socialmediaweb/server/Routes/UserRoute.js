import express from 'express';

import { deleteUser, followUser,  getAllusers,  getUser, UnFollowUser, updateUser } from '../Controllers/UserControllers.js';
// import authMiddleWare from '../MiddleWare/authMiddleware.js';


const router = express.Router();

// router.get('/', async (req,res)=>{
//     res.send("user route")
//     console.log(req)
// })

router.get('/',getAllusers)
router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', UnFollowUser)

export default router;