import React from "react";
import { Route } from "react-router-dom";

import Withdraw from "../pages/put/Withdraw";
import Transfer from "../pages/put/Transfer";
import Deposit from "../pages/put/Deposit";
import UpdateCredit from "../pages/put/UpdateCredit";

function putRoutes() {
  return (
    <>
      <Route path="/withdraw" exact element={<Withdraw />} />
      <Route path="/transfer" exact element={<Transfer />} />
      <Route path="/deposit" exact element={<Deposit />} />
      <Route path="/updateCredit" exact element={<UpdateCredit />} />
    </>
  );
}

export default putRoutes;