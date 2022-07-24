const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const api = require("./api/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", api);

app.listen(PORT, () => {
  console.log(`Server run : http://localhost:${PORT}/`);
});
