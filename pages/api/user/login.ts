import dbConnect from "@/lib/dbConnect";
import { sessionOptions } from "@/lib/session";
import { withIronSessionApiRoute } from "iron-session/next";
import User from "models/User";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";

const loginRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  try {
    const { useremail, password } = req.body;
    const user = await User.findOne({ useremail });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ success: false, message: "not permitted" });
    }
    req.session.user = {
      isLoggedIn: true,
      useremail,
    };
    await req.session.save();
    return res.status(200).json({ success: true, data: req.session.user });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "unexpected error occured" });
  }
};

export default withIronSessionApiRoute(loginRoute, sessionOptions);
