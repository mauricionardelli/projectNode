const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ApprovalSchema = new mongoose.Schema({
    companyId: {
        type: Number,
        require: true
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
        default: Date.now
    },
    createat: {
        type: Date,
        default: Date.now
    }
});

ApprovalSchema.plugin(mongoosePaginate);

mongoose.model('User', ApprovalSchema);