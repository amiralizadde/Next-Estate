import apiRequest from "../configs/configs";

const createUser = (data) => {
  const { name, lastname, username, email, password } = data;
  return apiRequest.post("/auth/signup", {
    name,
    lastname,
    username,
    email,
    password,
  });

};

const loginUser = (data) => {
  const { identifire , password } = data;
  return apiRequest.post("/auth/signin", {
    identifire,
    password,
  });

};

export { createUser ,loginUser};
