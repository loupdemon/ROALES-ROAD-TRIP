/* Lib import */
const router = require('express').Router();
const { getCryptos, getAllCryptos, getCryptoByPeriod } = require('../Middleware/crypto')

const { Crypto, addCrypto } = require('../Models/CryptoModels')

/* Helper */

const register = async ( Symbol, Fullname) => {
    try {
        if (await Crypto.findOne({ Symbol: Symbol })) return { code: 400, data: "A crypto with this symbol already exists." }

        const savedCrypto = await addCrypto(Symbol, Fullname);

        return await Crypto.findById(savedCrypto.id) && { code: 201, data: "Crypto added" } || { code: 500, data: "Couldn't add crypto" }
    } catch (err) {
        console.log(err)
        return { code: 500, data: { error: err.message } }
    }
}

/* Routes */
router.get('/all', async (req, res) => {
    try {
        var response = await getAllCryptos().then(function(response) {
            return response;
        });
        return res.status(201).json(response);
    } catch (err) {
        console.log(err);
        return { code: 500, data: { error: err.message } };
    }
});

router.get('/', async (req, res) => {
    var cmids = JSON.parse(req.query.cmids);
    try {
        var response = await getCryptos(cmids).then(function(response) {
            return response;
        });
        return res.status(201).json(response);
    } catch (err) {
        console.log(err)
        return { code: 500, data: { error: err.message } }
    }
});

router.get('/:cmid', async (req, res) => {
    var arr = [req.params.cmid]
    try {
        var response = await getCryptos(arr).then(function(response) {
            return response;
        });
        return res.status(201).json(response);
    } catch (err) {
        console.log(err);
        return { code: 500, data: { error: err.message } };
    }
});


router.get('/:cmid/history/:period', async (req, res) => {
    try {
        var response = await getCryptoByPeriod(req.params.cmid, req.params.period).then(function(response) {
            return response;
        });
        return res.status(201).json(response);
    } catch (err) {
        console.log(err)
        return { code: 500, data: { error: err.message } }
    }
});


router.post('/', async (req, res) => {
    try {
        const missing = [ "Symbol", "Fullname" , "LogoUrl"].find(a => !req.body[a])
        if (missing) 
            return res.status(400).json({ msg: `Missing field ${missing}` })
        const { Symbol, Fullname, LogoUrl } = req.body;
        let a = await register( Symbol, Fullname, LogoUrl);
        res.status(a.code).json(Object.assign(a.data, { iat: Date.now() }))
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
});


router.delete('/:cmid', (req, res) => {
    try {
        Crypto.findOneAndDelete({Symbol: req.params.cmid }, function (err, docs) {
            if (err){
                res.status(500).json({ error: err.message });
            }
            else{
                console.log("Deleted Crypto : ", docs);
                res.status(200).json({ message: "Crypto deleted", data: docs })
            }
        });
    } catch (err) {
        console.log(err)
        return { code: 500, data: { error: err.message } }
    }
});

module.exports = router;
