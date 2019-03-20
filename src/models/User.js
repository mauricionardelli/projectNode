const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    companyId: {
        type: Number,
        default: 1
    },
    systemId: {
        type: Number,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createat: {
        type: Date,
        default: Date.now
    }
});

UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', UserSchema);