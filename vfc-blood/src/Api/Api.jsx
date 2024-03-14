import axios from "axios";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { baseURL } from "../Constants/Constant";
const apiInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`,
//   },
  withCredentials: true,
});
export const Api = () => {
//   const toastService = useToastService();
//   const navigate = useNavigate();

  useEffect(() => {
    const requestInterceptor = apiInstance.interceptors.request.use(
      (config) => config,
      (error) => Promise.reject(error)
    );

    const responseInterceptor = apiInstance.interceptors.response.use(
      (response) => {
        if (response.data && response.data.message) {
          // Display success message using ToastService
        //   toastService(response.data.message, "success");
        }
        return response;
      },
      (error) => {
        if (error.response) {
          const { status } = error.response;
          if (status === 400) {
            // toastService(data.message, "error");
          } else if (status === 401) {
            // toastService("Unauthorized: Please log in.", "error");
            // navigate(ROUTERS.LOGIN_ROUTER);
            // You might want to redirect to the login page or handle unauthorized users appropriately
          } else if (status === 403) {
            // toastService("Unauthorized: Please log in.", "error");
            // navigate(ROUTERS.LOGIN_ROUTER);
          } else if (status === 404) {
            // toastService("Unauthorized: Please log in.", "error");

            console.log(error);
          } else if (status === 500) {
            // toastService(
            //   "Internal Server Error: Please try again later.",
            //   "error"
            // );
          } else {
            // toastService(`HTTP error ${status}: ${data.message}`, "error");
          }
        } else if (error.request) {
          console.error("No response received from the server.");
        //   toastService("No response received from the server.", "error");
        } else {
          console.error("Error during request setup:", error.message);
        //   toastService(`Error during request setup: ${error.message}`, "error");
        }
        return Promise.reject(error);
      }
    );

    return () => {
      apiInstance.interceptors.request.eject(requestInterceptor);
      apiInstance.interceptors.response.eject(responseInterceptor);
    };
  }, []);
 
  return null;
};

export default apiInstance;
