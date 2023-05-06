const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization");

        if (!token || !token.startsWith("Bearer "))
            return res.status(401).json({ msg: "No authentication token, Authorization denied." });
        
        const verified = jwt.verify(token.slice(7), "abc");
        if (!verified)
            return res.status(401).json({ msg: "Token verification failed, Authorization denied." });
        if(!(verified.exp > Date.now()))
            return res.status(401).json({msg: "Token expired"})
        req.user = verified.id;
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const verif = async (token) => {
    try {
        if (!token)  return { code : 400, msg: false}
        const verified = jwt.verify(token.slice(7), "abc");
        if (!verified || !(verified.exp > Date.now())) return { code : 400, msg: "expired"}

        const user = await User.findById(verified.id);

        return { code: 200, msg: user }
        
    } catch (err) {
        return({ code: 500, msg: err.message });
    }
}

module.exports = { auth, verif }