const express = require("express");
const citiesRouter = require("./routes/cities.routes");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use("/api", citiesRouter);

app.listen(PORT, () => {
  console.log(`server started on port : ${PORT}`);
});
