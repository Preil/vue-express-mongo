const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let transactionSchema = Schema({
    userId: mongoose.SchemaTypes.ObjectId,
    transactionDate: { type: Date, required: true},
    transactionType: { type: String, required: true},
    description: { type: String, required: true},
    charge: { type: Number, default: true},
    deposit: { type: Number, default: true},
    notes: { type: String, default: ''},
    createdOn: { type: Date, default:Date.now()}
});


const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;