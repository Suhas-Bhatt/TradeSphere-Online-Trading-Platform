const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose").default;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

// passport-local-mongoose adds password hashing, salt, and authenticate methods
UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

module.exports = { UserSchema };
