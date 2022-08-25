import { sessionOptions } from "@/lib/session";
import { withIronSessionApiRoute } from "iron-session/next/dist";

export type LoggedInUser = {
  useremail: string;
  isLoggedIn: boolean;
};

const userRoute = async () => {};

export default withIronSessionApiRoute(userRoute, sessionOptions);
