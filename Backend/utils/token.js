const jwt = require ("jsonwebtoken");
exports.generateToken = async (userId , userRole='user')=>{

try {
    const payload ={
        userId,
        userRole
    }
    const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn:'10m'});
    return token;
    
    
} catch (error) {
    throw Error(error.message)
    
}

}

exports.verifyToken=async (token)=>{

    try {

    const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("decode----------",decode);
    return decode;

    
        
    } catch (error) {
        throw Error(error.message)
        
    }
}