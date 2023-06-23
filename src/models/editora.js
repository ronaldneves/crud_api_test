import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema({
        id: {type: mongoose.SchemaTypes.ObjectId},
        nome: {type: String, required: true},
        origem: {type: String, required: true}
},
{
    versionKey: false
});

const editoras = mongoose.model('editoras', editoraSchema);

export default editoras;