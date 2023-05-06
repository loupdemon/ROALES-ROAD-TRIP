const { User, createUser } = require("../Models/UserModels")
const permission = async (req, res, next) => {
    try {
        const user = await User.findById(req.user);
        console.log(user.Role)
        if (user.Role === false )
            return res.status(401).json({msg: "user is Not Admin"});
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = permission