const express = require("express");
const router = express.Router();
const {
  getAllAccounts,
  AddNewAccount,
  deleteOneAccount,
  updateOneAccount,
} = require("./accounts.controllers");

router.get("/", getAllAccounts);

router.post("/", AddNewAccount);

router.delete("/:accountId", deleteOneAccount);

router.put("/:accountId", updateOneAccount);

module.exports = router;
