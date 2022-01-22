const User = require("../../models/user");
const {
  validateUser,
  withdrawValidation,
  updateUser,
  isActiveValidation,
  updateUserWithdraw,
  allUsers,
  findUserBy,
  findUserConvertToObject,
} = require("./utils.js");

const addUser = async (req, res) => {
  const { body } = req;

  try {
    validateUser(body);
    const user = new User(body);
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

const loadUserById = async (req, res) => {
  const { id } = req.query;
  try {
    const user = await findUserBy("_id", id);

    if (!user) {
      return res.status(404).send("There is no such users");
    }

    res.status(201).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
};

const loadUserByCash = async (req, res) => {
  const { cash } = req.query;

  try {
    const user = await findUserBy("cash", cash);

    if (!user) {
      return res.status(404).send("There is no such users");
    }

    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
};

const loadUsers = async (req, res) => {
  try {
    const users = await allUsers();
    res.status(201).send(users);
  } catch (e) {
    res.status(500).send(e);
  }
};

const withdraw = async (req, res) => {
  const { id } = req.query;
  const { amount } = req.body;

  try {
    if (!amount) throw new Error(`amount field is required`);

    const user = await findUserConvertToObject(id);

    isActiveValidation(user);

    const userAfterValidation = withdrawValidation(user, amount);
    const updatedUser = await updateUser(id, userAfterValidation);
    await updatedUser.save();

    const userAfterChanges = await findUserConvertToObject(id);
    res.status(201).send(userAfterChanges);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const transfer = async (req, res) => {
  const { sender, getter } = req.query;
  const { amount } = req.body;
  try {
    if (!amount) throw new Error(`amount field is required`);

    const senderUser = await findUserConvertToObject(sender);
    const getterUser = await findUserConvertToObject(getter);

    validateUser(senderUser);
    validateUser(getterUser);
    isActiveValidation(senderUser);

    await updateUserWithdraw(sender, senderUser, amount, "sender");
    await updateUserWithdraw(getter, getterUser, amount, "getter");

    const senderUserAfterChanges = await findUserConvertToObject(sender);
    const getterUserAfterChanges = await findUserConvertToObject(getter);

    res.status(201).send([senderUserAfterChanges, getterUserAfterChanges]);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const deposit = async (req, res) => {
  const { id } = req.query;
  const { amount } = req.body;

  try {
    if (!amount) throw new Error(`amount field is required`);

    const user = await findUserConvertToObject(id);
    user.cash += amount;

    validateUser(user);
    isActiveValidation(user);

    const updatedUser = await updateUser(id, user);
    await updatedUser.save();

    const userAfterChanges = await findUserConvertToObject(id);
    res.status(201).send(userAfterChanges);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const updateCredit = async (req, res) => {
  const { id } = req.query;
  const { credit } = req.body;

  try {
    if (!credit) throw new Error(`credit field is required`);

    const user = await findUserConvertToObject(id);
    user.credit = credit;

    validateUser(user);
    isActiveValidation(user);

    const updatedUser = await updateUser(id, user);
    await updatedUser.save();

    const userAfterChanges = await findUserConvertToObject(id);
    res.status(201).send(userAfterChanges);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = {
  loadUsers,
  loadUserById,
  addUser,
  loadUserByCash,
  updateCredit,
  withdraw,
  transfer,
  deposit,
};
