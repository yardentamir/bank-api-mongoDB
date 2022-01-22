import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import LoadUsers from "./pages/LoadUsers/LoadUsers";
import Home from "./pages/Home/Home";
import LoadUserByCash from "./pages/LoadUserByCash/LoadUserByCash";
import LoadUserById from "./pages/LoadUserById/LoadUserById";
import AddUser from "./pages/AddUser/AddUser";
import Withdraw from "./pages/Withdraw/Withdraw";
import Transfer from "./pages/Transfer/Transfer";
import Deposit from "./pages/Deposit/Deposit";
import UpdateCredit from "./pages/UpdateCredit/UpdateCredit";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/loadUsers" exact element={<LoadUsers />} />
        <Route path="/loadUserByCash" exact element={<LoadUserByCash />} />
        <Route path="/loadUserById" exact element={<LoadUserById />} />
        <Route path="/addUser" exact element={<AddUser />} />
        <Route path="/withdraw" exact element={<Withdraw />} />
        <Route path="/transfer" exact element={<Transfer />} />
        <Route path="/deposit" exact element={<Deposit />} />
        <Route path="/updateCredit" exact element={<UpdateCredit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;