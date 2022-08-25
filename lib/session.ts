import { IronSessionOptions } from "iron-session";
import { LoggedInUser } from "pages/api/user";

export const sessionOptions: IronSessionOptions = {
  password: process.env.NEXT_PUBLIC_SESSION_SECRET as string,
  cookieName: "nextjs-movies",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

declare module "iron-session" {
  interface IronSessionData {
    user?: LoggedInUser;
  }
}
