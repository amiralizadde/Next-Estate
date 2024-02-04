import UserModels from "@/models/users";
import connectionToDB from "@/utils/db";
import { compirePassword, generateToken } from "@/utils/util";
import { serialize } from "cookie";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return false;
  }
  try {
    connectionToDB();
    const { identifire, password } = req.body;

    if (!identifire.trim() || !password.trim()) {
      return res.status(422).json({ message: "Send Valid Data..." });
    }

    const user = await UserModels.findOne({
      $or: [{ username: identifire }, { email: identifire }],
    });
    if (!user) {
      return res.status(404).json({ message: "User Not Found ..." });
    }

    let isPassword =await compirePassword(password , user.password)

    if (!isPassword) {
        return res.status(422).json({ message: "Username or Password Not true ..." });
    }

    let token =await generateToken({email:user.email})

    return res.setHeader(
        "Set-Cookie",
        serialize("token", token, {
          path: "/",
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 7, // 1 week
        })
      ).status(200).json({ message: "Login User Successfully ..." });

  } catch (error) {
    return res.status(500).json({message:" Unknown Internal Server Error ... "})
  }
};

export default handler;
