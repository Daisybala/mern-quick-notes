const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema ({
    user:{
        type: String,
        required: true
    },
    text:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {})

module.exports = mongoose.model('Note', noteSchema);