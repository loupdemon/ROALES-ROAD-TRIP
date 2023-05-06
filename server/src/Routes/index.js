const router = require("express").Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.use('/cryptos', require('./CryptoRoutes'))
router.use('/user', require('./UserRoutes'))



router.get("/", (req, res) => {
    res.status(200).json({

        // /////////////////
        "/cryptos?cmids=[\"cmid\"]": { method: "GET", description: "Return details on multiple cryptocurrencies sent" },
        "/cryptos/:cmid": { method: "GET", description: "Return details on single cryptocurrency sent" },
        "/cryptos/:cmid/history/period": { method: "GET", description: "Return details in a period on a single cryptocurrency sent" },
        "/cryptos": { method: "POST", description: "Add cryptocurrency to list" },
        "/cryptos/:cmid": { method: "DELETE", description: "A Faire" },
        

        // /////////////////
        "/user": { method: "GET", description: "A Faire" },
        "/user": { method: "POST", description: "A Faire" },
        "/user": { method: "PUT", description: "A Faire" },
        "/user": { method: "DELETE", description: "A Faire" },
        "/user": { method: "GET", description: "A Faire" },
        "/user": { method: "POST", description: "A Faire" },
      

    })
})
module.exports = router