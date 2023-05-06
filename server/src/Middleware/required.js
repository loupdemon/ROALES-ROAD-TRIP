const requiredBody = (...labels) => (req, res, next)=>{
    const missing = labels.find(a=> !req.body.hasOwnProperty(a))
    return missing ? res.status(400).json({ msg: `Missing field ${missing}` }) : next()
}
const requiredQuery = () => { }

module.exports = {
    requiredBody,
    requiredQuery
}