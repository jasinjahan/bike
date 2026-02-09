const { verifyToken } = require("../utils/token");

exports.userAuthenticate= async(req,res,next)=>{


    try {
        const {token}=req.cookies;

        if(!token){
            return res.status(401).json({
                message: 'Unothenticated',
                success:false,
            });
        }

        const decode =await verifyToken(token);

        req.userId = decode?.userId;
        req.userRole =decode?.userRole;

        next();

   

        
        
    } catch (error) {
        res.status(500).clearCookie('token').json({
            message:error.message,
            success: false,

        });
        
    }

}

exports.userAuthorized=(requiredRoles)=>{
    return(req,res,next)=>{

        if(!requiredRoles.includes(req?.userRole)){
            return res.status(403).json({
                message :"don't have permission to access this resource ",
                success: false ,

            });

        }
        next ();
    }
}