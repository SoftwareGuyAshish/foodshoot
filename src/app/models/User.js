const { Schema, models, model } = require("mongoose");

const UserSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (pass?.length || pass.length < 6) {
          new Error("Password must be 6 characters long");
        }
        pass;
      },
    },
  },
  { timestamps: true }
);

export const User = models?.User || model("User", UserSchema);
