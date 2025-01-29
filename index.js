const express = require("express");
const cors = require("cors")
require("dotenv").config();


const app = express();
app.use(express.json());
app.use(cors())
const port = process.env.PORT || 3000;

app.get("/", (req, res)=>{
  const data = {
    email: "nwabueze2amarachi@gmail.com",
    current_datetime: new Date().toISOString().split(".") [0] + "Z",
    github_url: "https://github.com/Amyy16/hng-stage-0"
  }
  res.status(200).json(data)
})

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
