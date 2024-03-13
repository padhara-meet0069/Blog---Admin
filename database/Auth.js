const jwt = require("jsonwebtoken")

function Auth(req,res,next){
    try {
        const token = req.headers.token
        if(!token) return res.status(401).send({message:"unAuthorized"})

        const isValid = jwt.verify(token, process.env.JWT_SECRATE)
        return next()
    } catch (error) {
        if(error.message === process.env.JWT_INVALID_TOKEN_MESSAGE){
            return res.status(401).send({message:"unAuthorized"})
        }
        return res.status(500).send({message:"Internal server error"})
    }
}

module.exports = Auth