import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    secret: "4c95d46117c217b2d419c4fb94103f57",
});
