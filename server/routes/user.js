const router = require("express").Router();
const User = require("../models/User");

router.post("/login", async ({ body }, res, next) => {
  const user = await User.findOne({ email: body.email })
    
      if (!user) {
        res.status(401).send(`User does not exist`);
      }
      const correctPassword = await user.isCorrectPassword(body.password);
      if (!correctPassword) {
        res.status(401).send(`Incorrect Password`);
      }
    
  return res.json(user);
});

router.post("/signup", async ({ body }, res, next) => {
  const user = new User(body);
  user.save((err) => {
    if (err) {
      if (err.name === "MongoError" && err.code === 11000) {
        return res
          .status(422)
          .send({ success: false, message: "User already exists!" });
      }
    }
  })
  return res.json(user);
});

router.delete("/deleteall", async (req, res, next) => {
  await User.deleteMany().catch((err) => console.error(err));
  res.status(200).send(`All users deleted`);
});

module.exports = router;
