const router = require("express").Router();
const User = require('../models/User');

router.post('/login', async ({body}, res, next) => {
    const user = await User.findOne({email: body.email});

    if (!user) {
        throw new Error(`User ${body.email} does not appear to exist in the database.`)
    }
    const correctPassword = await user.isCorrectPassword(body.password)
    if (!correctPassword) {
        throw new Error(`Credentials unmatched.  Please try again.`)
    }
    else {
        res.send()
    }
})

router.post('/signup', async ({body}, res, next) => {
    try {
        const user = await User.create(body);
        await user.save();
    }
    catch (err) {console.error(err)}    
})
module.exports = router;