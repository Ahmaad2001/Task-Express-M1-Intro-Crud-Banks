const PORT = 8000;
const express = require("express");
const app = express();
const accountsRouter = require("./api/accounts/accounts.routes");

app.use(express.json());
app.use("/api/accounts", accountsRouter);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
