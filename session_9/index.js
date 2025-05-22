const exp = require("express");
const app = exp();
const mysql = require("mysql2");
// database server
const db = mysql.createPool({
    port: 3306,
    host: 'localhost',
    user:'root',
    password: "student",
    database:'employee'

})
db.getConnection((err) =>{
   
    if (err) {
        console.log("db is not connected");
    }
    else {
        console.log("db is connected")
    }
})
// select query is used for get()
app.get("/alluser", (req, res) => {
    res.send("data  is sent");
})
app.listen(8000, () => {
    console.log("Server is running");
})