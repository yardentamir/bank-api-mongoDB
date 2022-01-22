import React from "react";
import { Route } from "react-router-dom";

import AddUser from "../pages/post/AddUser";

function postRoutes() {
  return (
    <Route path="/addUser" exact element={<AddUser />} />
  );
}

export default postRoutes;