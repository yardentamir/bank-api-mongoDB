const User = require("../../models/user");

const validateUser = (body) => {
  const { credit, cash, isActive } = body;
  if (typeof credit !== "number" || typeof cash !== "number") {
    throw new Error("Please insert a number");
  }
  if (credit < 0) throw new Error("credit can only be a positive number");
  if (typeof isActive !== "boolean")
    throw new Error("isActive can only be a boolean");
};

const withdrawValidation = ({ credit, cash }, amount) => {
  if (credit + cash < amount) throw new Error("there is no sufficient funds");
  if ((!credit || !cash) && credit !== 0 && cash !== 0)
    throw new Error("credit and cash field are required");

  let tempCash = cash;
  if (tempCash > 0) {
    tempCash -= amount;
  }
  if (cash <= 0 && credit > 0) {
    credit -= amount;
  }

  return { credit, cash: tempCash };
};

const getterTransfer = ({ cash }, amount) => {
  if (typeof cash === "number" && typeof !amount === "number")
    throw new Error("amount and cash field are required");

  cash += amount;

  return { cash };
};

const isActiveValidation = (user) => {
  if (!user.isActive) throw new Error("The user isn't active");
};

const updateUserWithdraw = async (id, user, amount, type) => {
  const updatedUser = await updateUser(
    id,
    type === "sender"
      ? withdrawValidation(user, amount)
      : getterTransfer(user, amount)
  );
  await updatedUser.save();
  return updatedUser;
};

const findUserConvertToObject = async (id) => {
  const user = await findUserBy("_id", id);
  return userToObject(user);
};

const userToObject = (user) => {
  const userJSON = JSON.stringify(user);
  return JSON.parse(userJSON)[0];
};

const allUsers = () => User.find();

const updateUser = async (id, body) =>
  await User.findByIdAndUpdate(id, { $set: body }, { new: true });

const findUserBy = (key, value) => User.find({ [key]: value });
// find return [ even if it's empty] findOne || findById return {} || undefind

module.exports = {
  validateUser,
  withdrawValidation,
  updateUser,
  isActiveValidation,
  updateUserWithdraw,
  allUsers,
  findUserBy,
  findUserConvertToObject,
};
