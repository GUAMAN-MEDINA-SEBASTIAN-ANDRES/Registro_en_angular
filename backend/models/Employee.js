const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// definir el esquema
let Employee = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   city: {
      type: String
   },
   age: {
      type: Number
   }
}, {
   collection: 'employees'
})

module.exports = mongoose.model('Employee', Employee)