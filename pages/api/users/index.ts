// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "@/lib/dbConnect";
import User from "models/User";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  dbConnect();

  if (method === "GET") {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  if (method === "POST") {
    try {
      const { firstname, lastname, useremail, password } = req.body;
      if (await User.findOne({ useremail })) {
        return res
          .status(400)
          .send("The email address has already been taken.");
      }
      await User.create({ firstname, lastname, useremail, password });
      return res.status(201).send("user created");
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
