import axios from "axios";

const apiRequest = axios.create({
  baseURL: "/api",
  // headers: { "Content-Type": "application/json" },
});

apiRequest.interceptors.response.use(
  function (response) {
    console.log("response ->>", response);

    switch (response.status) {
      case 200: {
        response = " Successfully ...";
        return response;
      }
      default:
        break;
    }
    return response;
  },
  function (error) {
    console.log("error->>", error);

    switch (error.response.status) {
      case 400: {
        error = "This User Existed  ...";
        return Promise.reject(error);
      }
      case 422: {
        error = "Please Send Data Valid  ...";
        return Promise.reject(error);
      }
      case 500: {
        error = " Unknown Internal Server Error  ...";
         return Promise.reject(error);
      }

      default:
        break;
    }
  }
);

export default apiRequest;
