const router = require("express").Router();
const User = require("../models/User");

router.post("/login", async ({ body }, res, next) => {
  console.log(body)
  await User.findOne({ email: body.email }).then(async (user, err) => {
    if (err) throw err;
    if (!user) {
      res.status(401).send(`User does not exist`);
      return;
    } else {
      const correctPassword = await user.isCorrectPassword(body.password);
      if (!correctPassword) {
        return res.status(401).send(`Incorrect Password`);
      } else {
        return res.json(user);
      }
    }
  });
});

router.post("/signup", async ({ body }, res, next) => {
  try {
    const exists = await User.findOne({ email: body.email })
    if(exists) {
      return res
        .status(422)
        .send({ success: false, message: "User already exists!" })
    }
    else {
      const user = await new User(body)
      user.save();
      res.send(user);
    }

  } catch (err) {
    if (err.name === "MongoError" && err.code === 11000) {
      return res
        .status(422)
        .send({ success: false, message: "User already exists!" });
    }
  }
  return
});

router.delete("/deleteall", async (req, res, next) => {
  await User.deleteMany().catch((err) => console.error(err));
  res.status(200).send(`All users deleted`);
});

module.exports = router;
