import axios from "axios";

export default axios.create({
  baseURL: `http://api.football-data.org/v2`,
  withCredentials: false,
  headers: {
    "X-Auth-Token": "82caa0ced9a34013ad811a67ad6edcdc"
  }
});
