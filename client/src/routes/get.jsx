import React from "react";
import { Route } from "react-router-dom";

import LoadUsers from "../pages/get/LoadUsers";
import LoadUserByCash from "../pages/get/LoadUserByCash";
import LoadUserById from "../pages/get/LoadUserById";


function getRoutes() {
  return (
    <>
      <Route path="/loadUsers" exact element={<LoadUsers />} />
      <Route path="/loadUserByCash" exact element={<LoadUserByCash />} />
      <Route path="/loadUserById" exact element={<LoadUserById />} />
    </>
  );
}

export default getRoutes;