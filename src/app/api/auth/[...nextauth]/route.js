import { User } from "@/app/models/User";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: process.env.SECRET,
  // ... your NextAuth configuration
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "abc@xyz.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        mongoose.connect(process.env.MONGODB_URI);
        //Searching for the user in DB
        const user = await User.findOne({ email });
        //Checking for the credentials for the user
        const authenticated =
          user && bcrypt.compareSync(password, user.password);
        console.log(authenticated);
        if (authenticated) {
          const data = user;
          return data;
        } else {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
