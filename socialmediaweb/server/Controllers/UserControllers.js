import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt';

//get a user
export const getUser = async(req,res)=>{
    const id= req.params.id;


    try {
        const user= await UserModel.findById(id)

        if(user)
        {

            const {passwood, ...otherDetails} =user._doc
            res.status(200).json(otherDetails)
        }
        else{
            res.status(404).json("No such user exists")
        }
    } catch (error) {
        res.status(500).json(error)
    }

    
}

//update a user
export const  updateUser = async(req,res)=>{
    const id = req.params.id;
    const {currentUserId, currentUserAdminStatus, passwood} = req.body


    //two scenerios

    if(id===currentUserId || currentUserAdminStatus)
    {
        try {
            const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true})

            if(passwood)
            {
                const salt= await bcrypt.genSalt(10);
                req.body.passwood = await bcrypt.hash(passwood,salt)
            }

            res.status(200).json(user)

        } catch (error) {
            res.status(500).json(error);
        }
    }
    else 
    {
        res.status(403).json("Access Denied! You can only update your own profile")
    }
}


//Delete a user
export const deleteUser = async(req,res)=>{
    const id = req.params.id

    const {currentUserId, currentUserAdminStatus} = req.body

    if(currentUserId === id || currentUserAdminStatus)
    {
        try {
            await UserModel.findByIdAndDelete(id)
            res.status(200).json("User Deleted Successfully")
        } catch (error) {
            res.status(500).json(error);
        }
    }
    else{
        res.status(403).json("Access Denied! You can only delete your own profile")
    }

   
}