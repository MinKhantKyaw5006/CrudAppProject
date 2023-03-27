import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt';


//new user registeration
export const registerUser = async (req, res) => {
    const { username, passwood, firstname, lastname } = req.body;


    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(passwood, salt)

    const newUser = new UserModel({ username, passwood: hashedPass, firstname, lastname })

    //to contact with server, use try catch
    try {
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }

}