declare module "next-auth/react";

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      username: string;
    };
  }
}
