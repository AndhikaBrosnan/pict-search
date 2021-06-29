import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID y6QScVCTWmRx8_y5ek8R26DOFwVCTzprUJ9tdQ78HyU",
  },
});
