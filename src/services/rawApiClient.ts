import axios from "axios";

const rawApiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "657c0b4489db4f9084af2260f174753e",
  },
});
export default rawApiClient;
