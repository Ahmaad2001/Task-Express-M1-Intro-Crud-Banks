let accounts = require("../../accounts");

const getAllAccounts = (req, res) => {
  return res.status(200).json(accounts);
};

const AddNewAccount = (req, res) => {
  const newId = accounts[accounts.length - 1].id + 1;
  let newAccount = req.body;
  newAccount = { funds: 0, ...newAccount, id: newId };
  accounts.push(newAccount);
  return res.status(201).json(accounts);
};

const deleteOneAccount = (req, res) => {
  const { accountId } = req.params;
  const foundAccount = accounts.find((account) => account.id === +accountId);
  if (foundAccount) {
    accounts = accounts.filter((account) => account.id !== +accountId);
    return res.status(204).json(accounts);
  } else {
    return res.status(404).json({ message: "not found" });
  }
};

const updateOneAccount = (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((acc) => acc.id == accountId);
  if (!account)
    return res.status(404).json({
      msg: "Account not found",
    });
  account.username = req.body.username ? req.body.username : account.username;
  account.funds = req.body.funds ? req.body.funds : account.funds;
  return res.status(200).json(account);
};

module.exports = {
  getAllAccounts,
  AddNewAccount,
  deleteOneAccount,
  updateOneAccount,
};
