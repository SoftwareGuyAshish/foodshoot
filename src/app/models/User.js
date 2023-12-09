const { Schema, models, model } = require("mongoose");
import bcrypt from "bcryptjs";

const UserSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  { timestamps: true }
);

// Use a pre-save hook to hash the password before saving
UserSchema.post("validate", function (user) {
  const plainPass = user.password;
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(plainPass, salt);
});

export const User = models?.User || model("User", UserSchema);
