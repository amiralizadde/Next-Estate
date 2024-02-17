

import UserModels from "@/models/users";
import connectionToDB from "@/utils/db";
import { verifyToken } from "@/utils/util";

const handler = async (req, res) => {
  if (req.method !== "GET") {
    return false;
  }

  try {
    connectionToDB();

    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ message: "You are not login !!" });
    }

    const tokenPayload = verifyToken(token);

    if (!tokenPayload) {
      return res.status(401).json({ message: "You are not login !!" });
    }

    const user = await UserModels.findOne(
      {
        email: tokenPayload.email,
      },
      "firstname lastname role"
    );

    return res.status(200).json({ data: user });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "UnKnown Internal Server Erorr !!" });
  }
};

export default handler;
