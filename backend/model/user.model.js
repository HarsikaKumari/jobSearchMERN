import mongoose from 'mongoose'
const userScheme = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["student", "recruiter"],
    },
    profile: {
        bio:{type: String},
        skills: [{type: String}],
        resume: {type: String}, //url to resume
        resumeOriginalName: {type: String},
        company:{type: mongoose.Schema.Types.ObjectId, ref: 'Company'},
        profilePhoto: {
            type: String,
            default: "",
        }
    }
}, {timestamps:true})
export const User = mongoose.model("User", userScheme)
