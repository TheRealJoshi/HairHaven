import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/fconfig"

export const authOptions = {
  // Configure one or more authentication providers
//   pages: {
//     login: "/login",
//     register: "/register",
//     forgot: "/forgot",
//     dashboard: "/dashboard",
// },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
        //   username: { label: "Username", type: "text", placeholder: "jsmith" },
        //   password: { label: "Password", type: "password" }
        },
        // async create(credentials, req) {
        //     createUserWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //       // Signed up 
        //       const user = userCredential.user;
        //       // ...
        //     })
        //     .catch((error) => {
        //       const errorCode = error.code;
        //       const errorMessage = error.message;
        //       // ..
        //     });
        // },
        async authorize(credentials, req) {
            return await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                if (userCredential.user){
                    const user = userCredential.user;
                } else {
                    return null;
                }
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                return errorMessage;
            });
        }
      })
  ]
}

export default NextAuth(authOptions)