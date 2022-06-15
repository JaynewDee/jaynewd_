const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    lastName: {
        type: String,
        trim: true,
        require: "Last name required"
    },
    email: {
        type: String,
        trim: true,
        require: "Email required"
    },
    password: {
        type: String,
        trim: false,
        require: "Password required"
    }
})

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const salt = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
})
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password)
}

const User = model('User', userSchema);

module.exports = User;