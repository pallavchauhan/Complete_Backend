import mongoose from 'mongoose'

// schema k andr ek object data k liye {isme field bna do like username , email},dusra timestamps k liye{dusra ek timestamps k liye}

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        password: {
            type: String,
            required: [true, "password is required"]
        }
    }
)

//model("kya bnanahh mtlb naam" , kis k base pr schema ka variable dal do)
export const User = mongoose.model("User", userSchema)