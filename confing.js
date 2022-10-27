const {config} = require("dotenv");
config();

const PORT=process.env.PORT || 3000
const URI=process.env.URI || "mongodb://localhost:27017/notas"

module.exports={PORT,URI};