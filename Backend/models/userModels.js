const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Please enter fullname"],
        minlength: [2, "Fullname should contain min 2 characters"],
        maxlength: [50, "Fullname shouldn't exceed 50 characters"]
    },
    email: {
        type: String,
        require: [true, "Please enter email"],
        unique: [true, " This email is already exist"]
    },
    password: {
        type: String,
        required: [true, "Please enter [password"],
    },
    role: {
        type: String,
        enum: ['admin', 'seller', 'user'],
        default: 'user'
    },
    status: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

userSchema.pre("save", async function () {

    if (!this.isModified("password ")) return;

    this.password = await bcrypt.hash(this.password, Number(process.env.BCRYPT_SALTROUND));

});



const User = mongoose.model("User", userSchema);

module.exports = User;
