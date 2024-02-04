import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

const hashPassword = async (password) => {
  const hashedpassword = await hash(password, 12);
  return hashedpassword;
};

const generateToken = async (data) => {
  const token = await sign({ ...data }, process.env.privateKey, {
    expiresIn: "24h",
  });
  return token;
};

const compirePassword=async (userPassword , passwordHashed)=>{

  const isPassword =await compare(userPassword , passwordHashed)

  return isPassword

}

export { hashPassword, generateToken ,compirePassword};
