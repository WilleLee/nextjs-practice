import { sessionOptions } from "@/lib/session";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";

export type LoggedInUser = {
  useremail: string;
  isLoggedIn: boolean;
};

const userRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.session.user) {
    return res.json({ ...req.session.user, isLoggedIn: true });
  } else {
    return res.json({ isLoggedIn: false, useremail: "" });
  }
};

export default withIronSessionApiRoute(userRoute, sessionOptions);
