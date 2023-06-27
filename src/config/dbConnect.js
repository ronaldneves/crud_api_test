import mongoose from "mongoose";

mongoose.connect("your database here");

let db = mongoose.connection

export default db;
