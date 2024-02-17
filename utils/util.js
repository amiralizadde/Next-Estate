import { compare, hash } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

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

const compirePassword = async (userPassword, passwordHashed) => {
  const isPassword = await compare(userPassword, passwordHashed);

  return isPassword;
};

const onError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  let error = { ...err };
  error.message = err.message;
  res.status(err.statusCode).json({
    error,
    message: error.message,
    stack: error.stack,
  });
};

const filterData = (filterData, allData) => {
 
  let TypeStates = []

  const filterStatus = filterData.status ? allData.filter(state=>{
    return   state.values.statusAd = filterData.status 
  }) : allData

  const filterPrice = filterStatus.filter(state=>{
    return  (state.values.price || state.values.deposit) >= filterData.priceRange[0] &&(state.values.price || state.values.deposit) <= filterData.priceRange[1]
  })

  const filterRoom = filterPrice.filter(state=>{
    return state.values.room > filterData.room
  })

  const endFilter = filterData.typeState.length ? filterData.typeState.flatMap(item=>{
    return filterRoom.filter(Item=>{
      return Item.values.typeState === item
    })
  }) : filterRoom

   return endFilter
  
};
const verifyToken = (token) => {
  try {
    const validationResult = verify(token, process.env.privateKey);
    return validationResult;
  } catch (err) {
    console.log("Verify Token Error =>", err);
    return false;
  }
};

export { hashPassword, generateToken, compirePassword, onError, filterData ,verifyToken};
