const express = require("express")
const path = require("path");
const app = express()
const PORT = process.env.PORT || 9001; 

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT,  () => console.log(`Server listening on port ${PORT}!`));