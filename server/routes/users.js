const express = require("express");
const rootRouter = express.Router();
const imgUpload = require("../middleware/img");
const auth = require("../middleware/auth");
const {
  loadUsers,
  loadUserById,
  addUser,
  loadUserByCash,
  withdraw,
  transfer,
  deposit,
  updateCredit,
  uploadAvatar,
  errorUploadAvatar,
  userLogin,
  userLogOut,
  userLogOutAll,
  loadAvatar,
} = require("../controllers/users/controllers");

rootRouter.get("/loadUsers", loadUsers);

rootRouter.get("/loadUserByCash/:id", loadUserByCash);

rootRouter.get("/loadUserById/:id", loadUserById);

rootRouter.post("/addUser", addUser);

rootRouter.put("/withdraw/:id", withdraw);

rootRouter.put("/transfer/:sender/:getter", transfer);

rootRouter.put("/deposit/:id", deposit);

rootRouter.put("/updateCredit/:id", updateCredit);

rootRouter.get("/me", auth, async (req, res) => {
  res.send(req.user);
});

rootRouter.post(
  "/:id/uploadAvatar",
  imgUpload.single("avatar"),
  uploadAvatar,
  errorUploadAvatar
);

rootRouter.get("/:id/avatar", loadAvatar);

rootRouter.post("/login", userLogin);

rootRouter.post("/logout", auth, userLogOut);

rootRouter.post("/logoutAll", auth, userLogOutAll);

module.exports = rootRouter;
