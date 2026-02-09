const User = require("../models/userModels");

const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/token");

exports.userRegister = async (req, res) => {


    try {

        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            return res.status(400).json({
                message: 'please enter a data ',
                success: false,
            });
        }


        const user = await User.create(req.body);


        res.status(201).json({
            message: 'User registered successfully!',
            success: true,
            user
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false,
        });

    }



}

exports.updateProfile = async (req, res) => {
    try {
        const { fullName, email } = req.body;
        const userId = "697c3dddb2fd1cfa3420f9f0";

        if (!userId) {
            return res.status(400).json({
                message: "User id is missing ",
                success: false,
            });
        }
        if (!fullName || !email) {
            return res.status(400).json({
                message: "Please enter all data",
                success: false,
            });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false,
            });
        }

        user.fullName = fullName;
        user.email = email;

        const updateUser = await user.save();

        res.status(200).json({
            message: 'User profile updated',
            success: true,
            user: updateUser
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false,
        });
    }
}



exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Email or password is missing",
                success: false,
            });
        }
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User is not found ",
                success: false,
            });
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
             return res.status(401).json({
            message: "Invalid credentials",
            success: false,
        });
        }

        const token = await generateToken(user._id, user.role);

        res.status(200).cookie('token',token).json({
            message:"User logged successfully ",
            success: true,

        });


    }catch (error){
        res.status(500).json({
            message: error.message,
            success: false,
        });

    }
}

exports.userLogout = (req,res)=>{
    res.status(200).clearCookie('token').json({
        message: "User loggedout seccessfully ",
        success: true ,

    });
}

exports.getAllUsers = async (req, res)=>{
    try {
        const users=await User.find();
        if (!users){
            return res.status(404).json({
                message: "User not found!",
                success: false,

            });
        }

        res.status(200).json({
            users,
            success: false,

        });

        
    } catch (error) {
        res.status(500).json({
            message:error.message,
            success: false ,

        });
        
    }
}