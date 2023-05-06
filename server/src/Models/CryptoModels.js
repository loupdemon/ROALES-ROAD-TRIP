const { Schema, model } = require("mongoose");

/* Crypto */
const CryptoSchema = new Schema({
    Symbol: { type: String, trim: true, required: true },
    Fullname: { type: String, trim: true, required: true },
    Fullname: { type: String, trim: true, required: true },
});

const addCrypto = async (Symbol, Fullname, LogoUrl) => new (model("crypto", CryptoSchema))({
    Symbol,
    Fullname,
    LogoUrl
}).save();

module.exports = {
    Crypto: model("Crypto", CryptoSchema),
    addCrypto
}