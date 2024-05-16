import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  password: String,
});
//conversion of schema to model
export const Person = mongoose.model('Person', personSchema,'users');//create collection on db as -users