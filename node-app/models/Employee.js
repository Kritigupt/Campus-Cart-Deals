const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema
(
    {
       username: String,
       // email: String,
        password: String
    }
)

const Users = mongoose.model("Users", EmployeeSchema);
