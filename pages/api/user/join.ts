import { NextApiRequest, NextApiResponse } from "next";
//db
import dbConnect from "@/lib/dbConnect";
import User from "models/User";

const joinRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  try {
    const { firstname, lastname, useremail, password, passwordConfirmation } =
      req.body;
    if (!firstname || !lastname || !useremail || !password) {
      return res.status(400).json({ success: false, message: "not fulfilled" });
    }
    if (password !== passwordConfirmation) {
      return res
        .status(400)
        .json({ success: false, message: "password confirmation failed" });
    }
    if (await User.findOne({ useremail })) {
      return res
        .status(400)
        .json({ success: false, message: "email already taken" });
    }
    const user = await User.create({
      firstname,
      lastname,
      useremail,
      password,
    });
    return res.status(201).json({ success: true, data: user });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "unexpected error occured" });
  }
};

export default joinRoute;
