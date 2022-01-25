import axios from "axios";

let myUrl = "http://localhost:5000/api/"; //development

if (process.env.NODE_ENV === "production") {
  myUrl = "api";
}
export default axios.create({
  baseURL: myUrl,
});

// dev

// client: http://localhost:3000
// server: http://localhost:5000

// pro

// client: https:/serverAddress.herokuapp.come
// server: https:/serverAddress.herokuapp.come
