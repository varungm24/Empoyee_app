const mongoose = require('mongoose')

const EmpoyeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  picture: String,
  salary: String,
  position: String,
})

mongoose.model('employee', EmpoyeeSchema)
