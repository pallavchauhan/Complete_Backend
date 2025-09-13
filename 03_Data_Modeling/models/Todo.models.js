import { Type } from 'js-yaml'
import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            uppercase: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        subTodos: [
            {

            }
        ],
        complete: {
            type: Boolean,
            default: false
        }
    }, { timestamps: true }
)

export const Todo = mongoose.model("Todo", todoSchema)