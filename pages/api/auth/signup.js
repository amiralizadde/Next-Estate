import UserModels from "@/models/users";
import connectionToDB from "@/utils/db";
import { generateToken, hashPassword } from "@/utils/util";
import { serialize } from "cookie";


const handler = async (req, res) => {
  if (req.method !== "POST") {
    return false;
  }

  try {
    connectionToDB();
    const { name, lastname, username, email, password } = req.body;

    if (
      !name.trim() ||
      !lastname.trim() ||
      !username.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      return res.status(422).json({ message: "Send Valid Data ..." });
    }

    //isExistedUser

    const isUser = await UserModels.findOne({
      $or: [{ username }, { email }],
    });


    if (isUser) {
      return res.status(400).json({ message: "This user is Existed" });
    }
    //Hash password
    const hashedpassword = await hashPassword(password);
    //generateToken
    const token = await generateToken({ email });

    //create user
    const allUsers =await UserModels.find({});


    await UserModels.create({
      name,
      lastname,
      username,
      email,
      password: hashedpassword,
      role:allUsers.length > 0 ? "USER" : "ADMIN",
    });

    return res
      .setHeader(
        "Set-Cookie",
        serialize("token", token, {
          path: "/",
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 7, // 1 week
        })
      )
      .status(200)
      .json({ message: "Create User Successfully ..."});
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Unknown Internal Server Error ...", error });
  }
};

export default handler;
