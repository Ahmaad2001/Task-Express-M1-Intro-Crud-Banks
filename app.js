const PORT = 8000;
const express = require("express");
const app = express();
const router = require("./api/accounts/accounts.routes");

app.use(express.json());
app.use("/api/accounts", router);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
