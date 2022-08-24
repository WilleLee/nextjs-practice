// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "@/lib/dbConnect";
import User from "models/User";
import type { NextApiRequest, NextApiResponse } from "next";
import * as bcrypt from "bcryptjs";

const saltRounds = 10;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
      } catch (err) {
        res.status(500).json({ success: false });
      }
      break;

    case "POST":
      try {
        const {
          firstname,
          lastname,
          useremail,
          password,
          passwordConfirmation,
        } = req.body;
        if (!firstname || !lastname || !useremail || !password) {
          return res
            .status(400)
            .json({ success: false, message: "not fulfilled" });
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
          .json({ success: false, messsage: "unexprected error occured" });
      }

    default:
      break;
  }
}
