const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("mongoose");
const { User, createUser } = require("../Models/UserModels")
const { token: { auth }, permission, required: { requiredBody } } = require('../Middleware')
require('dotenv').config()

// //////////////////////////////////////////

const login = async (Email, Password) => {
    try {
        const user = await User.findOne({ Email, Activate: true });
        if (!user)
            return { code: 400, data: "No account with this email has been registered." }
        if (!bcrypt.compareSync(Password, user.Password))
            return { code: 401, data: "Invalid creadentials." }
       
        const token = jwt.sign({ id: user._id, exp: Date.now() + 604800000 }, 'abc');
        
        const response = {
            code: 200,
            data: {
                token,
                user: user
            }
        }
        return response
    } catch (err) {
        return { code: 500, data: JSON.stringify(err) }
    }
}


router.post("/login", async (req, res) => {
    const { Email, Password } = req.body;
    if (!Email || !Password) return res.status(400).json({ msg: `Missing field ${Email ? "password" : "email"}.` });
    let a = await login(Email, Password)
    console.log(a)
    res.status(a.code).json(Object.assign(a.data, { iat: Date.now() }))
});

// //////////////////////////////////////////



// //////////////////////////////////////////
// Register User 

const register = async ( LastName, FirstName, Email, Password, Activate, Role) => {
    try {
        if (await User.findOne({ Email: Email })) return { code: 400, data: "An account with this email already exists." }

        const savedUser = await createUser(LastName, FirstName, Email, await bcrypt.hashSync(Password, 10), Activate, Role);

        return await User.findById(savedUser.id) && await login(Email, Password) && { code: 201, data: "User Create" }|| { code: 500, data: "Couldn't create user" }
    } catch (err) {
        console.log(err)
        return { code: 500, data: { error: err.message } }
    }
}


router.post("/", async (req, res) => {
    try {
        const missing = ["LastName", "FirstName", "Email", "Password", "PasswordVerif", "Role" ].find(a => !req.body[a])
        if (missing) return res.status(400).json({ msg: `Missing field ${missing}` })

        const { LastName, FirstName, Email, Password, PasswordVerif, Role } = req.body;

        if (!/(\w|.)+@\w+.\w{1,4}/.test(Email))
            return res.status(400).json({ msg: "Invalid email address." })
        if (Password.length < 8)
            return res.status(400).json({ msg: "The password needs to be at least 8 characters long." })
        if (Password !== PasswordVerif)
            return res.status(400).json({ msg: "The passwords doesn't match." })
        let Activate = 1
        let Favorites = {
            UrlCrypto: "Default",
        }
        let a = await register( LastName, FirstName, Email, Password, Activate, Role, Favorites)
        res.status(a.code).json(Object.assign(a.data, { iat: Date.now() }))
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// //////////////////////////////////////////

// Activate / Disable

// router.put("/activate", auth, async (req, res) => {
//     try {
//         const deletedUser = await User.findByIdAndUpdate(req.user, { Activate: true });
//         res.status(200).json();
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

C=// //////////////////////////////////////////

// //////////////////////////////////////////

// Edit User

router.put("/", auth, async (req, res) => {
    try {
        const update = [ "LastName", "FirstName"]
            .reduce((prev, cur) => {
                if (req.body[cur]) prev[cur] = req.body[cur]
                return prev
            }, {})
        let users = await User.findByIdAndUpdate(req.user, update)
        res.status(200).json({ data: users })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// //////////////////////////////////////////

// //////////////////////////////////////////

// Get All user 
router.get("/", auth, permission, async (req, res) => {
    try {
        let users = await (req.authority === 0 ?
            User.find().select({ Password: 0 }) :
            User.find({ Active: true }).select({ Password: 0, Boutique: 0, Banking: 0, Active: 0 }))
        res.status(200).json({ count: users.length, data: users })
    } catch (err) {
        res.status(500).json({ error: err.message, iat: Date.now() })
    }
})

// //////////////////////////////////////////

// Get Me 
router.get("/me", auth, async (req, res) => {
    try {
        const user = await (
            req.query.populate ?
                User.findById(req.user).select({ Password: 0 })
                    .populate('Banking').populate('Commandes')
                :
                User.findById(req.user).select({ Password: 0 }))
        if (user) res.json({ data: user, iat: Date.now() })
        else throw new Error("Can't find User")
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// //////////////////////////////////////////


// EN DEV


// //////////////////////////////////////////

// Add Favoris

router.post("/favoris", auth, async (req, res) => {
    try {
        console.log(req);
        const update = [ "Favorites"]
            .reduce((prev, cur) => {
                if (req.body[cur]) prev[cur] = req.body[cur]
                return prev
            }, {})
        let users = await User.findByIdAndUpdate(req.user, update);
        console.log(users);
        res.status(200).json({ data: users })
    } catch (err) {
        res.status(500).json({ error: err.messiage })
    }
})


// //////////////////////////////////////////

// //////////////////////////////////////////

// remove Favoris

router.delete("/favoris", auth, async (req, res) => {
    try {
        const user = await (
            req.query.populate ?
                User.findById(req.user).select({ Password: 0 })
                    .populate('Banking').populate('Commandes')
                :
                User.findById(req.user).select({ Password: 0 }))
        if (user) res.json({ data: user, iat: Date.now() })
        else throw new Error("Can't find User")
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// //////////////////////////////////////////

// //////////////////////////////////////////

// get All Favoris

router.get("/favoris", auth, async (req, res) => {
    try {
        const user = await (
            req.query.populate ?
                User.findById(req.user).select({ Password: 0 })
                    .populate('Banking').populate('Commandes')
                :
                User.findById(req.user).select({ Password: 0 }))
        if (user) res.json({ data: user, iat: Date.now() })
        else throw new Error("Can't find User")
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// //////////////////////////////////////////
module.exports = router;