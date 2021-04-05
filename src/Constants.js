export const BASE_URL = () => {
    if (process.env.NODE_ENV === "development") {
      // return "http://localhost:8000";

      // return "https://api.maitre-eg.com";

      return "https://maitre-backend-temp.herokuapp.com";
    } else {
      // return "https://api.maitre-eg.com";
      return "https://maitre-backend-temp.herokuapp.com";
    }
  };
  export const ROUTE = () => {
    if (process.env.NODE_ENV === "development") {
      return "http://localhost:3000";
    } else {
      return "http://localhost:3000";
    }
  };
  
  export const Image_URL = () => {
    if (process.env.NODE_ENV === "development") {
      return "http://localhost:3000";
    } else {
      return "http://localhost:3000";
    }
  };