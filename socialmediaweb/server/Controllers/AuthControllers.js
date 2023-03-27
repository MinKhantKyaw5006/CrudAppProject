import UserModel from "../Models/userModel.js";


//new user registeration
export const registerUser = async (req,res)=> {
    const {username, passwood, firstname, lastname}=req.body;

    const newUser = new UserModel({username, passwood, firstname, lastname})

    //to contact with server, use try catch
    try{
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error){
        res.status(500).json({message: error.message})

    }

}