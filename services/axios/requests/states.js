const { default: apiRequest } = require("../configs/configs");

const createAd = (form) => {
  return apiRequest.post(
    "/states/createAd",
    {
      form,
    },
    {
      headers: {
        "Content-Type":
          "multipart/form-data; boundary:'------WebKitFormBoundaryg7okV37G7Gfll2hf--",
      },
    }
  );
};


// const getAllStates = ()=>{
//   return apiRequest.get('/')
// }

export { createAd };
