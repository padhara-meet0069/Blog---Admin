const userModel = require("./UserModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

class UserController {
    async CreateUser(req, res) {
        try {
            const { firstName, lastName, email, password } = req.body
            if (!firstName || !lastName || !email || !password) return res.status(400).send({ message: "Missing dependency" })
            req.body.password = bcrypt.hashSync(password, 8)
            const result = await userModel.createUser(req.body)
            if (!result) return res.status(500).send({ message: "Somthing went wrong" })
            return res.status(200).send({ message: "Success" })
        } catch (error) {
            console.log(error)
            return res.status(500).send({ message: "Internal server error" })
        }
    }

    async LoginUser(req, res) {
        try {
            const { email, password } = req.body
            if (!email || !password) return res.status(200).send({ message: "Missing dependency" })
            let User = await userModel.model.findOne({ email: email })
            if (!User) return res.status(401).send({ message: "User Not Exist" })
            if (!bcrypt.compareSync(password, User.password)) return res.status(401).send({ message: "Password and Email are Not match" })
            const token = jwt.sign({ firstName: User.firstName, email: User.email, _id: User._id }, process.env.JWT_SECRATE, { expiresIn: "30d" })
            if (!token) return res.status(500).send({ message: "Somthing went wrong" })
            return res.status(200).send({ message: "Success", token: token })
        } catch (error) {
            return res.status(500).send({ message: "Internal server error" })

        }
    }
}

const userController = new UserController()
module.exports = userController