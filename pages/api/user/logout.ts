import { sessionOptions } from "@/lib/session";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";

const logoutRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.session.user && req.session.user.isLoggedIn) {
    req.session.destroy();
    res.status(200).json({
      data: req.session.user,
      success: true,
      message: "you are now logged out",
    });
  } else {
    res.status(400).json({ success: false, message: "you are not logged in" });
  }
};

export default withIronSessionApiRoute(logoutRoute, sessionOptions);
