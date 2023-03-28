import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


//new user registeration
export const registerUser = async (req, res) => {
    // const { username, passwood, firstname, lastname } = req.body;

    


    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.passwood, salt)
    req.body.passwood = hashedPass

    const newUser = new UserModel(req.body)
    const {username} = req.body

    // const newUser = new UserModel({ username, passwood: hashedPass, firstname, lastname })

    //to contact with server, use try catch
    try {

        const olduser = await UserModel.findOne({username})
        if(olduser)
            {
                return res.status(400).json({message: "Username is already registered!"})
            }
        const user = await newUser.save()

        const token = jwt.sign({
            username: user.username , id: user._id

        }, process.env.JWT_KEY, {expiresIn:'1h'})
        res.status(200).json({user, token})
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

            if(!validity)
            {
                res.status(400).json("Wrong password!Try again!")
            }else
            {
                const token = jwt.sign({
                    username: user.username , id: user._id
        
                }, process.env.JWT_KEY, {expiresIn:'1h'})
                res.status(200).json({user, token})
            }

            // validity ? res.status(200).json(user) : res.status(400).json("Wrong Passwood")
        }

        else {
            res.status(404).json("User does not exist")
        }
    } catch (error) {
        res.status(500).json({message: error.message});


    }
}