import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        require: [true,"Please provide unique username"],
        unique: [true, "Username Exists"]
    },
    password:{
        type: String,
        require: [true,"Please provide password"],
        unique: false
    },
    email:{
        type: String,
        require: [true, "Please provide unique email"],
        unique: true,

    },
    firstName:{ type: String},
    lastName:{ type: String},
    mobile:{ type: Number},
    address:{ type: String},
    profile:{ type: String},
})
export default mongoose.model.Users || mongoose.model('User',UserSchema);