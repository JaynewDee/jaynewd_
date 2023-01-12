const router = require("express").Router();
const User = require("../models/User");

router.post("/login", async (req, res, next) => {
  console.log(req.session);
  await User.findOne({ email: req.body.email })
    .then(async (user) => {
      if (!user) {
        res.status(401).send(`User does not exist`);
        return;
      } else {
        const correctPassword = await user.isCorrectPassword(req.body.password);
        !correctPassword
          ? res.status(401).send(`Incorrect Password.`)
          : req.session.save(() => res.json(user));
      }
    })
    .catch((err) => console.error(err));
});

router.post("/signup", async ({ body }, res, next) => {
  try {
    const exists = await User.findOne({ email: body.email });
    exists
      ? res
          .status(422)
          .send({ success: false, message: "User already exists!" })
      : res.send(await User.create(body));
  } catch (err) {
    if (err.name === "MongoError" && err.code === 11000)
      return res
        .status(422)
        .send({ success: false, message: "User already exists!" });
  }
});

router.delete("/deleteall", async (req, res, next) => {
  await User.deleteMany().catch((err) => console.error(err));
  res.status(200).send(`All users deleted`);
});

module.exports = router;
