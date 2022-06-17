const router = require("express").Router();
const User = require("../models/User");

router.post("/login", async ({ body }, res, next) => {
  const returnData = await User.findOne({ email: body.email }).then(
    async (user) => {
      if (!user) {
        res.status(401).send(`User does not exist`);
      }
      const correctPassword = await user.isCorrectPassword(body.password);
      if (!correctPassword) {
        res.status(401).send(`Incorrect Password`);
      }
    }
  );
  res.status(200).json(returnData);
});

router.post("/signup", async ({ body }, res, next) => {
  console.log("Body", body);
  const user = await User.create(body);
  console.log("User", user);
  await user.save();
  res.status(200).json(user);
});

router.delete("/deleteall", async (req, res, next) => {
  await User.deleteMany().catch((err) => console.error(err));
  res.status(200).send(`All users deleted`);
  next();
});

module.exports = router;
