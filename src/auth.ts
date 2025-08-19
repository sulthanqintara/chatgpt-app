import NextAuth, { NextAuthConfig } from "next-auth";

import GitHubProvider from "next-auth/providers/github";

const authOptions = {
  callbacks: {
    async signIn({ profile }: { profile: { login: string } }) {
      return profile.login === "sulthanqintara";
    },
  } as unknown as NextAuthConfig["callbacks"],
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
};

const handler = NextAuth(authOptions);

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
