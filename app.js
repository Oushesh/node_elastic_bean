const express = require("express")
const app = express()

app.get("/",function(req,res)
{
    res.send("It worked");
})

const port = 8501
app.listen(process.env.PORT || 8501);
module.exports = app;


