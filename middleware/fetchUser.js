var jwt = require('jsonwebtoken');
require("dotenv").config()

let JWT_Secret = process.env.JWT_SECRET;
console.log(process.env.JWT_SECRET)

const fetchUser = (req, res, next) => {
    const token = req.header('authToken');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_Secret)
        req.user = data.user;
        next()
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
}

module.exports = fetchUser; 