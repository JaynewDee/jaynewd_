const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    trim: false,
    required: true
  },
});

userSchema.pre("save", async function (next){
  if (this.isNew || this.isModified("password")) {
    const salt = 10;
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function(password){
  return await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
