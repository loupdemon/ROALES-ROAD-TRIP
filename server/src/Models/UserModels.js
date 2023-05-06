const mongoose = require("mongoose");


/* User */
const UserSchema = new mongoose.Schema({
    LastName: { type: String, trim: true, required: true },
    FirstName: { type: String, trim: true, required: true },
    Email: { type: String, trim: true, required: true },
    Password: { type: String, required: true, minLength: 8 },
    Activate: { type: Boolean, required: true },
    Role: { type: Boolean, required: true },
    Favorites: [
        { type: String, required: false},
    ]
});

const createUser = async (LastName, FirstName, Email, Password, Activate, Role, Favorites) => new (mongoose.model("user", UserSchema))({
    LastName,
    FirstName,
    Email,
    Password,
    Activate,
    Role,
    Favorites
}).save();


module.exports = {
    User :mongoose.model("user", UserSchema),
    createUser
}