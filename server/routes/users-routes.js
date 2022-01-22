const express = require("express");
const rootRouter = express.Router();
const {
  loadUsers,
  loadUserById,
  addUser,
  loadUserByCash,
  withdraw,
  transfer,
  deposit,
  updateCredit,
} = require("../controllers/users/controllers");

rootRouter.get("/loadUsers", loadUsers);

rootRouter.get("/loadUserByCash", loadUserByCash);

rootRouter.get("/loadUserById", loadUserById);

rootRouter.post("/addUser", addUser);

rootRouter.put("/withdraw", withdraw);

rootRouter.put("/transfer", transfer);

rootRouter.put("/deposit", deposit);

rootRouter.put("/updateCredit", updateCredit);

module.exports = rootRouter;
