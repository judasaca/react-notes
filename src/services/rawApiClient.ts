import axios from "axios";

const rawApiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "28d3555ddd534a61bc5acb7020f4cca9",
  },
});
export default rawApiClient;
