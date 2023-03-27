//database schema
import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required: true
        },

        passwood: {
            type: String,
            required: true

        },

        firstname: {
            type: String,
            required: true
        },

        isAdmin: {
            type: Boolean,
            default: false
        },

        profilePicture: String,
        coverPicture: String,
        about: String,
        livesin: String,
        workAt: String,
        relationship: String,
        //followers away will store id,
        followers: [],
        following: []
    },

    //two fields, created and updated fields
    {timestamps: true}
)


const UserModel = mongoose.model("Users", UserSchema);

export default UserModel