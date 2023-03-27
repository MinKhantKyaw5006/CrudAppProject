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

};


//login user code 

export const loginUser = async (req, res) => {
    const { username, passwood } = req.body

    try {
        const user = await UserModel.findOne({ username: username })

        if (user) {
            const validity = await bcrypt.compare(passwood, user.passwood)

            validity ? res.status(200).json(user) : res.status(400).json("Wrong Passwood")
        }

        else {
            res.status(404).json("User does not exist")
        }
    } catch (error) {
        res.status(500).json({message: error.message});


    }
}