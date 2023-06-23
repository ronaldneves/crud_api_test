import mongoose from "mongoose";

mongoose.connect("mongodb+srv://ronaldohcorreia:Vv5Sjo4Z8y5LEmN4@cluster0.vlmytfq.mongodb.net/alura-node");

let db = mongoose.connection

export default db;