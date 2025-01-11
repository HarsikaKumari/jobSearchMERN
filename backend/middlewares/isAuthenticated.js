import jwt from 'jsonwebtoken'

const isAuthenticated = async (req, res, name) => {
    try {
        const token = req.cookie.token;
        if (!token) {
            return res.status(400).json({
                message: "User not authenticated",
                success: false
            });
        };
        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if (!decode) {
            return res.status(400).json({
                message: "Invalid token",
                success: false  
            });
        };
        req.id = decode.userId;
        next();

    } catch (err) {
        console.log(err);
        
    }
}

export default isAuthenticated;