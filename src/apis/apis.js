import axios from "axios";

const local="http://localhost:5000"
const prod="https:"

const devApis={
    USER_API:`${local}/api/`
}
const prodApis={
    USER_API:`${prod}/api/`
}

const getApiUrls = () => {
    const environment = process.env.REACT_APP_ENV;
    console.log(environment);
    switch (environment) {
      case "dev":
        return devApis;
      case "prod":
        return prodApis;
      default:
        return devApis;
    }
  };

  export const APIS = getApiUrls();

  export const userApi = axios.create({
    baseURL: APIS.USER_API,
  });